import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: false, // 主题状态
    userInfo: JSON.parse(window.localStorage.getItem('userInfo')) // 用户信息
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
      window.localStorage.setItem('userInfo', JSON.stringify(info))
    }
  },
  actions: {},
  modules: {}
})
