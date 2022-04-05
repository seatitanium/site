<template>
	<div page>
		<banner :bg="require('@/assets/images/5.jpg')" fullscreen>
			<template #title>
				高效运行的<span class="stroke stroke-2">玩家主导</span>服务器
			</template>
			<template #subtitle> 不一样的体验 </template>
			<template #text>
				在 SEATiDE，你能体验到具有「民主、科技与自动化」特色的游戏。
				<br />
				——在独特的自由氛围下探索模组玩法和游戏实践。
				<br />
				<div class="simple-info">
					<div class="item">
						<mdicon name="numeric-4-box-outline" />
						<span><span class="no-mobile">当前周目</span> ST4</span>
					</div>
					<div class="item">
						<mdicon name="minecraft" />
						<span
							><span class="no-mobile">游戏版本</span>
							1.16.5</span
						>
					</div>
					<div class="item">
						<mdicon name="check" />
						<span>正版验证<span class="no-mobile">开启</span></span>
					</div>
				</div>
			</template>
			<template #buttons>
				<btn
					class="join-btn"
					type="primary shadow arrow"
					size="large"
					icon="arrow-right"
					to="/join"
					>立即加入</btn
				>
				<btn
					@click.native="$open('https://w.seatide.top')"
					class="learnmore-btn"
					type="outlined hover"
					size="large"
					>阅读文档</btn
				>
			</template>
		</banner>
		<div class="sections">
			<section class="container">
				<center>
					<h1 id="features-title">SEATiDE 有哪些特点？</h1>
				</center>
				<section class="features">
					<div class="feature-item" v-view.once="animateFeature">
						<mdicon class="feature-icon" name="bug-check-outline" />
						<div class="a text">
							<h1>稳定可靠</h1>
							<p
								v-text="
									'SEATiDE 全局使用阿里云的产品。游戏存档和所有数据每 10 分钟全量备份一次，且同时存留五个版本。每次停服也会自动备份。存档保存在安全的阿里云 OSS 中。'
								"
							/>
						</div>
					</div>
					<div class="feature-item">
						<mdicon
							class="feature-icon"
							name="wallet-plus-outline"
						/>
						<div class="b text">
							<h1>忠于节省</h1>
							<p
								v-text="
									'我们实行如连续 1 小时 0 人在线则停服的机制。若有玩家想继续游戏，可自行开启服务器。我们认为不应让高昂的服务器费用阻碍美好的 Minecraft 体验。'
								"
							/>
						</div>
					</div>
					<div class="feature-item">
						<mdicon
							class="feature-icon"
							name="message-text-outline"
						/>
						<div class="c text">
							<h1>倡导提议</h1>
							<p
								v-text="
									'玩家需求的满足是服务器运营的最大意义。在这里，你可以自由地发表对服务器策划和设计的合理建议，在与大家一同讨论的同时，共同建设更好的 SEATiDE。'
								"
							/>
						</div>
					</div>
				</section>
			</section>
			<section
				v-lazy:background-image="require('@/assets/images/3.jpg')"
				class="feature-section"
			>
				<div class="container">
					<section class="single-features">
						<div class="single-feature">
							<svg-minzhu f />
							<div class="typo">
								<h2>
									<mdicon name="human-handsup" />
									民主决定游戏内容
								</h2>
								<h1>多一种想法，多一个选择</h1>
								<p
									v-html="
										'每一位加入服务器并成为正式成员的玩家都有权利提出自己对游戏内容的想法，无论内容。<br/>你的想法将成为游戏内容的一个选择，若得到大部分的认可，则可直接付诸实践。'
									"
									v-view.once="animateSFTypo"
								/>
								<btn
									@click.native="
										$open(
											'https://w.seatide.top/about/operation.html#%E7%8E%A9%E5%AE%B6%E4%B8%BB%E5%AF%BC-%E6%B0%91%E4%B8%BB%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96'
										)
									"
									type="primarylight arrow hover"
									size="large"
									icon="arrow-right"
									>了解「民主」</btn
								>
							</div>
						</div>
						<div class="single-feature">
							<div class="typo">
								<h2>
									<mdicon name="console" /> 利用技术解决问题
								</h2>
								<h1>自己动手，丰衣足食</h1>
								<p
									v-html="
										'无论是我们需要的功能，还是新的游戏玩法；无论是游戏内还是游戏外，我们都可以亲自来创造。<br/>SEATiDE 提倡用各种各样的技术方法来完善我们共同的游戏体验，为服务器添砖加瓦。'
									"
									v-view.once="animateSFTypo"
								/>
								<btn
									@click.native="
										$open(
											'https://w.seatide.top/about/operation.html#%E4%BD%8E%E6%88%90%E6%9C%AC-%E9%98%BF%E9%87%8C%E4%BA%91%E6%8A%A2%E5%8D%A0%E5%BC%8F-ecs-%E7%AE%80%E4%BB%8B'
										)
									"
									type="primary arrow hover"
									size="large"
									icon="arrow-right"
									>了解「技术」</btn
								>
							</div>
							<svg-jishu f />
						</div>
						<div class="single-feature">
							<svg-zidonghua f />
							<div class="typo">
								<h2>
									<mdicon name="cash-check" />
									让游戏容易且省钱
								</h2>
								<h1>随时想玩，随时开。<br />不玩不浪费。</h1>
								<p
									v-html="
										'SEATiDE 使用阿里云抢占式 ECS，并利用内网优势与阿里云 OSS 直接相连。<br/>在保障数据安全的同时降低不必要的资金消耗，同时也为玩家提供便利的「开服渠道」以便在需要的时候恢复游戏。'
									"
									v-view.once="animateSFTypo"
								/>
								<btn type="outlined" size="large"
									>你可以在加入后了解相关内容</btn
								>
							</div>
						</div>
					</section>
				</div>
			</section>
			<section v-lazy:background-image="require('@/assets/images/1.jpg')" class="server-status-section">
				<div class="container">
					<server-status v-view.once="flowUp" />
				</div>
			</section>
			<section
				v-lazy:background-image="require('@/assets/images/4.jpg')"
				class="more-information-section darken-background darken-2"
			>
				<div class="container">
					<section class="more-information">
						<logo v-view.once="flowUp" class="hero center light" />
						<p v-view.once="flowUp" class="typo">
							<strong>在 SEATiDE，你可以体验到与众不同的制度模式。</strong>
							在这里，几乎一切与游戏内容相关的事情都可以经过民主表决。无论加入时间长短、能力高下，每个人的声音都一样重要。
						</p>
						<p v-view.once="flowUp" class="typo">
							<strong>在 SEATiDE，没有虚无缥缈的华丽外饰或者权限结构。</strong>
							SEATiDE 不会向服务器中添加称号、装扮等旨在区分玩家等级高下的非游戏性内容，也不会以推出只方便少数人的特权。
						</p>
						<p v-view.once="flowUp" class="typo">
							<strong>在 SEATiDE，没有妨碍你灵感发挥的屏障。</strong>
							只要是你创作的建筑，都默认受到服规的保护，无论是否圈地。只要遇到熊孩子，我们都会彻查和处理，尽最大可能减少损失。
						</p>
						<p v-view.once="flowUp" class="typo">
							<strong>在 SEATiDE，你可以尽情发挥想象，享你所想。</strong>
							从建筑到生存，从冒险到休闲，这里的一切都极富有变化，为你带来无限的可能。不同周目拥有不同的主题，而这一切都由你来参与决定。
						</p>
						<p v-view.once="flowUp" class="typo">
							<strong>SEATiDE 仍在发展初期，诚邀你加入参与到这一切的瑰丽。</strong>
						</p>
						<btn
							@click.native="$router.push('/join')"
							v-view.once="flowUp"
							class="hoverscale hover join-btn"
							type="primary arrow"
							icon="arrow-right"
							size="large"
							>加入我们</btn
						>
					</section>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Btn from "@/components/Btn.vue";
import MetaBar from "@/components/MetaBar.vue";
import MetaItem from "@/components/MetaItem.vue";
import Status from "@/components/Status.vue";
import SvgSheng from "@/components/typo/svg-sheng.vue";
import SvgWen from "@/components/typo/svg-wen.vue";
import SvgYi from "@/components/typo/svg-yi.vue";
import SvgMinzhu from "@/components/typo/svg-minzhu.vue";
import SvgJishu from "@/components/typo/svg-jishu.vue";
import Vue from "vue";
import anime from "animejs";
import SvgZidonghua from "@/components/typo/svg-zidonghua.vue";
import Logo from "@/components/Logo.vue";
import { flowUp, isPCSize, isMobile, isPhoneSize, get, scaleIn } from "@/fn";
import ServerStatus from "@/components/ServerStatus.vue";

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
		Logo,
		MetaBar,
		MetaItem,
		Status,
		ServerStatus,
	},
	data() {
		return {
			server: {} as ServerInformation,
			loadingStatus: "loading",
			serverExists: false,
		};
	},
	methods: {
		scaleIn,
		animateFeature() {
			anime({
				targets: "#features-title",
				opacity: [0, 1],
				translateY: [30, 0],
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
		flowUp,
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
				delay: 200,
			});
		},
		isPCSize,
		isMobile,
		isIOS() {
			let nav = window.navigator;
			if (/iPad|iPhone|iPod/.test(nav.platform)) {
				return true;
			} else {
				return (
					nav.maxTouchPoints &&
					nav.maxTouchPoints > 2 &&
					/MacIntel/.test(nav.platform)
				);
			}
		},
		isPhoneSize,
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
		getModCount(mod: ServerMod[]) {
			let count = mod.length;
			mod.forEach((e) => {
				if (e.type === "set" && e.count) {
					count += e.count - 1;
				}
			});
			return count;
		},
	},
	mounted() {
		get("/api/server/v1/get/server")
			.then((r) => {
				let data: ServerInformation | null = r.data.data as any;
				this.serverExists = data?.created ? true : false;
				if (data !== null) {
					this.server = data;
					this.loadingStatus = "";
				} else {
					this.loadingStatus = "error";
				}
			})
			.catch((e) => {
				console.warn(e);
				this.loadingStatus = "error";
			});
	},
});
</script>

<style lang="less" scoped>
.learnmore-btn {
	margin-left: 32px;
}

.sections {
	display: flex;
	flex-direction: column;
}

.more-information {
	padding: 96px 0;
	text-shadow: @shadowlight;
	
	.hero {
		margin-bottom: 64px;
	}

	p,
	button,
	.hero,
	h1 {
		opacity: 0;
	}

	h1,
	p {
		display: block;
		margin: auto;
	}

	h1 {
		font-size: 56px;
		text-align: center;
		margin-bottom: 32px;
		color: white;
		@media screen and (max-width: 1000px) {
			font-size: 42px;
		}
	}

	p {
		@media screen and (max-width: 1000px) {
			font-size: 18px;
		}
		font-size: 24px;
		line-height: 1.8;
		color: @textmidwhite;
		max-width: 700px;
		margin: 16px auto;
		&::before {
			content: "";
			margin-left: 2em;
		}

		strong {
			color: white;
		}
	}

	.join-btn {
		display: block;
		margin: 32px auto;
	}
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
		margin: 0 16px;
		opacity: 0;
		position: relative;

		.feature-icon {
			color: @primary;
			svg {
				width: 100px;
				height: 100px;
				@media (max-width: 1200px) {
					width: 150px;
					height: 150px;
				}
			}
		}

		@media (max-width: 1200px) {
			.feature-icon {
				position: absolute;
				z-index: -100;
				opacity: 0.4;
				left: 50%;
				bottom: 50%;
				transform: translate3d(-50%, 50%, 0);
			}
		}

		@media (max-width: 1000px) {
			justify-content: center;
			margin: 16px 0 !important;
		}
		.text {
			height: 100%;
			margin-left: 16px;
			@media (max-width: 1200px) {
				text-align: center;
			}
			h1 {
				margin-top: 0;
				margin-bottom: 16px;
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
	padding: 32px 0;

	#features-title {
		opacity: 0;
		text-align: center;
		font-size: 48px;
		margin-bottom: 32px;
		margin-top: 0;
		&::after {
			content: "";
			display: block;
			background: @primary;
			height: 20px;
			position: absolute;
			width: 45%;
			left: 50%;
			transform: translateX(-50%);
			bottom: 4px;
			z-index: -2;
		}
	}
}

.feature-section,
.more-information-section {
	background-position: center;
	background-size: cover;
}

.more-information-section {
	background-blend-mode: darken;
}

.feature-section {
	.single-features {
		display: flex;
		flex-direction: column;
		align-items: center;

		.single-feature {
			width: 90%;
			opacity: 0;
			@media screen and (min-width: 1000px) {
				margin: 72px 0;
				padding: 32px;
			}
			&:not(.light) {
				background: rgba(0, 0, 0, 0.4);
			}
			&.light {
				background: rgba(255, 255, 255, 0.3);
				.typo p {
					color: @textlightwhite;
				}
			}
			display: flex;
			@media (max-width: 1000px) {
				flex-direction: column;
				padding: 56px 16px;
				margin: 32px 0;
				width: 100%;
			}
			@media (max-width: 1200px) {
				> svg:first-child,
				> svg:last-child {
					display: none;
				}
			}
			align-items: center;

			svg {
				transform: scale(0.7);
			}

			.typo {
				@media screen and (min-width: 1000px) {
					width: 75%;
				}

				@media screen and (max-width: 1000px) {
					text-align: center;
					button {
						margin: auto;
					}
				}
				color: white;
				text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);

				@media screen and (min-width: 1310px) {
					h1,
					h2 {
						white-space: nowrap;
					}
				}

				h2 {
					font-weight: normal;
					margin-top: 0;
					margin-bottom: 8px;
					font-size: 32px;
					@media screen and (max-width: 1000px) {
						font-size: 22.4px;
						svg {
							transform: scale(1.4) !important;
						}
					}
					svg {
						transform: scale(1.2);
						margin-right: 0.5em;
					}
				}

				h1 {
					font-size: 48px;
					@media screen and (max-width: 1000px) {
						font-size: 30px;
					}
					margin: 0;
				}

				p {
					font-size: 18px;
					color: @textmidwhite;
					@media screen and (max-width: 1000px) {
						font-size: 14px;
					}
				}
			}
		}
	}
}

@keyframes opacity {
	0% {
		opacity: 0;
	}

	50% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
	}
}

.stroke {
	position: relative;

	&::after {
		@media screen and (max-width: 800px) {
			content: none;
		}
		content: "";
		height: 100%;
		width: 100%;
		left: 0;
		bottom: -100%;
		position: absolute;
		filter: drop-shadow(0px 2px 4px #00000050);
	}

	&.stroke-1::after {
		background: url(../assets/stroke.svg);
		background-repeat: no-repeat;
	}

	&.stroke-2::after {
		background: url(../assets/stroke2.svg);
		background-repeat: no-repeat;
	}

	&.stroke-3::after {
		background: url(../assets/stroke3.svg);
		background-repeat: no-repeat;
	}
}

.simple-info {
	font-size: 18px;
	@media screen and (max-width: 800px) {
		font-size: 12px;
		margin-top: 8px;
		padding: 4px 8px;
	}
	background: rgba(0, 0, 0, 0.3);
	padding: 8px 16px;
	margin-top: 32px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	.mdi {
		margin-right: 0.5em;
		display: flex;
		align-items: center;
		justify-content: center;
		@media (max-width: 800px) {
			width: 16px;
		}
	}
	.item {
		display: inline-flex;
		align-items: center;
		&::after {
			content: "·";
			margin: 0 12px;
			@media screen and (max-width: 800px) {
				margin: 0 8px;
			}
		}
		&:last-child::after {
			content: none;
		}
	}
}

.server-status {
	small {
		color: @textlightgray;
		padding: 0 8px;
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
			top: 16px;
			.monospace;
			opacity: 0.4;
			@media (max-width: 800px) {
				display: none;
			}
		}
	}
}

.see-full-in-pc {
	display: flex;
	align-items: center;
	.mdi {
		width: 20px;
		display: inline-flex;
		align-items: center;
	}
}

.server-status-section {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>