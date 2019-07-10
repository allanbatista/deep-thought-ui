import ApiClient from '../client/api'

const TOKEN_KEY = process.env.VUE_APP_JWT_TOKEN_KEY

/**
 * Interact with `localStorage` through `VUE_APP_JWT_TOKEN_KEY`
 */
const JwtService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },
  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
    ApiClient.removeAuthToken()
  },
  setToken (token) {
    localStorage.setItem(TOKEN_KEY, token)
    ApiClient.setAuthToken()
  },
  tokenIsValid () {
    return !!this.getToken()
  }
}

export default JwtService
