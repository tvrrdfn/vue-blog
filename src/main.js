// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import store from './vuex';
import router from './router';
import interceptor from './apis/http.interceptor';

import './assets/i18n'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    Vuex,
    store,
    router,
    template: '<App/>',
    components: { App }
});
