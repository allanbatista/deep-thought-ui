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
    'app-header': AppHeader
  }
}
</script>
