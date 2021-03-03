import Vue from 'vue'
import VueRouter from 'vue-router'

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
  if (to.path === '/') {
    next()
    return
  }
  if (to.path !== '/login') {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
