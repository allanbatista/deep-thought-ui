<template>
  <login-card>
    <h1 class="text-xl font-medium text-center my-8">Access your account</h1>
    <google-sing-in-button></google-sing-in-button>
  </login-card>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

// components
import LoginCard from '@/components/ui/cards/LoginCard'
import GoogleSingInButton from '@/components/ui/buttons/GoogleSingInButton'

// actions
import { LOGIN } from '@/store/auth.actions'

export default {
  components: {
    LoginCard,
    GoogleSingInButton
  },
  computed: mapGetters(['isAuthenticated']),
  created () {
    // check if jwt was given
    if (this.$route.query.jwt) {
      this.$store.dispatch(LOGIN, this.$route.query.jwt)
        .then(() => this.$router.next({ name: 'dashboard' }))
        .catch(() => { })
    }
  },
  mounted () {
    // Send to dashboard a authenticated user
    if (this.isAuthenticated) this.$router.next({ name: 'dashboard' })
  }

}
</script>
