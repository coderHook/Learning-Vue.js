import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
  {path: '', component: Home, name: 'home'},
  {path: '/user', components:{
    default: User,
    'header-top': Header
  }, children: [
    {path: '', components: {default: UserStart, 'header-bottom': Header}},
    {path: ':id', component: UserDetail},
    {path: ':id/edit', component: UserEdit, name: 'userEdit'}
  ]},
  {path: '*', redirect: { name:'home'} }
];
