import {
  REMOVE_JWT_TOKEN,
  SET_JWT_TOKEN,
  LOGIN,
  AUTO_LOGIN,
  LOGOUT
} from './auth.actions'
import JwtService from '@/services/jwt'

import ApiClient from '@/clients/api'

const state = {
  authUser: undefined
}

const getters = {
  authUser: () => state.authUser,
  isAuthenticated: () => !!getters.authUser && !!JwtService.getToken()
}

const actions = {
  [LOGIN] ({ commit }) {
    // todo: change callback to real api with gauth
    const { user, token } = {
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
    commit(SET_JWT_TOKEN, { user, token })
  },
  [REMOVE_JWT_TOKEN] ({ commit }) {
    commit(REMOVE_JWT_TOKEN)
  },
  [AUTO_LOGIN] ({ commit }) {
    // todo: change callback to real api with gauth
    const { user, token } = {
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
    commit(SET_JWT_TOKEN, { user, token })
  },
  [LOGOUT] ({ commit }) {
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
