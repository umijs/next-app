import routes from './routes';

const { QIANKUNAPP = '' } = process.env;
const isQiankun = QIANKUNAPP === 'master';
const qiankunConfig = {
  routes: routes.concat(
    isQiankun
      ? [
          {
            path: '/umi-next-app-slave',
            // exact: true,
            component: 'subAppContainer',
            menu: {
              name: 'slave',
              icon: 'smile',
            },
          },
        ]
      : [],
  ),
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'umi-next-app-slave', // 唯一 id
          entry: '//localhost:3000/', // html entry
          base: '/umi-next-app-slave', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
};

export default isQiankun ? qiankunConfig : { routes };
