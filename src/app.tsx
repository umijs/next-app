import React from 'react';
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
