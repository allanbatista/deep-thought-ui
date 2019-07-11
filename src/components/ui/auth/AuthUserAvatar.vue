<template>
  <base-image
    class='rounded-full'
    :size=size
    :src=authUser.avatarUrl
    :alt="`${authUser.email} Avatar`"
  ></base-image>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseImage from '@/components/ui/BaseImage'

export default {
  components: {
    BaseImage
  },
  props: ['size'],
  computed: mapGetters(['authUser'])
}
</script>
