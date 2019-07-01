<template>
  <div>
    <app-header></app-header>
    <base-content></base-content>
  </div>
</template>

<script>
import BaseContent from './BaseContent'
import AppHeader from '@/components/ui/AppHeader'

export default {
  components: {
    AppHeader,
    BaseContent
  }
}
</script>
