import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: 'index',
        component: () => import("./views/Index.vue"),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/create',
        name: 'create',
        component: () => import("./views/Create.vue"),
        meta: {
            title: '创建'
        }
    }
  ]
})

export default router
