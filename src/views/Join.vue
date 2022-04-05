<template>
	<div page>
		<banner :bg="require('@/assets/images/2.jpg')">
			<template #title> 加入 SEATiDE </template>
			<template #subtitle> 开始体验 </template>
			<template #text>
				SEATiDE 是 Java 正版高版本模组服务器，加入暂时没有门槛。<br />本页将引导你粗略了解
				SEATiDE 并提供加入方式。
			</template>
		</banner>
		<div class="container">
			<div class="features content">
				<div class="hero-box">
					<h1 class="primary-text" v-view.once="flowUp">三个概念</h1>
					<p v-view.once="flowUp">了解 SEATiDE 服务器的运行模式</p>
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
						<h1>自动化</h1>
						<p class="typo light">
							得益于阿里云的
							API，我们可以做到<strong>自动备份</strong>，甚至编写插件，通过让服务器在无人在线<strong
								>超过 1 小时</strong
							>后自动关闭来节省经费，投入到更应该使用的地方。<br />在一些看不见的地方，我们也使用了自动化，这是为了<strong>节省和简化开服体验</strong>。
						</p>
					</div>
				</div>
			</div>
			<div class="join content">
				<h1 class="primary-text" v-view.once="flowUp">加入群聊</h1>
				<p class="typo" v-view.once="flowUp">
					我们强烈推荐你加入我们的讨论群。入群时，请注明你的正版 ID。
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
						v-view.once="flowUp"
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
					<div v-view.once="flowUp" class="join-card wechant">
						<mdicon name="qrcode-scan" />
						<img src="@/assets/tencent-wechant.svg" />
						<div class="text">
							<h1>微信讨论群</h1>
							<h2>由于限制，加入 QQ 讨论群后扫码可加</h2>
						</div>
					</div>
				</div>
				<p class="typo" v-view.once="flowUp">
					加入以后，请先认真阅读<strong>置顶群公告</strong>中的内容，这将指导你进行下一步操作。
				</p>
				<p class="typo" v-view.once="flowUp">
					如果你对模组有些生疏、不知道如何开始，或者有其它问题，你可以选择在<strong>群聊里询问</strong>或者阅读<strong
						>我们编写的<a
							target="_blank"
							href="https://w.seatide.top"
							>维基</a
						></strong
					>，上面归纳了大家觉得有用的要点，这本书由所有人一起编写，为了让你更快地解决问题
					:)
				</p>
			</div>
			<div class="tidelab content">
				<h1 class="primary-text" v-view.once="flowUp">加入 TiDELab</h1>
				<p class="typo" v-view.once="flowUp">
					<strong>TiDELab</strong> 是 SEATiDE 自主开发并<a
						target="_blank"
						href="https://github.com/seatidemc/ui"
						>开源</a
					>的服务器管理平台，用于玩家与服务器的简单交互，将来还将围绕服务器的需求推出更多功能。SEATiDE
					玩家可以通过 TiDELab
					参与管理服务器。例如，当服务器长期无人在线而自动关闭时，如果你有
					TiDELab 账户，则可以登入后手动开启。
				</p>
				<p class="typo" v-view.once="flowUp">
					TiDELab
					目前的注册<strong>没有限制</strong>的。具体使用方法请参阅维基上的<a
						target="_blank"
						href="https://w.seatide.top/automation/tidelab-index.html"
						>这篇文章</a
					>。
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from "@/components/Banner.vue";

import { flowUp, scaleIn, flowUpQuick, isPCSize } from "@/fn";
import anime from "animejs";

export default Vue.extend({
	components: {
		Banner,
	},
	methods: {
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
		text-shadow: @shadowlightx;
		box-shadow: @shadowlightx;

		&.black {
			background: #212121;
		}

		&.primary {
			background: @primaryg;
			p {
				color: @textlightgray;
			}
		}

		&.white {
			h1 {
				text-shadow: none;
				background: @primaryg;
				background-clip: text;
				color: transparent;
				display: inline-block;
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
			.monospace;
			position: absolute;
			opacity: 0.3;
			right: 32px;
			top: 32px;
		}
		opacity: 0;
	}
}
</style>