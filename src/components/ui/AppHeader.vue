<template>
  <el-header>
    <nav class='flex items-center justify-between pt-4'>
      <ul>
        <li>
          <a href="/">
            <app-logo :white="true"></app-logo>
          </a>
        </li>
      </ul>
      <ul class='items-center flex'>
        <li class='ml-4'>
          <a class='text-white font-bold text-lg' href="">Questions</a>
        </li>
        <li class='ml-12'>
          <auth-avatar></auth-avatar>
        </li>
      </ul>
    </nav>
  </el-header>
</template>
<script>
import AppLogo from './AppLogo'
import AuthAvatar from './auth/AuthAvatar'

export default {
  components: {
    AppLogo,
    AuthAvatar
  }
}
</script>

<style scoped>
header {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#553c9a),
    to(#b0a4d1)
  );
  background: -webkit-linear-gradient(left, #553c9a, #b0a4d1);
  background: -o-linear-gradient(left, #553c9a, #b0a4d1);
  background: linear-gradient(to right, #553c9a, #b0a4d1);
}
</style>
