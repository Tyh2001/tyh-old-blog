import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import './style/icon.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'at-ui-style'
import './utils/console.js'

import tyhUI from 'tyh-ui/lib'
Vue.use(tyhUI)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
