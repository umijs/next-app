import React from 'react';
import { ResponseError, Context } from 'umi-request';
import { DefaultFooter } from '@ant-design/pro-layout';
import { initData } from '@/services/api';

// @umijs/plugin-layout 配置
export const layout = {
  logout: () => {}, // do something
  footerRender: () => (
    <DefaultFooter
      links={[
        { key: 'antd', title: 'ant design', href: 'https://ant.design/', blankTarget: true },
        { key: 'dumi', title: 'dumi', href: 'https://d.umijs.org/', blankTarget: true },
        { key: 'pro', title: 'pro', href: 'https://pro.ant.design/', blankTarget: true },
      ]}
      copyright="umijs"
    ></DefaultFooter>
  ), // return string || ReactNode;
};

// @umijs/plugin-request 配置
// 请求中间件 就是发起请求和响应之后需要统一操作数据就写这
// https://github.com/umijs/umi-request#example-1
const middleware = async (ctx: Context, next: any) => {
  console.log('a1');
  await next();
  console.log('a2');
};

export const request = {
  prefix: '', // 统一的请求头
  middlewares: [middleware],
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};

// @umijs/plugin-initial-state 配置
export async function getInitialState() {
  const { data = {} } = await initData();
  return data;
}

// @umijs/plugin-qiankun 配置
const { QIANKUNAPP = '' } = process.env;

export const qiankun =
  QIANKUNAPP === 'master'
    ? {
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
        lifeCycles: {
          // see https://github.com/umijs/qiankun#registermicroapps
          // afterMount: props => {
          //   console.log(props);
          // },
        },
        // ...even more options qiankun start() supported, see https://github.com/umijs/qiankun#start
      }
    : {};
