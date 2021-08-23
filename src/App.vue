<template>
	<div class="app">
    <navbar/>
		<transition name="fade" mode="out-in">
			<router-view view />
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>

<style lang="less">
[view] {
	margin-top: 56px;
}

.fade-enter,
.fade-leave-to {
	visibility: hidden;
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter-to,
.fade-leave {
	opacity: 1;
	visibility: visible;
}
</style>
