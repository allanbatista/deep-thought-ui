<template>
  <base-image
    alt="Deep Through logo"
    :src="(this.white ? require('@/assets/logo-white.png') : require('@/assets/logo.png'))"
    :size=size
  ></base-image>
</template>
<script>
import BaseImage from './BaseImage'
export default {
  components: {
    BaseImage
  },
  props: {
    size: String,
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>
