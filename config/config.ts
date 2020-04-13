import { defineConfig } from 'umi';
import qiankunConfig from './qiankun';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'Umi App',
    locale: true,
  },
  antd: {},
  locale: {},
  ...qiankunConfig,
});
