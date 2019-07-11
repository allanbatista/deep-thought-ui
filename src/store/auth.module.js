import ApiClient from '../client/api'
import loggerClient from '../client/logger'
import AuthService from '../services/auth'
import GoogleAuthService from '../services/google-auth'
import JwtService from '../services/jwt'
import { AUTO_LOGIN, LOGIN, LOGOUT, REMOVE_AUTH_USER, SET_AUTH_USER } from './auth.actions'

const state = {
  authUser: undefined
}

const getters = {
  authUser: state => state.authUser,
  isAuthenticated: state => !!state.authUser && JwtService.tokenIsValid(),
  authSingInUrl: () => GoogleAuthService.singInUrl()
}

const actions = {
  async [AUTO_LOGIN] ({ commit }) {
    if (!JwtService.tokenIsValid()) {
      // TODO: Use message error here
      loggerClient.error(new Error('JWT Token is not set'))
      commit(REMOVE_AUTH_USER)
    }
    try {
      ApiClient.setAuthToken()
      const user = await AuthService.login()
      commit(SET_AUTH_USER, { user })
    } catch (err) {
      // TODO: Use message error here
      loggerClient.error(err)
      commit(REMOVE_AUTH_USER)
    }
  },
  async [LOGIN] ({ commit }, { jwt }) {
    try {
      JwtService.setToken(jwt)
      const user = await AuthService.login()
      commit(SET_AUTH_USER, { user })
    } catch (err) {
      // TODO: Use message error here
      loggerClient.error(err)
      commit(REMOVE_AUTH_USER)
    }
  },
  [LOGOUT] ({ commit }) {
    try {
      commit(REMOVE_AUTH_USER)
    } catch (err) {
      // TODO: Use message error here
      loggerClient.error(err)
    }
  }
}

const mutations = {
  [SET_AUTH_USER] (state, { user }) {
    state.authUser = user
  },
  [REMOVE_AUTH_USER] (state) {
    state.authUser = undefined
    JwtService.removeToken()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
