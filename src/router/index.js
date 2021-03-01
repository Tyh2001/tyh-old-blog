import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      // 首页
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      },
      // 我的动态
      {
        path: '/dynamic',
        name: 'dynamic',
        component: () => import('@/views/dynamic')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
