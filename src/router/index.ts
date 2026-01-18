import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine/index.vue')
  },
  { path: '/order',
    name: 'order',
    component: () => import('@/views/order/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
