/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-25 12:59:49
 */
// 路由表
let routes = [
    {
        path: '/',
        redirect: '/dog'
    },
    {
        path: '/dog',
        component: () => import('./components/dog.vue')
    },
    {
        path: '/car',
        component: () => import('./components/car.vue')
    }
]

// Fox App
export let FoxApp = {
    /** *
     * 安装
     */
    install(fox: any) {
        fox.router.onError(msg => {
            console.error(msg)
        })
        // 加入路由
        fox.router.addRoutes(routes)
    }
}
