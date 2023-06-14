import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/styles/global.less';
import '@/styles/mc.less';
import '@/styles/nprogress.less';
import * as mdijs from '@mdi/js';
// @ts-ignore
import mdiVue from 'mdi-vue/v2';
// @ts-ignore
import checkView from 'vue-check-view';
import VueLazyload from 'vue-lazyload';
import Meta from 'vue-meta';
import NProgress from 'nprogress';

Vue.use(mdiVue, {
	icons: mdijs
});
Vue.use(Meta);
Vue.use(checkView);
Vue.use(VueLazyload);
Vue.config.productionTip = false;
Vue.prototype.$open = (url: string) => {
	window.open(url);
};
Vue.prototype.load = false;
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach((to, from) => {
	if (to.path !== from.path) {
		document.getElementsByTagName('html')[0].scrollTo(0, 0);
	}
	NProgress.done();
	Vue.prototype.load = true;
});

Vue.mixin({
	metaInfo: {
		meta: [
			{ property: 'og:title', content: 'Seati - Everything Titanium' },
			{ property: 'og:site_name', content: 'Seati' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: 'https://seati.cc' },
			{
				property: 'og:image',
				content: 'https://seati.oss-cn-qingdao.aliyuncs.com/titanium.png'
			},
			{
				property: 'og:description',
				content: '这里是 Seati 服务器官方网站，你可以在这里获取到关于 Seati 的介绍以及服务器的运行信息。'
			},
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:site', content: 'https://seati.cc' },
			{ name: 'twitter:title', content: 'Seati - Everything Titanium' },
			{
				name: 'twitter:description',
				content: '这里是 Seati 服务器官方网站，你可以在这里获取到关于 Seati 的介绍以及服务器的运行信息。'
			},
			{ name: 'twitter:creator', content: '@subilan1995' },
			{ itemprop: 'name', content: 'Seati | Everything Titanium' },
			{
				itemprop: 'description',
				content: '这里是 Seati 服务器官方网站，你可以在这里获取到关于 Seati 的介绍以及服务器的运行信息。'
			},
			{
				itemprop: 'image',
				content: 'https://seati.oss-cn-qingdao.aliyuncs.com/titanium.png'
			},
			{ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				name: 'description',
				content: '这里是 Seati 服务器官方网站，你可以在这里获取到关于 Seati 的介绍以及服务器的运行信息。'
			},
			{
				name: 'theme-color',
				content: '#2196f3'
			}
		],
		link: [
			{
				rel: 'canonical',
				href: 'https://seati.cc'
			}
		]
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
