import {
  REMOVE_JWT_TOKEN,
  SET_JWT_TOKEN,
  LOGIN
} from '@/store/auth.actions'
import JwtService from '@/services/jwt'

import ApiClient from '@/clients/api'

const state = {
  authUser: null
}

const getters = {
  authUser: () => state.authUser,
  isAuthenticated: () => state.authUser && !!JwtService.getToken()
}

const actions = {
  [LOGIN] ({ commit }) {
    const { user, token } = {}
    // todo: callback for oauth
    commit(SET_JWT_TOKEN, { user, token })
  },
  [REMOVE_JWT_TOKEN] ({ commit }) {
    commit(REMOVE_JWT_TOKEN)
  }
}

const mutations = {
  [SET_JWT_TOKEN] (state, { user, token }) {
    state.authUser = user
    JwtService.setToken(token)
    ApiClient.setAuthToken()
  },
  [REMOVE_JWT_TOKEN] (state) {
    state.authUser = null
    JwtService.removeToken()
    ApiClient.removeAuthToken()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
