<template>
	<div page>
		<banner
			bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/1.jpg"
		>
			<template #title> 服务器状态 </template>
			<template #subtitle> 实时 </template>
			<template #text
				>查看当前服务器的运行情况和一些基本信息<br />这些信息在服务器上是即时更新的，可通过点击「刷新数据 <mdicon name="refresh"/>」按钮来刷新</template
			>
		</banner>
		<div class="basic container">
			<div class="refresh">
				<btn
					type="outlined dark small"
					class="refresh-btn"
					icon="refresh"
					@click.native="init()"
					>刷新数据</btn
				>
				<br /><span
					>{{ lastUpdated.date }}<br />{{ lastUpdated.time }}</span
				>
			</div>
			<div class="ip">
				<h2>当前服务器 IP</h2>
				<h1 class="ip primary-text">{{ server.ip || "加载中..." }}</h1>
				<span
					class="status"
					:class="
						typeof server.online !== 'undefined'
							? server.online === true
								? 'online'
								: 'offline'
							: 'unknown'
					"
					><mdicon
						:name="
							typeof server.online !== 'undefined'
								? server.online === true
									? 'check-circle-outline'
									: 'close-circle-outline'
								: 'help-circle-outline'
						"
					/>{{
						typeof server.online !== "undefined"
							? server.online === true
								? "在线"
								: "不在线"
							: "获取中..."
					}}</span
				>
			</div>
			<div class="container">
				<div class="arguments">
					<div class="card">
						<h1 class="primarys-text">周目名称</h1>
						<p>
							{{ server.term || "???" }}
						</p>
					</div>
					<div class="card">
						<h1 class="primarys-text">在线人数</h1>
						<p>
							{{
								(typeof server.onlinePlayers === "undefined"
									? "??"
									: server.onlinePlayers) +
								"/" +
								(typeof server.onlinePlayers === "undefined"
									? "??"
									: server.maxPlayers)
							}}
						</p>
					</div>
					<div class="card">
						<h1 class="primarys-text">建议内存</h1>
						<p>≥ {{ server.bestram || '?' }}GB</p>
					</div>
				</div>
				<p v-if="loading" class="loading-tip">
					<mdicon
						name="information-outline"
					/>其它信息将在加载完成后显示
				</p>
				<div class="server-data">
					<div class="players" v-if="hasPlayer()">
						<h1 class="primary-text">
							当前在线 ({{ server.onlinePlayers }}/{{
								server.maxPlayers
							}})
						</h1>
						<div class="player-details">
							<div
								@click="
									$open('https://namemc.com/profile/' + x.id)
								"
								class="player"
								v-for="(x, i) in server.onlinePlayersDetails"
								:key="i"
							>
								<img
									:src="
										'https://crafatar.com/renders/head/' +
										x.id
									"
								/>
								<h1>{{ x.name }}</h1>
							</div>
						</div>
					</div>
					<div v-if="motdHtml">
						<h1 class="primary-text">
							<abbr title="Message of the Day">MOTD</abbr> 信息
						</h1>
						<div v-html="motdHtml" />
					</div>
					<div v-if="server.rawMods">
						<h1 class="primary-text">
							模组列表 ({{ server.rawMods.length }} 个)
						</h1>
						<div class="raw-mods">
							<div
								class="raw-mod"
								v-for="(x, i) in server.rawMods"
								:key="i"
							>
								<div class="name">{{ x.modId }}</div>
								<div class="version">{{ x.modmarker }}</div>
							</div>
						</div>
					</div>
					<p class="debug-info" v-if="instance.type">
						阿里云 ECS 配置信息：实例类型 {{ instance.type }} / 地域
						{{ instance.zone }} / 硬盘
						{{ instance.systemdisk.size }}+{{
							instance.datadisk.size
						}}GB / 带宽 {{ instance.bandwidth }}Mbps / ￥0.8 per GB
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import { get } from "@/fn";
// @ts-ignore
import Motd from "mcmotdparser";
import Btn from "@/components/Btn.vue";

export default Vue.extend({
	components: {
		Banner,
		Btn,
	},
	data() {
		return {
			server: {} as ServerInformation,
			motdHtml: "",
			loading: true,
			instance: {} as InstanceInformation,
			lastUpdated: {
				date: "",
				time: "",
			},
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		hasPlayer() {
			if (this.server.onlinePlayers) {
				return this.server.onlinePlayers > 0;
			}
			return false;
		},
		init() {
			this.lastUpdated.time = "";
			this.lastUpdated.date = "更新中...";
			get("/api/server/v1/get/server")
				.then((r) => {
					let data: ServerInformation | null = r.data.data as any;
					if (data !== null) {
						let d = new Date();
						this.lastUpdated.date = d.toLocaleDateString();
						this.lastUpdated.time = d.toLocaleTimeString();
						this.loading = false;
						if (data.onlinePlayersDetails !== null) {
							data.onlinePlayersDetails =
								data.onlinePlayersDetails.slice(0, 20);
						}
						this.server = data;
						//@ts-ignore
						Motd.toHtml(this.server.motd, (err, res) => {
							this.motdHtml = res;
						});
					} else {
						this.lastUpdated.date = "没有返回任何数据";
					}
				})
				.catch((e) => {
					console.warn(e);
					this.lastUpdated.date = "更新失败";
				});
			get("/api/ecs/v1/describe/instance").then((r) => {
				let data: InstanceInformation | null = r.data.data as any;
				if (data !== null) {
					this.instance = data;
				}
			});
		},
	},
});
</script>

<style lang="less" scoped>
.debug-info {
	color: @textlightgray;
}

.loading-tip {
	text-align: center;
	color: @textlightgray;
	margin: 56px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.mdi {
		margin-right: 1em;
	}
}

.raw-mods {
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;

	.raw-mod {
		display: block;
		margin: 4px;
		background: black;
		border-radius: 5px;
		color: white;
		padding: 8px;
		.name,
		.version {
			display: inline-block;
		}
		transition: background 0.3s ease, color 0.3s ease, box-shadow 0.2s ease;

		&:hover {
			background: white;
			color: black;
			.version {
				color: @textlightgray;
			}
			box-shadow: @shadowlight;
		}

		cursor: default;

		.version {
			color: @textlightwhite;
			margin-left: 0.5em;
		}
	}
}

.ip {
	margin: 56px 0;
	text-align: center;
	h2 {
		font-weight: normal;
		color: @textlightgray;
	}

	h1,
	h2 {
		margin: 4px 0;
	}

	h1 {
		font-size: 56px;
	}

	.status {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		.mdi {
			margin-right: 0.5em;
		}
		&.online {
			color: #4caf50;
		}
		&.offline {
			color: #f44336;
		}
		&.unknown {
			color: @textlightgray;
		}
	}
}

.arguments {
	display: flex;
	align-items: stretch;

	.card {
		margin: 0 8px;
		width: 33.33%;
		text-align: center;
		h1 {
			text-align: center;
			font-size: 22px;
			font-weight: normal;
			margin: 0;
			margin-bottom: 8px;
		}
		p {
			font-size: 48px;
			font-weight: bold;
			color: @textgray;
			margin: 0;
		}
		padding: 16px;
		box-shadow: @shadowlight;
		border-radius: 5px;
	}
}

.server-data {
	margin: 32px 0;
}

.container {
	position: relative;
}

.player-details {
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	.player {
		box-shadow: @shadowlight;
		border-radius: 5px;
		display: inline-flex;
		align-items: center;
		padding: 12px;
		margin: 8px;
		img {
			width: 24px;
		}
		h1 {
			font-weight: normal;
			font-size: 18px;
			margin: 0;
			margin-left: 0.5em;
		}
		background: black;
		color: white;
		cursor: pointer;
		transition: transform 0.2s ease;
		&:hover {
			transform: scale(1.1);
		}
	}
}

.refresh {
	display: block;
	position: absolute;
	right: 0;
	top: 0;
	text-align: right;
	button {
		display: inline-block;
	}
	span {
		font-size: 12px;
		text-align: right;
	}
}
</style>