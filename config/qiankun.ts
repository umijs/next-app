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
            // component: 'subAppContainer',
            microApp: 'umi-next-app-slave',
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
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
};

export default isQiankun ? qiankunConfig : { routes };
