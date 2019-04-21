import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全局 loading 框
    showLoading: false
  },
  mutations: {
    showLoading (state) {
      state.showLoading = true
    },
    hiddenLoading (state) {
      state.showLoading = false
    }
  },
  actions: {

  }
})
