// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import './common/stylus/index.styl';
/* eslint-disable no-new */
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
