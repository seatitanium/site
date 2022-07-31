<template>
	<div class="status-card">
		<div class="loading">
			<status :status="loadingStatus" />
		</div>
		<div v-if="loadingStatus === ''">
			<div class="ip">
				<h1 class="iptitle">
					{{ noInstanceInfo ? "" : "服务器当前 IP" }}
				</h1>
				<div class="meta">
					<span
						class="status"
						:class="server.online === true ? 'online' : 'offline'"
						><mdicon 
							:name="
								server.online === true
									? 'check-circle-outline'
									: 'close-circle-outline'
							"
						/>{{
							isPCSize()
								? (server.online === true ? "在线" : "不在线") 
								: ""
						}}</span
					>&nbsp;
					<span
						class="online-player-count"
						v-if="server.online === true"
						>{{ " · " +
							(typeof server.onlinePlayers === "undefined"
								? "-"
								: server.onlinePlayers) +
							"/" +
							(typeof server.onlinePlayers === "undefined"
								? "-"
								: server.maxPlayers)
						}}</span
					>
				</div>
				<h1 class="ip primary-text">
					{{ server.ip }}
					<smart-button
						v-if="
							isPCSize() && /\d+\.\d+\.\d+\.\d+/.test(server.ip)
						"
						:onclick="[copyIP, server.ip]"
						class="copy-button"
						iconInactive="clipboard-multiple-outline"
						iconActive="check"
						textInactive="点击复制"
						textActive="复制成功"
						colorInactive=""
						colorActive="white"
						backgroundInactive=""
						backgroundActive="#4caf50"
						borderColorInactive=""
						borderColorActive="#4caf50"
					/>
				</h1>
				<hr />
				<meta-bar v-if="isPCSize()" style="margin-top: 16px" class="monospace">
					<meta-item icon="minecraft">
						<template #name>版本</template>
						<template #text>1.18.2</template>
					</meta-item>
					<meta-item icon="package">
						<template #name>周目</template
						><template #text>ST5</template>
					</meta-item>
					<meta-item icon="calendar"
						><template #name>开始时间</template>
						<template #text>2022-07-30</template></meta-item
					>
				</meta-bar>
			</div>

			<div class="players-online" v-if="server.online === true">
				<h2>{{ hasPlayer() ? '在线玩家' : '当前暂无在线玩家'}}</h2>
				<div class="player-details" v-if="hasPlayer()">
					<div
						@click="$open('https://namemc.com/profile/' + x.id)"
						class="player"
						v-for="(x, i) in server.onlinePlayersDetails"
						:key="i"
					>
						<img
							:src="'https://crafatar.com/renders/head/' + x.id"
						/>
						<h1>{{ x.name }}</h1>
					</div>
				</div>
			</div>

			<!-- <div v-if="server.rawMods && isPCSize()" class="all-mods">
				<h2>模组列表 · {{ server.rawMods.length }} 个</h2>
				<div class="raw-mods">
					<div
						class="raw-mod"
						v-for="(x, i) in server.rawMods"
						:key="i"
					>
						<div class="name">{{ x.modId }}</div>
						<div class="version">
							{{
								x.modmarker
									? x.modmarker.includes("OHNO") ||
									  x.modmarker === "NONE" ||
									  x.modmarker === "version"
										? "未知版本"
										: x.modmarker
									: "未知版本"
							}}
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import { copy, get, isPCSize, isMobile, sleep } from "@/fn";
// @ts-ignore
import Motd from "mcmotdparser";
import Btn from "@/components/Btn.vue";
import Status from "@/components/Status.vue";
import SmartButton from "@/components/SmartButton.vue";
import MetaBar from "./MetaBar.vue";
import MetaItem from "./MetaItem.vue";

export default Vue.extend({
	components: {
		Banner,
		Btn,
		Status,
		SmartButton,
		MetaBar,
		MetaItem,
	},
	data() {
		return {
			server: {} as ServerInformation,
			motdHtml: "",
			loadingStatus: "loading",
			noInstanceInfo: false,
			clipboardIcon: "mdi-clipboard-multiple-outline",
			clipboardBackground: "",
			clipboardText: "点击复制",
		};
	},
	mounted() {
		this.init();
		this.update();
	},
	methods: {
		isMobile,
		hasPlayer() {
			if (this.server.onlinePlayers) {
				return this.server.onlinePlayers > 0;
			}
			return false;
		},
		isPCSize,
		init() {
			this.loadingStatus = "loading";
			this.getData();
		},
		async update() {
			while (1) {
				await sleep(5000);
				this.getData();
			}
		},
		copyIP(ip: string) {
			copy(ip);
			this.clipboardIcon = "mdi-check";
			this.clipboardBackground = "#4caf50";
			this.clipboardText = "复制成功";
		},
		getData() {
			get("/api/server/v1/get/server")
				.then((r) => {
					this.noInstanceInfo = false;
					if (r.data.status !== "ok") {
						this.server.ip = "-";
						this.loadingStatus = "error";
						console.warn(r.data.status, r.data.msg);
						return;
					}
					let data: ServerInformation | null = r.data.data as any;
					if (data !== null) {
						let d = new Date();
						this.loadingStatus = "";
						if (data.created === false) {
							this.server.ip = "实例未开通";
							this.server.online = false;
							this.loadingStatus = "";
							this.noInstanceInfo = true;
							return;
						}

						if (data.online) {
							if (data.onlinePlayersDetails !== null) {
								data.onlinePlayersDetails =
									data.onlinePlayersDetails
										.slice(0, 20)
										.sort((a, b) => {
											return a.name < b.name
												? -1
												: a.name > b.name
												? 1
												: 0;
										});
							}
						}
						this.server = data;
						//@ts-ignore
						Motd.toHtml(this.server.motd, (err, res) => {
							this.motdHtml = res;
						});
					} else {
						this.loadingStatus = "error";
					}
				})
				.catch((e) => {
					console.warn(e);
					this.loadingStatus = "error";
				});
		},
	},
});
</script>

<style lang="less" scoped>
.debug-info {
	color: @textlightgray;
}

.copy-button {
	cursor: pointer;
	padding: 2px 6px;
	border: 0;
	border: 1px solid @primary;
	background: @primary;
	color: white;
	transition: all 0.2s ease;
	vertical-align: middle;
	margin-left: 16px;
	outline: none;
	&:hover {
		background: white;
		color: @primary;
		border-color: @primary;
		transform: scale(1.1);
	}
}

.loading {
	display: flex;
	align-items: center;
	justify-content: center;
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

.status-card {
	position: relative;
	box-shadow: @shadowlight;
	padding: 32px;
	border-radius: 5px;
	margin: 32px 0;
	background: white;
	@media (max-width: 1200px) {
		max-width: 700px;
		margin: 32px auto;
	}

	h2 {
		font-size: 20px;
		font-weight: normal;
		margin: 8px 0;
		cursor: default;
		&:hover {
			&::before {
				opacity: 1;
			}
		}
		&::before {
			content: "#";
			font-weight: bold;
			margin-right: 4px;
			color: @primary;
			opacity: 0.5;
			transition: all 0.2s ease;
		}
	}
}

.ip {
	h1.iptitle {
		font-weight: normal;
		color: @textlightgray;
		margin: 0;
	}

	h1 {
		margin: 8px 0;
	}

	h1 {
		font-size: 56px;
	}
	h1.iptitle {
		font-size: 24px;
	}
	@media (max-width: 800px) {
		h1 {
			font-size: 42px;
		}
		h1.iptitle {
			font-size: 24px;
		}
	}
	margin-bottom: 32px;
}

.meta {
	position: absolute;
	right: 32px;
	top: 32px;
	font-size: 22px;
	display: inline-flex;
	align-items: center;

	.mdi > svg {
		vertical-align: sub;
	}
}

.status {
	display: inline-flex;
	align-items: center;

	.mdi {
		margin-right: 0.5em;

		@media (max-width: 900px) {
			margin: 0;
		}
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

.server-data {
	margin: 32px 0;
}

.container {
	position: relative;
}

.primary-text {
	@media (max-width: 800px) {
		text-align: center;
		width: 100%;
	}
}

.player-details {
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	margin-left: -8px;
	margin-right: -8px;
	.player {
		@media (max-width: 900px) {
			padding: 5px;
			margin: 5px;
			img {
				width: 20px;
			}
			h1 {
				font-size: 14px;
			}
		}
		@media (min-width: 900px) {
			padding: 8px;
			margin: 8px;
			h1 {
				font-size: 16px;
			}
			img {
				width: 24px;
			}
		}
		background: white;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.21);
		display: inline-flex;
		align-items: center;

		h1 {
			font-weight: normal;
			margin: 0;
			margin-left: 0.5em;
		}
		background: white;
		color: @textgray;
		cursor: pointer;
		transition: all 0.2s ease;
		&:hover {
			background: @primary;
			color: white;
			border-color: white;
		}
	}
}
</style>
