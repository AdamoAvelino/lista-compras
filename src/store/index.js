import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './store'

Vue.use(Vuex)

export default new Vuex.Store({ modules, plugins: [createPersistedState()] })
