import { defineConfig } from 'umi';
import qiankunConfig from './qiankun';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  layout: {
    name: 'Umi App',
    locale: true,
  },
  antd: {},
  locale: {
    antd: true,
  },
  esbuild: {},
  ...qiankunConfig,
});
