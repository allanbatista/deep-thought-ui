<template>
  <el-container>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  beforeCreate () {
    document.getElementsByTagName('body')[0].classList.add('un-auth')
  }
}
</script>

<style>
.un-auth {
  background-color: #f6f6f6;
}
</style>
