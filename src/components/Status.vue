<template>
	<div class="status" v-if="status !== ''">
		<div v-if="status === 'loading'" class="status-loading status-msg">
			<spinner
				:font-size="20"
				message="加载中"
				line-fg-color="#fcd307"
				:line-size="6"
			/>
		</div>
		<div v-if="status === 'error'" class="status-error status-msg">
			<mdicon name="alert"/>
			<span class="status-info">加载失败</span>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import Spinner from "vue-simple-spinner";

export default Vue.extend({
	props: {
		status: {
			type: String,
			default: "",
		},
	},
	components: {
		Spinner,
	},
});
</script>

<style lang="less" scoped>
.status {
	text-align: center;
	margin: 96px 0;
	height: 100%;
	.status-msg {
		.mdi-alert svg {
			transform: scale(2.5);
			margin-bottom: 32px;
		}

		display: flex;
		flex-direction: column;
		justify-content: center;

		font-size: 20px;
		color: @textlightgray;
	}
}
</style>