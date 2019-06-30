<template>
  <login-card>
    <app-logo :size="mid"></app-logo>
    <h1 class="text-2xl font-medium text-center mb-8">Acess your account</h1>
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
