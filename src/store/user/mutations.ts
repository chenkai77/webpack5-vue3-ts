import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './mutation-type'

export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_USER_INFO](state: S, userInfo: any): void
}

export const mutations: MutationTree<UserState> & Mutations = {
  /**
   * @description: 保存用户信息
   * @author: depp.chen
   */
  [UserMutationTypes.SET_USER_INFO](state: UserState, userInfo: any) {
    state.userInfo = userInfo
  },
}
