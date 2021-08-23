import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/styles/global.less';
import * as mdijs from '@mdi/js';
// @ts-ignore
import mdiVue from 'mdi-vue/v2';

Vue.use(mdiVue, {
	icons: mdijs
});
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
