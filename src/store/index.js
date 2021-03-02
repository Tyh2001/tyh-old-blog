import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: false // 主题状态
  },
  mutations: {
    // 更改主题状态
    changeTheme (state, boor) {
      state.theme = boor
    }
  },
  actions: {},
  modules: {}
})
