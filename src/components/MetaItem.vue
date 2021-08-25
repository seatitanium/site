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
	svg {
		fill: rgba(0, 0, 0, 0.32);
	}
	display: flex;
	align-items: center;

	.mdi {
		margin-right: 0.5em;
	}

	.name {
		font-weight: bold;
		margin-right: 1em;
		font-size: 110%;
	}

	.text {
		color: black;
	}

	&::after {
		content: "|";
		display: block;
		color: rgba(0, 0, 0, 0.21);
		height: 100%;
		margin: 0 16px;
	}

	&:last-child::after {
		content: none;
	}
}
</style>