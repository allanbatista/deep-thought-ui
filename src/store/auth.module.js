import { REMOVE_JWT_TOKEN, SET_JWT_TOKEN } from '@/store/auth.actions'
import JwtService from '@/services/jwt'

const state = {
  authUser: null
}

const getters = {
  authUser: () => state.authUser,
  isAuthenticated: () => state.authUser && !!JwtService.getToken()
}

const actions = {
  [REMOVE_JWT_TOKEN] ({ commit }) {
    commit(REMOVE_JWT_TOKEN)
  }
}

const mutations = {
  [SET_JWT_TOKEN] (state, { user, token }) {
    state.authUser = user
    JwtService.setToken(token)
  },
  [REMOVE_JWT_TOKEN] (state) {
    state.authUser = null
    JwtService.removeToken()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
