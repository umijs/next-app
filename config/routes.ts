import { IBestAFSRoute } from '@umijs/plugin-layout';

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    menu: {
      // 兼容此写法
      name: 'hello',
      icon: 'smile',
    },
  },
  {
    path: '/login',
    component: '@/pages/login',
    layout: false,
  },
  {
    path: '/dva',
    component: '@/pages/dva',
    menu: {
      name: 'dva',
      icon: 'smile',
    },
  },
  {
    path: '/welcome',
    component: '@/pages/welcome',
    menu: {
      name: 'welcome',
      icon: 'smile',
    },
    access: 'hasToken', // 这里写的是 src/access 里面的变量名
  },
];
export default routes;
