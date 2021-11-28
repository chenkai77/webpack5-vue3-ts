import { Module } from 'vuex'
import type { UserState } from './state'
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const user: Module<UserState, {}> = {
  state,
  mutations,
  actions,
  getters,
}
