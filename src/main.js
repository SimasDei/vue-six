import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import VueRouter from 'vue-router';

Vue.use(Router);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
