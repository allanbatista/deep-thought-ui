<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/ui/AppHeader'

export default {
  components: {
    AppHeader
  },
  beforeCreate () {
    // refac: there is a better way to change this global class in <body> ?
    document.getElementsByTagName('body')[0].classList.remove('un-auth')
  }
}
</script>
