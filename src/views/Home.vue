<template>
	<div page>
		<banner
			bg="https://fnmdp.oss-cn-beijing.aliyuncs.com/images/rMzSIUVHQ3hL9Nu.jpg"
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
			<section class="features">
				<div class="feature-item">
					<svg-wen width="150px" />
					<div class="text">
						<h1>稳定可靠</h1>
						<p v-text="'SEATiDE 全局使用阿里云的产品。存档每 10 分钟备份一次，同时存留五个版本，每次停服备份。存档稳定保存在阿里云 OSS 中，周目结束后可限时开放下载。'"/>
					</div>
				</div>
				<div class="feature-item">
					<svg-sheng width="150px" />
					<div class="text">
						<h1>忠于节省</h1>
						<p v-text="'考虑到淡季效应，我们实行 6 小时内 0 人在线则自动备份并停服的机制。若有玩家想继续游戏，可自行开启。我们认为不应让高昂的服务器费用阻碍美好的 Minecraft 体验。'"/>
					</div>
				</div>
				<div class="feature-item">
					<svg-yi width="150px" />
					<div class="text">
						<h1>倡导提议</h1>
						<p v-text="'我们相信，对玩家需求的满足是服务器运营的最大动力。你可以在这里自由地发表你对服务器策划的合理建议。在与大家一同讨论的同时，共同建设更好的 SEATiDE 服务器！'"/>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Btn from "@/components/Btn.vue";
import SvgSheng from "@/components/typo/svg-sheng.vue";
import SvgWen from "@/components/typo/svg-wen.vue";
import SvgYi from "@/components/typo/svg-yi.vue";
import Vue from "vue";

export default Vue.extend({
	components: {
		Banner,
		Btn,
		SvgWen,
		SvgSheng,
		SvgYi,
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
	padding: 32px 0;

	.feature-item {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 33.333%;
		margin: 0 8px;

		.text {
			height: 100%;
			margin-left: 16px;

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
</style>