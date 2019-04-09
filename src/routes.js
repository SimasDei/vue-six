import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '/',
    components: {
      default: Home,
      'header-top': Header
    },
    name: 'home'
  }
];
