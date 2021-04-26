import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'at-ui'
import store from '@/store/'
import Blog from '@/views/blog'

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
        // component: () => import('@/views/blog'),
        component: Blog,
        meta: { requiresAuth: true }
      },
      // 技术文章
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article'),
        meta: { requiresAuth: true }
      },
      // 留言
      {
        path: '/comment',
        name: 'comment',
        component: () => import('@/views/comment'),
        meta: { requiresAuth: true }
      },
      // 设置
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/setting'),
        meta: { requiresAuth: true }
      },
      // 富文本编辑器编辑页面
      {
        path: '/input',
        name: 'input',
        component: () => import('@/views/input'),
        meta: { requiresAuth: false }
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
  // mode: 'history',
  routes
})

// 解决 冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// 导航守卫
router.beforeEach((to, from, next) => {
  const user = store.state.userInfo
  if (to.meta.requiresAuth) {
    // 如果用户信息存在
    if (user) {
      // 如果方位的路径是 /blog 要校验身份权限
      if (to.path === '/blog') {
        if (user.keyId === 'tyh') {
          return next()
        }
        Message({
          message: '权限不足，无法访问！',
          duration: 900,
          showClose: true
        })
        return
      }
      return next()
    }
    // 没有登录 提示是否需要登录
    next('/login')
  } else {
    // 不需要登录状态的页面 直接放行
    next()
  }
})

export default router
