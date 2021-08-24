<template>
	<div page>
		<banner
			bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/rMzSIUVHQ3hL9Nu.jpg"
			fullscreen
		>
			<template #title> 高效运行的玩家主导服务器 </template>
			<template #subtitle> 不一样的服务器体验 </template>
			<template #text>
				在 SEATiDE，我们力求“民主、科技与自动化”的游戏体验。
				<br />
				我们的目标是以最低廉的方式实现较为高效的 Minecraft 服务器实例。
			</template>
			<template #buttons>
				<btn
					class="join-btn"
					type="primary shadow arrow"
					size="large"
					icon="arrow-right"
					>立即加入</btn
				>
				<btn class="learnmore-btn" type="outlined hover" size="large"
					>了解更多</btn
				>
			</template>
		</banner>
		<div class="container">
			<h1 id="features-title">SEATiDE 有哪些特点？</h1>
			<section class="features">
				<div class="feature-item" v-view.once="animateFeature">
					<svg-wen width="150px" />
					<div class="a text">
						<h1>稳定可靠</h1>
						<p
							v-text="
								'SEATiDE 全局使用阿里云的产品。存档每 10 分钟备份一次，同时存留五个版本，每次停服也会自动备份。存档稳定保存在阿里云 OSS 中，周目结束后可限时开放下载。'
							"
						/>
					</div>
				</div>
				<div class="feature-item">
					<svg-sheng width="150px" />
					<div class="b text">
						<h1>忠于节省</h1>
						<p
							v-text="
								'考虑到淡季效应，我们实行连续 12 小时 0 人在线则自动备份并停服的机制。若有玩家想继续游戏，可自行开启。我们认为不应让高昂的服务器费用阻碍美好的 Minecraft 体验。'
							"
						/>
					</div>
				</div>
				<div class="feature-item">
					<svg-yi width="150px" />
					<div class="c text">
						<h1>倡导提议</h1>
						<p
							v-text="
								'我们相信，对玩家需求的满足是服务器运营的最大动力。你可以在这里自由地发表你对服务器策划的合理建议。在与大家一同讨论的同时，共同建设更好的 SEATiDE 服务器！'
							"
						/>
					</div>
				</div>
			</section>
		</div>
		<div
			style="
				background-image: url('https://fnmdp.oss-cn-beijing.aliyuncs.com/images/AvOpWF5Rm861jNf.jpg');
			"
			class="feature-section"
		>
			<div class="container">
				<section class="single-features">
					<div class="single-feature">
						<svg-minzhu />
						<div class="typo">
							<h2>
								<mdicon name="human-handsup" /> 民主决定游戏内容
							</h2>
							<h1>多一种想法，多一个选择</h1>
							<p
								v-html="
									'每一位加入服务器并成为正式成员的玩家都有权利提出自己对游戏内容的想法，无论内容。你的想法将成为游戏内容的一个选择，若得到大部分的认可，则可直接付诸实践。'
								"
								v-view.once="animateSFTypo"
							/>
							<btn type="primary arrow" size="large" icon="arrow-right">了解「民主」</btn>
						</div>
					</div>
					<div class="single-feature light">
						<div class="typo">
							<h2><mdicon name="console" /> 利用技术解决问题</h2>
							<h1>自己动手，丰衣足食</h1>
							<p
								v-html="
									'我们相信编程可以为我们创造一切，它是我们实现“我们想要的东西”的基础。SEATiDE 提倡用各种各样的技术方法来完善我们共同的游戏体验，为服务器添砖加瓦。'
								"
								v-view.once="animateSFTypo"
							/>
							<btn type="primarylight arrow" size="large" icon="arrow-right">了解「技术」</btn>
						</div>
						<svg-jishu />
					</div>
					<div class="single-feature">
						<svg-zidonghua />
						<div class="typo">
							<h2>
								<mdicon name="cash-check" />
								让游戏变得容易且省钱
							</h2>
							<h1>随时想玩，随时开<br />不玩不浪费。</h1>
							<p
								v-html="
									'SEATiDE 使用阿里云抢占式 ECS，并利用内网优势与阿里云 OSS 直接相连。在保障数据安全的同时降低不必要的资金消耗，同时也为玩家提供便利的「开服渠道」以便在需要的时候恢复游戏。'
								"
								v-view.once="animateSFTypo"
							/>
							<btn type="outlined" size="large">你可以在加入后了解相关内容</btn>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Btn from "@/components/Btn.vue";
import SvgSheng from "@/components/typo/svg-sheng.vue";
import SvgWen from "@/components/typo/svg-wen.vue";
import SvgYi from "@/components/typo/svg-yi.vue";
import SvgMinzhu from "@/components/typo/svg-minzhu.vue";
import SvgJishu from "@/components/typo/svg-jishu.vue";
import Vue from "vue";
import anime from "animejs";
import SvgZidonghua from "@/components/typo/svg-zidonghua.vue";

export default Vue.extend({
	components: {
		Banner,
		Btn,
		SvgWen,
		SvgSheng,
		SvgYi,
		SvgMinzhu,
		SvgJishu,
		SvgZidonghua,
	},
	methods: {
		animateFeature() {
			anime({
				targets: "#features-title",
				opacity: [0, 1],
				translateX: [-30, 0],
				easing: "easeInOutExpo",
			});
			anime({
				targets: ".feature-item",
				opacity: [0, 1],
				easing: "easeInOutExpo",
				delay: (e, i) => {
					return i * 50;
				},
			});
		},
		animateSFTypo(a: ViewObject) {
			let parent = a.target.element.parentElement?.parentElement;
			//@ts-ignore
			let typo = parent.querySelector(".typo") as HTMLDivElement;
			anime({
				targets: parent,
				opacity: [0, 1],
				translateX: [30, 0],
				easing: "easeInOutExpo",
			});
			anime({
				targets: typo,
				opacity: [0, 1],
				translateY: [30, 0],
				easing: "easeInOutExpo",
				delay: 200
			});
		},
	},
});
</script>

<style lang="less" scoped>
.learnmore-btn {
	margin-left: 32px;
}

.features {
	display: flex;
	align-items: stretch;
	flex-wrap: nowrap;
	flex-direction: row;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		.feature-item {
			margin: 0 !important;
			width: 100% !important;
		}
	}
	padding: 32px 0;

	.feature-item {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 33.333%;
		margin: 0 8px;
		opacity: 0;

		.text {
			height: 100%;
			margin-left: 16px;
			width: 60%;

			h1 {
				margin-top: 0;
				font-size: 28px;
			}

			p {
				color: @textmidgray;
			}
		}
	}
}

.container {
	> h1 {
		color: @textgray;
	}

	#features-title {
		opacity: 0;
	}
}

.feature-section {
	background-position: center;
	background-size: cover;

	.single-features {
		display: flex;
		flex-direction: column;
		align-items: center;

		.single-feature {
			opacity: 0;
			margin: 72px 0;
			padding: 32px 16px;
			&:not(.light) {
				background: rgba(0, 0, 0, 0.4);
			}
			&.light {
				background: rgba(255, 255, 255, 0.3);
			}
			width: 100%;
			display: flex;
			align-items: center;

			svg {
				transform: scale(0.7);
			}

			.typo {
				margin-left: 32px;
				color: white;
				width: 40%;
				text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);

				h2 {
					font-weight: normal;
					margin-top: 0;
					margin-bottom: 8px;
					font-size: 32px;
					svg {
						transform: scale(1.2);
						margin-right: 0.5em;
					}
				}

				h1 {
					font-size: 48px;
					margin: 0;
				}

				p {
					font-size: 18px;
					font-style: italic;
					color: @textmidwhite;
				}
			}
		}
	}
}
</style>