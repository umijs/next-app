import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'Umi App',
    locale: true,
  },
  routes,
  antd: {},
  locale: {},
});
