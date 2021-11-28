import { GetterTree } from 'vuex'
import { UserState } from './state'

export const getters: GetterTree<UserState, {}> = {
  userInfo: (state) => state.userInfo, // 用户信息
}
