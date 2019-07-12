<template>
  <a
    class='el-button el-button--default w-full'
    :href="this.authSingInUrl"
  >
    <div class='flex items-center p-2 justify-center'>
      <img
        class='h-6 w-6 mr-12'
        src="@/assets/icons/google-icon.svg"
      >
      <span class='text-md font-normal'>
        Sing In with Google
      </span>
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['authSingInUrl'])
}
</script>
