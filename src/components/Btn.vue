<template>
	<button @click="go()" class="btn" :class="type + ' ' + size + ' ' + (isPCSize() && !isIOS() ? 'pc' : 'mobile')">
		<div class="content">
			<slot />
			<mdicon v-if="icon" :name="icon" class="icon" />
		</div>
	</button>
</template>

<script lang="ts">
import Vue from 'vue';
import { isPCSize, isIOS } from '@/fn';
export default Vue.extend({
	props: ['type', 'size', 'icon', 'to', 'href'],
	methods: {
		go() {
			if (this.to) this.$router.push(this.to);
			if (this.href) window.open(this.href);
		},
		isPCSize,
		isIOS() {
			let nav = window.navigator;
			if (/iPad|iPhone|iPod/.test(nav.platform)) {
				return true;
			} else {
				return nav.maxTouchPoints && nav.maxTouchPoints > 2 && /MacIntel/.test(nav.platform);
			}
		}
	}
});
</script>

<style lang="less" scoped>
.btn {
	display: block;
	border-radius: 5px;
	padding: 8px 12px;
	border: none;
	transition: all 0.2s ease;
	cursor: pointer;
	font-family: inherit;

	&.large {
		@media screen and (max-width: 1000px) {
			font-size: 1rem;
		}
		@media screen and (min-width: 1000px) {
			padding: 10px 20px;
		}
		font-size: 1.2rem;
	}

	&.small {
		padding: 2px 8px;
		font-size: 12px;
	}

	&.shadow {
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
	}

	&.hover {
		&:hover {
			box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
		}
	}

	&.hover-light {
		&:hover {
			box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
		}
	}

	&.primary-outlined {
		border: 1px solid @primary;
		background: linear-gradient(94deg, @primary-gradient-first 29.88%, @primary-gradient-second 67.68%);
		background-clip: text;
		color: transparent;

		svg {
			color: @primary;
		}
	}

	&.primarylight.pc {
		background: linear-gradient(94deg, @primary-gradient-first 29.88%, @primary-gradient-second 67.68%);
		background-clip: text;
		color: transparent;
	}

	&.primarylight.mobile {
		color: @primarydark;
	}

	&.mobile {
		color: @primarydark;
	}

	&.primarylight {
		position: relative;
		svg {
			color: @primarydark;
		}
		&:hover {
			&::after {
				background: #eee;
			}
		}

		&::after {
			transition: all 0.5s ease;
			content: ' ';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: inherit;
			width: 100%;
			height: 100%;
			background: white;
			z-index: -20;
		}
	}

	&.primary-a {
		background-image: linear-gradient(65deg, hsl(203deg 100% 50%) 0%, hsl(216deg 100% 50%) 3%, hsl(233deg 100% 59%) 16%, hsl(255deg 100% 59%) 40%, hsl(277deg 100% 50%) 72%, hsl(295deg 100% 50%) 100%);
		animation: bg infinite;
		animation-duration: 13s;
		background-size: 140% auto;
		color: white;
	}

  &.primary-o {
    background-image: linear-gradient(
        65deg,
        hsl(36deg 100% 50%) 0%,
        hsl(24deg 100% 49%) 50%,
        hsl(0deg 100% 48%) 100%
    );
    animation: bg infinite;
    animation-duration: 13s;
    background-size: 140% auto;
    color: white;
  }

	&.primary {
		background-image: linear-gradient(135deg, @primary-gradient-first 26%, @primary-gradient-second 75%);
		background-size: 140% auto;
		&:hover {
			background-position: 40% center;
		}
		color: white;
	}

	@keyframes bg {
		0% {
			background-position: 0% center;
		}

		50% {
			background-position: 100% center;
		}

		100% {
			background-position: 0% center;
		}
	}

	&.outlined {
		background: transparent;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.5);

		&:hover {
			border-color: white;
		}
	}

	&.arrow {
		@media screen and (min-width: 1000px) {
			svg {
				transition: all 0.2s ease;
			}

			&:hover svg {
				transform: translateX(4px);
			}
		}
	}

	&.dark {
		border-color: @textmidgray;
		color: @textmidgray;

		&:hover {
			border-color: black;
			color: black;
		}
	}
}

.content {
	display: flex;
	align-items: center;

	.icon {
		margin-left: 0.3em;
		svg {
			width: 20px;
		}
	}
}
</style>