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
    dataOne: 0
  },
  mutations: {
    changOne (state, type) {
      state.dataOne = type
    }
  },
  actions: {
    changOneActions (context, type) {
      context.commit('changOne', type)
    }
  },
  getters
})
