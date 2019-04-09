import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import VueRouter from 'vue-router';

Vue.use(Router);
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
