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
				<btn class="join-btn" type="primary shadow arrow" size="large" icon="arrow-right">立即加入</btn>
				<btn class="learnmore-btn" type="outlined hover" size="large">了解更多</btn>
			</template>
		</banner>
	</div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Btn from "@/components/Btn.vue";
import Vue from "vue";

export default Vue.extend({
	components: {
		Banner,
		Btn
	},
});
</script>

<style lang="less" scoped>
.learnmore-btn {
	margin-left: 32px;
}
</style>