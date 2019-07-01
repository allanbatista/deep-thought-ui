<template>
  <el-card class='max-w-lg mx-auto w-full mt-56 py-8 px-4'>
    <app-logo
      class='mx-auto'
      size='lg'
      :white="false"
    ></app-logo>
    <slot></slot>
  </el-card>
</template>

<script>
import AppLogo from '@/components/ui/AppLogo'

export default {
  components: {
    AppLogo
  }
}
</script>
