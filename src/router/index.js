import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'

Vue.use(Router)

// 这里写默认路由，例如login，404，500等
const routes = [
    {
        path: '/',
        redirect: '/home/databoard'
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/layout/components/404/index.vue')
    }
]

// 确保404路由是最后一个路由
const appRoutes = [...routes.slice(0, -1), ...HomeRoutes, routes[routes.length - 1]]
const Routes = appRoutes

const router = new Router({
    routes: Routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
