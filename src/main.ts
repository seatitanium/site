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

Vue.use(mdiVue, {
	icons: mdijs
});
Vue.use(checkView)
Vue.config.productionTip = false;
Vue.prototype.$open = (url: string) => {
	window.open(url);
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
