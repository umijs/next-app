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
    path: '/welcome',
    component: '@/pages/welcome',
    menu: {
      name: '欢迎',
      icon: 'smile',
    },
  },
];
export default routes;
