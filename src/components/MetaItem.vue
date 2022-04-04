<template>
	<div class="meta-item">
		<mdicon v-if="icon" :name="icon" />
		<span class="name"><slot name="name" /></span>
		<span class="text"><slot name="text" /></span>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: ["icon"],
});
</script>

<style lang="less" scoped>
.meta-item {
	position: relative;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.32);
	display: flex;
	align-items: center;

	.mdi {
		margin-right: 0.5em;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			@media (max-width: 800px) {
				width: 18px;
			}
			fill: rgba(0, 0, 0, 0.32);
		}
	}

	.name {
		margin-right: 1em;
		font-size: 16px;
		@media (max-width: 1000px) {
			display: none;
		}
	}

	.text {
		color: black;
		font-size: 18px;
		@media (max-width: 800px) {
			font-size: 13.5px;
		}
		
	}

	&::after {
		content: "|";
		display: block;
		color: rgba(0, 0, 0, 0.21);
		height: 100%;
		transform: scale(.8);
		@media (min-width: 1000px) {
			margin: 0 16px;
		}

		@media (max-width: 1000px) {
			margin: 0 8px;
			content: "/";
			transform: scale(0.8);
		}
	}

	&:last-child::after {
		content: none;
	}
}
</style>