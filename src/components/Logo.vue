<template>
	<div class="logo">
		<img src="@/assets/seatide-main.svg" class="img" />
		<span class="text">SEATiDE</span>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="less" scoped>
.logo {
	display: flex;
	align-items: center;
	cursor: default;

	*::selection {
		background: transparent;
	}

	&.small {
		.img {
			width: 32px;
		}
		.text {
			font-size: 20px;
		}
	}

	&.hero {
		.img {
			width: 200px;
		}

		.text {
			font-size: 96px;
		}
	}

	&.center {
		justify-content: center;
	}

	&.light {
		.text {
			color: white;
		}
	}

	.text {
		margin-left: 0.5em;
		font-style: "SF Pro Display", "Inter", Segoe UI, sans-serif;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.75);
	}
}
</style>