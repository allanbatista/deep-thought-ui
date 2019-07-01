<template>
  <img :class="this.$data[this.size]">
</template>
<script>
export default {
  data: function () {
    return {
      // Defined classes to assign size
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    }
  },
  props: {
    // Define logo size
    // small, mid, large
    size: {
      type: String,
      required: false,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  }
}
</script>
