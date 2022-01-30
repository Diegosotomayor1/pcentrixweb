import Vue from 'vue'
import Vuex from 'vuex'
import computadora from './computadora'
import servicio from './servicio'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    computadora,
    servicio
  }
})
