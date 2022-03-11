import * as types from './mutation-types'

export const ActionSetListaItens = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      await commit(types.SET_ITENS, payload)
      resolve()
    } catch (erro) {
      reject(erro)
    }
  })
}

export const ActionSetList = ({ commit }, payload) => {
  commit(types.SET_LIST, payload)
}
