import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      // 首页
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { requiresAuth: false }
      },
      // 我的动态
      {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog'),
        meta: { requiresAuth: true }
      },
      // 404
      {
        path: '*',
        name: '404',
        component: () => import('@/views/404')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const user = window.localStorage.getItem('userInfo')

  if (to.meta.requiresAuth) {
    if (user) {
      if (JSON.parse(user).keyId === 'tyh') {
        return next()
      }
      Message({
        message: '权限不足，无法访问！',
        duration: 800,
        showClose: true
      })
      return next('/')
    }
  } else {
    return next()
  }
})

export default router
