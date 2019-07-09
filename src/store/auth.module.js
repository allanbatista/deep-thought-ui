import ApiClient from '../client/api'
import JwtService from '../services/jwt'
import GoogleAuthService from '../services/google-auth'
import { AUTO_LOGIN, LOGIN, LOGOUT, REMOVE_JWT_TOKEN, SET_JWT_TOKEN } from './auth.actions'

const state = {
  authUser: undefined
}

// todo: should be removed
const FIXTURE_USER = {
  user: {
    'id': 'nice-id',
    'name': 'Bob Cat',
    'email': 'bob@cat.meow',
    'picture': 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP2538-CUSA05620_00-AV00000000000108//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100',
    'verified_email': true,
    'created_at': '2019-06-22T22:31:11+00:00',
    'updated_at': '2019-06-22T22:31:12+00:00'
  },
  token: 'fake-token'
}

const getters = {
  authUser: () => state.authUser,
  isAuthenticated: () => !!state.authUser && !!JwtService.getToken(),
  authSingInUrl: () => GoogleAuthService.singInUrl()
}

const actions = {
  [AUTO_LOGIN] ({ commit }) {
    // todo: change callback to real api with gauth
    if (JwtService.getToken()) {
      const { user, token } = FIXTURE_USER
      commit(SET_JWT_TOKEN, { user, token })
    }
  },
  [LOGOUT] ({ commit }) {
    commit(REMOVE_JWT_TOKEN)
  },
  [LOGIN] ({ commit }) {
    // todo: change callback to real api with gauth
    const { user, token } = FIXTURE_USER
    commit(SET_JWT_TOKEN, { user, token })
  }
}

const mutations = {
  [SET_JWT_TOKEN] (state, { user, token }) {
    state.authUser = user
    JwtService.setToken(token)
    ApiClient.setAuthToken()
  },
  [REMOVE_JWT_TOKEN] (state) {
    state.authUser = undefined
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
