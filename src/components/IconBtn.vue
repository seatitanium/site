<template>
	<button class="icon-btn">
		<mdicon :name="icon" />
	</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: ["icon"],
});
</script>

<style lang="less" scoped>
.icon-btn {
	border-radius: 100%;
	outline: none;
	width: 32px;
	height: 32px;
    text-align: center;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease;

	&.dark {
		background: #414141;
		color: white;

        &:hover {
            background: @primary;
        }

		svg {
			fill: white !important;
		}
	}
}
</style>