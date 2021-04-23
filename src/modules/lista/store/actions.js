import * as types from './mutation-types'

export const ActionSetListaItens = ({ commit }, payload) => {
  commit(types.SET_ITENS, payload)
}
