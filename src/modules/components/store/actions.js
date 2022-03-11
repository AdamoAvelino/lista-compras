import * as types from './mutation-types'

export const ActionSetLoading = ({ commit }, payload) => {
  commit(types.SET_LOADING, payload)
}
