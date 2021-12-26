/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 11:38:39
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
        path: '/cat',
        component: () => import('./components/cat.vue')
    },
    {
        path: '/snake',
        component: () => import('./components/snake.vue')
    }
]

// Fox App
export let FoxApp = {
    /** *
     * 安装
     */
    install(fox: any) {
        // 加入路由
        fox.router.addRoutes(routes)

        // before filter
        fox.router.beforeEach((to: any, from: any, next: any, session: any) => {
            session.data.id = new Date().getTime()
            if (to.path === '/dog') {
                next(false)
            } else {
                next()
            }
        })

        // after filter
        fox.router.afterEach((to: any, from: any, session: any) => {
            console.info(`after to:${to.path}, from:${from ? from.path : 'unknown'}, id:${session.data && session.data.id}`)
        })

        // destroy filter
        fox.router.destroyEach((route: any, session: any) => {
            console.info(`destroy route:${route.path}, id:${session.data && session.data.id}`)
        })
    }
}
