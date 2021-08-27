<template>
	<div page>
		<banner bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/2.jpg">
			<template #title> 加入 SEATiDE </template>
			<template #subtitle> 开始体验 </template>
			<template #text>
				SEATiDE 是 Java 正版高版本模组服务器，加入唯一的门槛<br />
				是价值 ￥165 的正版以及一台可以带动模组的电脑。
			</template>
		</banner>
		<div class="container">
			<div class="server-status content">
				<h1 class="primary-text" v-view.once="flowUp">服务器概况</h1>
				<meta-bar v-view.once="flowUp">
					<meta-item icon="minecraft">
						<template #name> 版本 </template>
						<template #text>
							<span style="font-family: Consolas, monospace"
								>Java
								{{
									server.version
										? server.version
										: "获取中..."
								}}</span
							>
						</template>
					</meta-item>
					<meta-item icon="package">
						<template #name> 模组数 </template>
						<template #text>
							{{
								server.mods
									? getModCount(server.mods)
									: "获取中..."
							}}
						</template>
					</meta-item>
					<meta-item icon="map-clock">
						<template #name> 开服时间 </template>
						<template #text>
							{{ server.since ? server.since : "获取中..." }}
						</template>
					</meta-item>
				</meta-bar>
				<p class="typo" v-view.once="flowUp">
					SEATiDE
					当前处于<strong>第一周目</strong>，本周目的主题是<strong>「环境学」</strong>，偏向于休闲生存，配备了许多家具模组。
					<br />作为 SEATiDE
					项目建立以后的第一个周目，本周目的时间<strong>将会较长</strong>。
				</p>
				<div class="mods" v-if="server.mods">
					<div
						v-view.once="scaleIn"
						v-for="(x, i) in isPCSize()
							? server.mods.filter((x) => x.type !== 'dep')
							: server.mods
									.filter((x) => x.type !== 'dep')
									.slice(0, 5)"
						:key="i"
						class="mod"
						v-lazy:background-image="x.bg ? x.bg : ''"
						@click="
							$open('https://search.mcmod.cn/s?key=' + x.name)
						"
					>
						<span>#{{ i + 1 }}</span>
						<h1>{{ x.zh ? x.zh : x.name }}</h1>
						<h2 v-if="x.zh">{{ x.name }}</h2>
						<p v-if="x.desc">{{ x.desc }}</p>
					</div>
				</div>
				<span class="see-full-in-pc" v-if="!isPCSize()"
					><mdicon name="information-outline" />
					在电脑端查看完整内容</span
				>
				<small
					>另包含前置类模组（{{
						getDepNames(server.mods).length
					}}
					个）：{{
						getDepNames(server.mods).join("、")
					}}，模组图片来源 CurseForge。</small
				>
			</div>
			<div class="features content">
				<div class="hero-box">
					<h1 class="primary-text" v-view.once="flowUp">三个概念</h1>
					<p v-view.once="flowUp">
						有助于你更好地了解 SEATiDE 服务器的运行模式
					</p>
				</div>
				<div class="feature-box" v-view.once="animateFeatureBox">
					<div class="feature black">
						<mdicon name="human-handsup" />
						<span>DEMOCRACY</span>
						<h1>民主</h1>
						<p class="typo light">
							服务器的模组选取<strong>不由管理员主导</strong>，而是由玩家共同决定。官方将预先选择一些模组主题，具体模组则由玩家自由决定。
							<br />决定方式有很多种，一般我们采取<strong>语音聊天或者文字交流</strong>，人人平等，仅需给出你的合理理由即可参与！
						</p>
					</div>
					<div class="feature primary">
						<mdicon name="console" />
						<span>TECHNOLOGY</span>
						<h1>技术</h1>
						<p class="typo light">
							在
							SEATiDE，我们<strong>提倡使用各种技术</strong>来解决一些原本看似比较棘手的问题，并尽可能发挥长处，减少痛苦。<br />诚然，一个人不可能是全能的，所以需要来自<strong>多方的协助</strong>。我们提倡互相学习，即使你什么都不了解，也<strong>不必担心</strong>。
						</p>
					</div>
					<div class="feature white">
						<mdicon name="cog" />
						<span>AUTOMATION</span>
						<h1 class="primary-text">自动化</h1>
						<p class="typo light">
							得益于阿里云的
							API，我们可以做到<strong>自动备份</strong>，甚至编写插件，通过让服务器在无人在线<strong
								>超过 12 小时</strong
							>后自动关闭来节省经费，投入到更应该使用的地方。<br />在一些看不见的地方，我们也使用了自动化，这是为了<strong>节省和简化开服体验</strong>。
						</p>
					</div>
				</div>
			</div>
			<div class="join content">
				<h1 class="primary-text" v-view.once="flowUp">立即加入</h1>
				<p class="typo" v-view.once="flowUp">
					若要加入 SEATiDE，请先加入我们的讨论群并注明你的
					ID，我们将给予白名单。
				</p>
				<p class="typo" v-view.once="flowUp">
					SEATiDE 当前主要以 QQ
					群的形式存在，同时也有微信讨论群以便交流，没有运营团队。SEATiDE
					<strong>没有</strong>加入门槛，仅需<strong>
						Java 正版</strong
					>即可进入服务器。同时，建议使用<strong>内存 4GB+</strong>
					的电脑以防模组加载导致的游戏卡顿。
				</p>
				<div class="join-cards">
					<a
						v-view.once="scaleIn"
						class="join-card qq"
						href="https://qm.qq.com/cgi-bin/qm/qr?k=tcoJ_CF6AjAWGQS62TxGRIidea_4tqw7&jump_from=webapi"
						target="_blank"
					>
						<mdicon name="arrow-right" />
						<img src="@/assets/tencent-qq.svg" />
						<div class="text">
							<h1>QQ 讨论群</h1>
							<h2>
								点击加入，或搜索群号 820912578<br />验证信息请填写你的正版
								ID
							</h2>
						</div>
					</a>
					<div v-view.once="scaleIn" class="join-card wechant">
						<mdicon name="qrcode-scan" />
						<img src="@/assets/tencent-wechant.svg" />
						<div class="text">
							<h1>微信讨论群</h1>
							<h2>由于限制，加入 QQ 讨论群后扫码可加</h2>
						</div>
					</div>
				</div>
				<p class="typo" v-view.once="flowUp">
					加入以后，你可以在<strong>群公告</strong>中找到最新的服务器详细信息（包含<strong>版本</strong>、<strong>IP</strong>、<strong>客户端和模组包下载地址</strong>等）。同时，你也将会被<strong>正式认定</strong>为「SEATiDE」玩家。接下来，你只需要准备好游戏，然后加入服务器即可开始你的
					SEATiDE 之旅！
				</p>
				<p class="typo" v-view.once="flowUp">
					如果你对模组有些生疏，不知道如何开始，或者拥有其它问题，你可以在<strong>群聊里询问</strong>，或者也可以阅读<strong
						>我们编写的<a href="#">维基</a></strong
					>。维基相当于是本电子书，上面归纳了大家觉得有用的要点，这本书由所有人一起编写，为了让你更快地解决问题
					:)
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import MetaBar from "@/components/MetaBar.vue";
import MetaItem from "@/components/MetaItem.vue";
import { get, flowUp, scaleIn, flowUpQuick, isPCSize } from "@/fn";
import anime from "animejs";

export default Vue.extend({
	components: {
		Banner,
		MetaBar,
		MetaItem,
	},
	data() {
		return {
			server: {} as ServerInformation,
		};
	},
	mounted() {
		get("/api/server/v1/get/server").then((r) => {
			let data: ServerInformation | null = r.data.data as any;
			if (data !== null) {
				this.server = data;
			}
		});
	},
	methods: {
		getDepNames(mod: ServerMod[]) {
			let names: string[] = [];
			if (!!!mod) {
				return [];
			}
			mod.forEach((e) => {
				if (e.type === "dep") {
					names.push(e.name.toLowerCase());
				}
			});
			return names;
		},
		flowUp,
		scaleIn,
		flowUpQuick,
		animateFeatureBox(e: ViewObject) {
			anime({
				targets: ".features .feature",
				opacity: [0, 1],
				translateY: [50, 0],
				duration: 750,
				easing: "easeInOutExpo",
				delay: (el, i) => {
					return 150 * i;
				},
			});
		},
		getModCount(mod: ServerMod[]) {
			let count = mod.length;
			mod.forEach((e) => {
				if (e.type === "set" && e.count) {
					count += e.count - 1;
				}
			});
			return count;
		},
		isPCSize,
	},
});
</script>

<style lang="less" scoped>
.join {
	.join-cards {
		margin: 16px 0;
		display: flex;
		align-items: stretch;
		@media (max-width: 1000px) {
			flex-direction: column;
		}

		.join-card {
			@media (min-width: 1000px) {
				width: 50%;
			}
			@media (max-width: 1000px) {
				margin: 8px 0;
			}

			.link-card;
			&.qq {
				background: linear-gradient(-96deg, #1680c7, #12b7f5);
				color: white;
				h2 {
					color: @textlightwhite;
				}
			}

			&.wechant {
				h2 {
					color: @textlightgray;
				}
			}
		}
	}
}

.hero-box {
	p {
		color: @textlightgray;
		max-width: 600px;
		display: block;
		margin: auto;
	}
	margin-bottom: 64px;
	text-align: center;
}

.features {
	.feature-box {
		display: flex;
		@media (min-width: 1000px) {
			align-items: stretch;
		}
		@media (max-width: 1000px) {
			flex-direction: column;
		}
	}
}

.features {
	display: flex;
	flex-direction: column;

	.feature {
		@media (min-width: 1000px) {
			width: 33.333%;
			margin: 0 8px;
		}
		@media (max-width: 1000px) {
			margin: 8px 0;
		}
		text-shadow: @shadowlight;
		box-shadow: @shadowlight;

		&.black {
			background: #212121;
		}

		&.primary {
			background: @primaryg;
		}

		&.white {
			h1 {
				text-shadow: none;
			}
			p {
				color: @textlightgray;
				strong {
					color: @textgray;
				}
			}
			.mdi {
				svg {
					fill: @textgray;
				}
			}
			span {
				color: @textgray;
			}
		}

		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
		border-radius: 12px;
		color: white;
		padding: 32px;

		h1 {
			margin-top: 0;
			margin-bottom: 8px;
			font-size: 40px;
		}

		p {
			font-size: 18px;
			z-index: 2;
		}
		overflow: hidden;
		.mdi {
			opacity: 0.4;
			position: absolute;
			right: 64px;
			bottom: 64px;
			transition: all 0.2s ease;
			z-index: 1;
			width: 24px;
			height: 24px;
			transform: scale(10);
		}

		position: relative;

		&:hover {
			.mdi {
				opacity: 0.7;
			}
		}

		> span:not(.mdi) {
			font-family: Consolas, monospace;
			position: absolute;
			opacity: 0.3;
			right: 32px;
			top: 32px;
		}
		opacity: 0;
	}
}

.server-status {
	small {
		font-style: italic;
		color: @textlightgray;
	}

	.mods {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}

	.mod {
		opacity: 0;
		margin: 8px;
		position: relative;
		&::after {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
			position: absolute;
			content: " ";
			left: 0;
			top: 0;
			border-radius: inherit;
			z-index: -2;
		}
		h2,
		p {
			font-weight: normal;
		}
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 4px;
		color: white;
		@media (max-width: 800px) {
			padding: 8px 16px;
			p {
				margin: 0 !important;
				max-width: 100px !important;
			}
		}
		padding: 16px;
		cursor: pointer;
		transition: box-shadow 0.2s ease;

		@media (min-width: 1000px) {
			&:hover {
				box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
				transform: scale(1.1);
			}
		}

		h1 {
			font-size: 24px;
			@media (max-width: 1000px) {
				font-size: 18px;
			}
			margin: 0;
		}

		h2 {
			font-size: 14px;
			@media (max-width: 1000px) {
				font-size: 10.5px;
			}
			margin: 0;
			color: rgba(255, 255, 255, 0.5);
		}

		p {
			font-size: 14px;
			@media (max-width: 1000px) {
				font-size: 10.5px;
			}
			margin-top: 10px;
			margin-bottom: 0;
			max-width: 200px;
		}

		span {
			position: absolute;
			right: 16px;
			bottom: 16px;
			font-family: Consolas, monospace;
			opacity: 0.4;
			@media (max-width: 800px) {
				display: none;
			}
		}
	}
}
</style>