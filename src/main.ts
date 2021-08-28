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

Vue.use(mdiVue, {
	icons: mdijs
});
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

Array.prototype.shuffle = function() {
	var array = this;
	var m = array.length,
		t,
		i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
};

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
