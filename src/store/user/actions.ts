import { ActionTree, ActionContext } from 'vuex'
import { UserActionTypes } from './action-type'
import { UserMutationTypes } from './mutation-type'
import { UserState } from './state'
import { Mutations } from './mutations'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, {}>, 'commit'>

export interface Actions {
  [UserActionTypes.SET_USER_INFO](
    { commit }: AugmentedActionContext,
    userInfo: any
  ): void
}

export const actions: ActionTree<UserState, {}> & Actions = {
  [UserActionTypes.SET_USER_INFO]({ commit }, userInfo: any) {
    commit(UserMutationTypes.SET_USER_INFO, userInfo)
  },
}
