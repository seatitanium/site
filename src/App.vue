<template>
	<div class="app">
		<navbar/>
		<transition name="fade" mode="out-in">
			<router-view :class="isPCSize() ? (isMobile() ? 'mobile-pc-size' : 'pc-size') : 'mobile-size'" view />
		</transition>
		<Footer/>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { isPCSize, isMobile } from "@/fn";

export default Vue.extend({
	components: {
		Navbar,
		Footer,
	},
	methods: {
		isPCSize,
		isMobile
	}
});
</script>

<style lang="less">
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
