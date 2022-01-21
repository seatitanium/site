<template>
	<div class="navbar-box">
		<nav class="navbar" :class="active ? 'active' : 'inactive'">
			<div
				class="hamburger"
				:class="hamburgerOpen ? 'open' : ''"
				@click="
					hamburgerOpen = !hamburgerOpen;
					toggleDropdown();
				"
			>
				<span class="hamburger__top-bun"></span>
				<span class="hamburger__bottom-bun"></span>
			</div>
			<logo
				@click.native="$router.push('/')"
				class="nav"
				:class="active ? '' : 'light'"
			/>
			<div class="nav-link">
				<div
					@click="x.route ? $router.push({ name: x.route }) : $open(x.href)"
					class="link"
					:class="$route.name === x.route ? 'active' : ''"
					v-for="(x, i) in links"
					:key="i"
				>
					{{ x.name }}
				</div>
			</div>
			<div ref="dropdown" class="dropdown" style="display: none">
				<span
					@click="
						$router.push({ name: x.route });
						hamburgerOpen = false;
						toggleDropdown();
					"
					class="dropdown-item"
					v-for="(x, i) in links"
					:key="i"
				>
					{{ x.name }}
				</span>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "@/components/Logo.vue";
import anime from "animejs";

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
				{
					name: "捐助",
					route: "donate",
				},
				{
					name: "知识库",
					href: "https://w.seatide.top"
				},
				{
					name: "规则",
					href: "https://w.seatide.top/server/rules.html"
				}
			],
			active: false,
			hamburgerOpen: false,
			titles: {
				home: "高效运行的 Mod 服",
				join: "立即加入",
				server: "服务器状态",
				about: "关于",
				donate: "捐助",
			},
		};
	},
	components: {
		Logo,
	},
	mounted() {
		document.addEventListener("scroll", (e) => {
			if (document.scrollingElement?.scrollTop) {
				if (!this.hamburgerOpen) {
					this.activateNav();
				}
			}
		});
		this.updateTitle(this.$route.name as string);
	},
	watch: {
		hamburgerOpen(v) {
			if (v) {
				this.active = true;
			} else {
				this.activateNav();
			}
		},
		$route(v) {
			this.activateNav();
			this.updateTitle(v.name);
		},
	},
	methods: {
		updateTitle(name: string) {
			if (Object.keys(this.titles).includes(name)) {
				// @ts-ignore
				document.title = "SEATiDE | " + this.titles[name];
			}
		},
		toggleDropdown(directOption?: boolean) {
			let obj: HTMLDivElement = this.$refs.dropdown as HTMLDivElement;
			let p =
				directOption !== undefined
					? directOption
					: obj.style.display === "none" || this.hamburgerOpen;
			let n =
				directOption !== undefined
					? !directOption
					: obj.style.display === "" || !this.hamburgerOpen;
			if (p) {
				obj.style.display = "";
			}
			anime({
				targets: ".dropdown",
				translateY: p ? [-50, 0] : [0, -50],
				opacity: p ? [0, 1] : [1, 0],
				easing: "easeOutExpo",
				duration: 500,
			});
			if (n) {
				obj.style.pointerEvents = "none";
			}
			if (p) {
				obj.style.pointerEvents = "auto";
			}
		},
		activateNav() {
			if ((document.scrollingElement as Element).scrollTop > 100) {
				this.active = true;
			} else {
				this.active = false;
			}
		},
	},
});
</script>

<style lang="less" scoped>
.navbar {
	.logo.nav {
		cursor: pointer;
		@media (max-width: 800px) {
			margin-left: 42px;
		}
	}

	&.inactive {
		.hamburger__bottom-bun,
		.hamburger__top-bun {
			background: #fff;
		}
		.link {
			&:not(.active):hover {
				color: white !important;
			}
			&.active {
				color: white !important;
			}
			color: @textmidwhite;
		}
		background: rgba(0, 0, 0, .2);
		backdrop-filter: blur(5px);
	}

	.link.active {
		font-weight: bold;
	}

	&.active {
		.hamburger__bottom-bun,
		.hamburger__top-bun {
			background: @textmidgray;
		}
		background: white;
	}
}

.nav-link {
	margin-left: 32px;
	display: flex;
	align-items: center;
	@media screen and (max-width: 800px) {
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
	height: 40px;
}

/* Hamburger from https://apple.com */

.hamburger {
	cursor: pointer;
	position: absolute;
	left: 8px;
	width: 48px;
	height: 48px;
	transition: all 0.25s;
	z-index: 10000;

	@media screen and (min-width: 800px) {
		display: none;
	}
}

.hamburger__top-bun,
.hamburger__bottom-bun {
	content: "";
	display: block;
	position: absolute;
	left: 15px;
	width: 18px;
	height: 2.2px;
	transform: rotate(0);
	transition: all 0.25s;
}

.hamburger__top-bun {
	top: 23px;
	transform: translateY(-3px);
}

.hamburger__bottom-bun {
	bottom: 23px;
	transform: translateY(3px);
}

.open {
	transform: rotate(90deg);
	.hamburger__top-bun {
		transform: rotate(45deg) translateY(0px);
	}
	.hamburger__bottom-bun {
		transform: rotate(-45deg) translateY(0px);
	}
}

.dropdown {
	z-index: 200;
	width: 100%;
	position: absolute;
	top: 62px;
	left: 0;
	background: white;

	.dropdown-item {
		width: 100%;
		display: block;
		color: @textmidgray;
		padding: 16px;
		font-size: 1.1rem;
		transition: all 0.2s ease;
		cursor: pointer;
		text-decoration: none;
	}
}
</style>