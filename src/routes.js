import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/',
    component: Home
  }
];
