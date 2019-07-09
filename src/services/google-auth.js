const GoogleAuthService = {
  singInUrl: () => `${process.env.VUE_APP_API_URL}/auth/sessions/google_sing_in`
}

export default GoogleAuthService
