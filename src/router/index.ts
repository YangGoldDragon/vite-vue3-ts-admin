import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/home/login.vue'),
    // meta: { hidden: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/notFound.vue'),
    // meta: { hidden: true },
  },
  // {
  //   path: "/list",
  //   component: () => import("@/views/list/index.vue"),
  //   // meta: { hidden: true },
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("@/views/list/list.vue"),
  //     },
  //     {
  //       path: "children",
  //       component: () => import("@/views/list/children.vue"),
  //     },
  //   ],
  // },
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: '/login' })
}

export default router
