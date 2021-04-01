import Vue from 'vue'
import Vuex from 'vuex'

// 本地存储方法
import { getStorage, setStorage } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: false, // 主题状态
    userInfo: getStorage('userInfo') // 用户信息
  },
  mutations: {
    // 更改主题状态
    changeTheme (state, boor) {
      state.theme = boor
    },
    // 设置用户信息
    changeUserInfo (state, info) {
      state.userInfo = info

      // 用信息设置本地存储
      setStorage('userInfo', info)
    }
  },
  actions: {},
  modules: {}
})
