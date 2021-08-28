import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/styles/global.less';
import '@/styles/mc.less';
import * as mdijs from '@mdi/js';
// @ts-ignore
import mdiVue from 'mdi-vue/v2';
// @ts-ignore
import checkView from 'vue-check-view';
import VueLazyload from 'vue-lazyload';
import Meta from 'vue-meta';

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
router.beforeEach((to, from, next) => {
	if (to.path !== from.path) {
		document.getElementsByTagName('html')[0].scrollTo(0, 0);
	}
	next();
});

Vue.mixin({
	metaInfo: {
		meta: [
			{ property: 'og:title', content: 'SEATiDE | 高版本公益模组服务器' },
			{ property: 'og:site_name', content: 'SEATiDE' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: 'https://seatide.top' },
			{
				property: 'og:image',
				content: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/seatide-main.png'
			},
			{
				property: 'og:description',
				content: '这里是 SEATiDE 服务器官方网站，你可以在这里获取到关于 SEATiDE 的介绍以及服务器的运行信息。'
			},
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:site', content: 'https://seatide.top' },
			{ name: 'twitter:title', content: 'SEATiDE | 高版本公益模组服务器' },
			{
				name: 'twitter:description',
				content: '这里是 SEATiDE 服务器官方网站，你可以在这里获取到关于 SEATiDE 的介绍以及服务器的运行信息。'
			},
			{ name: 'twitter:creator', content: '@subilan1995' },
			{
				name: 'twitter:image:src',
				content: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/seatide-main.png'
			},
			{ itemprop: 'name', content: 'SEATiDE | 高版本公益模组服务器' },
			{
				itemprop: 'description',
				content: '这里是 SEATiDE 服务器官方网站，你可以在这里获取到关于 SEATiDE 的介绍以及服务器的运行信息。'
			},
			{
				itemprop: 'image',
				content: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/seatide-main.png'
			},
			{ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				name: 'description',
				content: '这里是 SEATiDE 服务器官方网站，你可以在这里获取到关于 SEATiDE 的介绍以及服务器的运行信息。'
			},
			{
				name: "theme-color",
				content: "#fcd307"
			}
		],
		link: [
			{
				rel: 'canonical',
				href: 'https://seatide.top'
			}
		]
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
