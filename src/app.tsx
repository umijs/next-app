import React from 'react';
import { ResponseError, Context } from 'umi-request';
import { DefaultFooter } from '@ant-design/pro-layout';

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
