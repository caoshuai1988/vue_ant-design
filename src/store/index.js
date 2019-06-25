import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import stepform from './modules/stepform'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    stepform
  },
  state: {
    dataOne: 0,
    formLargen: 'default' // 改变form
  },
  mutations: {
    changOne (state, type) {
      state.dataOne = type
    },
    changLargen (state, type) { // 改变form
      state.formLargen = type
      console.log(state.formLargen)
    }
  },
  actions: {
    changOneActions (context, type) {
      context.commit('changOne', type)
    },
    changFormLargen (context, type) { // 改变form
      context.commit('changLargen', type)
    }
  },
  getters // Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
})
