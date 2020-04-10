import { IBestAFSRoute } from '@umijs/plugin-layout';

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    menu: {
      // 兼容此写法
      name: '你好',
      icon: 'smile',
    },
  },
  {
    path: '/login',
    component: '@/pages/login',
    layout: false
  },
  {
    path: '/welcome',
    component: '@/pages/welcome',
    menu: {
      name: '欢迎',
      icon: 'smile',
    },
    access: 'hasToken' // 这里写的是 src/access 里面的变量名
  },
];
export default routes;
