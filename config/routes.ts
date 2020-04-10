import { IBestAFSRoute } from '@umijs/plugin-layout';

const routes: IBestAFSRoute[] = [
    {
        path: '/',
        component: '@/pages/index',
        menu: { // 兼容此写法
            name: '欢迎',
            icon: 'smile',
        }
    }
]
export default routes;
