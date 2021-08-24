<template>
	<nav class="navbar">
		<logo class="small"/>
		<div class="nav-link">
			<div
				@click="$router.push({ name: x.route })"
				class="link"
				:class="$route.name === x.route ? 'active' : ''"
				v-for="(x, i) in links"
				:key="i"
			>
				{{ x.name }}
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "@/components/Logo.vue"

export default Vue.extend({
	data() {
		return {
			links: [
				{
					name: "首页",
					route: "home",
				},
				{
					name: "加入",
					route: "join",
				},
				{
					name: "关于",
					route: "about",
				},
				{
					name: "日志",
					route: "changelog",
				},
			],
		};
	},
	components: {
		Logo
	}
});
</script>

<style lang="less" scoped>
.nav-link {
	margin-left: 32px;
	display: flex;
	align-items: center;

	.link {
		margin: 0 16px;
		cursor: pointer;
		transition: all 0.2s ease;
		position: relative;

		&:not(.active):hover {
			color: @textgray;
		}

		&.active {
			color: @textgray;
			transform: scale(1.2);
			&::after {
				opacity: 1;
				width: 120%;
			}
		}

		&::after {
			background: @primary;
			width: 0;
			content: ' ';
			display: block;
			position: absolute;
			bottom: .5px;
			z-index: -1;
			height: 5px;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0;
		}
	}

	color: @textlightgray;
}

.navbar {
	z-index: 1000;
	display: flex;
	align-items: center;
	background: white;
	box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.21);
	padding: 12px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
}
</style>