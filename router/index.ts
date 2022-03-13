import { createRouter, createWebHistory } from 'vue-router'
// 这个type表示导入的 是个类型
import type { RouteRecordRaw } from 'vue-router'

// const routes: RouteRecordRaw = [

//是这个类型对应的数组
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'home',
    component: () => import('../src/views/home.vue')
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('../src/views/about.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
