<template>
	<button class="btn" :class="type + ' ' + size">
		<slot />
		<mdicon v-if="icon" :name="icon" class="icon" />
	</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: ["type", "size", "icon"],
});
</script>

<style lang="less" scoped>
.btn {
	display: flex;
	align-items: center;
	border-radius: 5px;
	padding: 10px 20px;
	border: none;
	transition: all 0.2s ease;
	cursor: pointer;

	&.large {
		font-size: 18px;
	}

	&.shadow {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
	}

	&.hover {
		&:hover {
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
		}
	}

	&.primarylight {
		position: relative;
		background: linear-gradient(94deg, #FCD307 29.88%, #FFB526 67.68%);
		background-clip: text;
		color: transparent;
		svg {
			color: @primary;
		}
		&:hover {
			background-clip: unset;
			color: white;
			&::after {
				background: linear-gradient(to right, #fcd307 29.88%, #ffb526 67.68%);
			}
			svg {
				color: white;
			}
		}

		&::after {
			transition: all .5s ease;
			content: " ";
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

	&.primary {
		background-image: linear-gradient(
			to right,
			#fcd307 29.88%,
			#ffb526 67.68%
		);
		background-size: 140% auto;
		&:hover {
			background-position: right center;
		}
		color: white;
	}

	&.outlined {
		background: transparent;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.5);

		&:hover {
			border-color: white;
		}
	}

	.icon {
		margin-left: 0.3em;
		svg {
			width: 20px;
		}
	}

	&.arrow {
		svg {
			transition: all 0.2s ease;
		}

		&:hover svg {
			transform: translateX(4px);
		}
	}
}
</style>