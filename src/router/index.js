import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
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
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog')
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
  // 如果访问首页 直接通过
  if (to.path === '/') {
    next()
    return
  }
  // 访问非首页 检测登录的状态
  if (to.path !== '/login') {
    if (user) {
      next()
      // 如果访问我的动态页面 根据用户的权限进行判断 只有 tyh 可以访问
      // 其他用户直接返回首页 并提示
      if (to.path === '/blog') {
        if (JSON.parse(user).keyId === 'tyh') {
          next()
        } else {
          Message({
            message: '权限不足，无法访问！',
            duration: 1000,
            showClose: true
          })
          next('/')
        }
      }
      return
    }
    next('/login')
    return
  }
  next()
})

export default router
