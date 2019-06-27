import axios from 'axios'
import JwtService from '@/services/jwt'

class ApiClient {
  constructor () {
    this.http = axios
    this.http.defaults.headers['Content-Type'] = 'application/json'
  }
  setAuthToken () {
    this.http.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`
  }
  removeAuthToken () {
    delete this.http.defaults.headers.common.Authorization
  }
  async query (url, params) { return this.http.get(url, { params }) }
  async get (url) { return this.http.get(url) }
  async post (url, data) { return this.http.post(url, { data }) }
  async put (url, data) { return this.http.put(url, { data }) }
  async delete (url) { return this.http.delete(url) }
}

export default ApiClient()
