require('./bootstrap');
import Vue from 'vue';
import { router } from './router';
import AppVue from './AppVue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

window.Vue = require('vue');

Vue.config.productionTip = false;

import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

//Vue.use(VeeValidate);

// import FlashMessage from '@smartweb/vue-flash-message';
// Vue.use(FlashMessage);


const app = new Vue({
    el: '#app',
    router,
    render: h => h(AppVue)
}).$mount("#app");

