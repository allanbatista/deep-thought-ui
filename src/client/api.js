import axios from 'axios'
import JwtService from '@/services/jwt'

class ApiClient {
  constructor () {
    this._http = axios
    this._http.defaults.baseURL = process.env.VUE_APP_API_URL
    this._http.defaults.headers['Content-Type'] = 'application/json'
  }
  setAuthToken () {
    this._http.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`
  }
  removeAuthToken () {
    delete this._http.defaults.headers.common.Authorization
  }
  async query (url, params) { return this._http.get(url, { params }) }
  async get (url) { return this._http.get(url) }
  async post (url, data) { return this._http.post(url, { data }) }
  async put (url, data) { return this._http.put(url, { data }) }
  async delete (url) { return this._http.delete(url) }
}

export default new ApiClient()
