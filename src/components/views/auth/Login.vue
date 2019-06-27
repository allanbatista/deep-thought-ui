<template>
  <login-card>
    <h1>Access your account</h1>
    <el-button class='btn--block' @click="onSingInWithGoogle">
      <img
        src="@/assets/icons/google-icon.svg"
        width="20"
        height="20"
      >
    </el-button>
  </login-card>
</template>

<script>
import LoginCard from '@/components/ui/cards/LoginCard'

export default {
  components: {
    LoginCard
  },
  methods: {
    onSingInWithGoogle ($event) {
      console.log($event)
    }
  }
}
</script>

<style>
</style>
