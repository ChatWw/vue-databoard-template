/**
 * 按模块区分： 数据看板
 */

export default [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/layout/index.vue'),
        redirect: '/home/databoard',
        children: [
            {
                path: 'databoard',
                name: 'HomeDataboard',
                component: () => import(/* webpackChunkName: "homeDataboard" */ '@/views/home/databoard/index.vue'),
                meta: {
                    title: '数据看板'
                }
            }
        ]
    }
]
