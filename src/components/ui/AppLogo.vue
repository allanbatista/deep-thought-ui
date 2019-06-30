<template>
  <img
    src="@/assets/logo.png"
    alt="Deep Through logo"
    class=""
  >
</template>
<script>
export default {
  props: {
    // Define logo size
    // small, mid, large
    size: {
      type: String,
      required: false,
      default: 'mid',
      validator: (value) => ['small', 'mid', 'large'].includes(value)
    }
  },
  beforeMount () {
  }
}
</script>
