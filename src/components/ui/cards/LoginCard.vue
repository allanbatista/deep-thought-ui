<template>
  <el-card class='max-w-md mx-auto w-full mt-40 py-6 px-4'>
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
