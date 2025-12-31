import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'

Vue.use(Router)

// 这里写默认路由，例如login，404，500等
const routes = [
    {
        path: '/',
        redirect: '/home/databoard'
    }
]

const Routes = [...routes, ...HomeRoutes]

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
