import * as types from './mutation-types'

export default {

  [types.SET_ITENS] (state, payload) {
    state.itensLista = payload
  },

  [types.SET_LIST] (state, payload) {
    state.list = payload
  }
}
