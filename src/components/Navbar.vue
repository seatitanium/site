<template>
	<nav class="navbar" :class="active ? 'active' : 'inactive'">
		<logo
			@click.native="$router.push('/')"
			class="nav"
			:class="active ? '' : 'light'"
		/>
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
import Logo from "@/components/Logo.vue";

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
					name: "状态",
					route: "server",
				},
				{
					name: "关于",
					route: "about",
				},
			],
			active: false,
		};
	},
	components: {
		Logo,
	},
	mounted() {
		document.addEventListener("scroll", (e) => {
			if (document.scrollingElement?.scrollTop) {
				if (document.scrollingElement.scrollTop > 100) {
					this.active = true;
				} else {
					this.active = false;
				}
			}
		});
	},
});
</script>

<style lang="less" scoped>
.navbar {
	.small {
		cursor: pointer;
	}

	&.inactive {
		.link {
			&:not(.active):hover {
				color: @textlightwhite !important;
			}
			&.active {
				color: white !important;
			}
			color: @textmidwhite;
		}
		background: transparent;
		backdrop-filter: blur(5px);
	}

	&.active {
		background: white;
	}
}

.nav-link {
	margin-left: 32px;
	display: flex;
	align-items: center;
	@media screen and (max-width: 700px) {
		display: none;
	}

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
			content: " ";
			display: block;
			position: absolute;
			bottom: 0.5px;
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
	transition: all 0.2s ease;
	z-index: 1000;
	display: flex;
	align-items: center;
	box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.21);
	padding: 12px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	@media (max-width: 800px) {
		
	}
}
</style>