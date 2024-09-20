import { RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/router";
import { store } from "@/store";

const modules = import.meta.glob("../../views/**/**.vue");

export const usePermissionStore = defineStore("permission", () => {
  /**
   * 应用中所有的路由列表，包括静态路由和动态路由
   */
  const routes = ref<RouteRecordRaw[]>([]);

  /**
   * 生成动态路由
   */
  function generateRoutes() {
    return new Promise<RouteRecordRaw[]>((resolve, reject) => {
      // 动态路由假数据
      const dynamicRoutesData = [
        {
          path: "/list",
          component: () => import("@/views/list/index.vue"),
          children: [
            {
              path: "",
              component: () => import("@/views/list/list.vue"),
            },
            {
              path: "children",
              component: () => import("@/views/list/children.vue"),
            },
          ],
        },
      ];
      //
      const dynamicRoutes = transformRoutes(dynamicRoutesData);
      routes.value = constantRoutes.concat(dynamicRoutes);
      resolve(dynamicRoutes);
    });
  }

  return {
    routes,
    generateRoutes,
  };
});

/**
 * 转换路由数据为组件
 */
const transformRoutes = (routes: any) => {
  const asyncRoutes: RouteRecordRaw[] = [];
  routes.forEach((route: any) => {
    const tmpRoute = { ...route } as RouteRecordRaw;
    // 其他菜单，根据组件路径动态加载组件
    const component = modules[`../../views/${tmpRoute.component}.vue`];
    if (component) {
      tmpRoute.component = component;
    } else {
      tmpRoute.component = modules[`../../views/error/404.vue`];
    }

    if (tmpRoute.children) {
      tmpRoute.children = transformRoutes(route.children);
    }

    asyncRoutes.push(tmpRoute);
  });

  return asyncRoutes;
};

/**
 * 用于在组件外部（如在Pinia Store 中）使用 Pinia 提供的 store 实例。
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
