<template>
  <login-card>
    <h1>Access your account</h1>
    <google-sing-in-button @click.native="singInWithGoogle"></google-sing-in-button>
  </login-card>
</template>

<script>
import LoginCard from '@/components/ui/cards/LoginCard'
import GoogleSingInButton from '@/components/ui/buttons/GoogleSingInButton'

export default {
  components: {
    LoginCard,
    GoogleSingInButton
  },
  methods: {
    singInWithGoogle ($event) {
      console.log($event)
    }
  }
}
</script>

<style>
</style>
