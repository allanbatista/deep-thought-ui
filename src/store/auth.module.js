import GoogleAuthService from '../services/google-auth'
import JwtService from '../services/jwt'
import AuthService from '../services/auth'
import { AUTO_LOGIN, LOGIN, LOGOUT, REMOVE_AUTH_USER, SET_AUTH_USER } from './auth.actions'

const state = {
  authUser: undefined
}

const getters = {
  authUser: () => state.authUser,
  isAuthenticated: () => !!state.authUser && JwtService.tokenIsValid(),
  authSingInUrl: () => GoogleAuthService.singInUrl()
}

const actions = {
  async [AUTO_LOGIN] ({ commit }) {
    if (JwtService.tokenIsValid()) {
      try {
        const user = await AuthService.login()
        return commit(SET_AUTH_USER, { user })
      } catch (err) {
        return console.log(err)
      }
    }
    return Promise.reject(new Error('JWT Token is not set'))
  },
  async [LOGIN] ({ commit }, { jwt }) {
    JwtService.setToken(jwt)
    try {
      const user = await AuthService.login()
      return commit(SET_AUTH_USER, { user })
    } catch (err) {
      return console.log(err)
    }
  },
  [LOGOUT] ({ commit }) {
    commit(REMOVE_AUTH_USER)
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
