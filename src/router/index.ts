import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/join',
		name: 'join',
		component: () => import('@/views/Join.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue')
	},
	{
		path: '/donate',
		name: 'donate',
		component: () => import('@/views/Donate.vue')
	},
	{
		path: '/applications',
		name: 'applications',
		component: () => import('@/views/Applications.vue')
	},
	{
		path: '/terms',
		name: 'terms',
		component: () => import('@/views/Terms.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
