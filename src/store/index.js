import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import system from './system'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'demo',
    loading: false
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading || false
    }
  },
  actions: {},
  modules: {
    system
  },
  getters
})

export default store
