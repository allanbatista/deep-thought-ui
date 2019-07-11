<template>
  <header class='el-header h-16'>
    <nav class='flex items-center justify-between pt-3'>
      <ul>
        <li>
          <a href="/">
            <app-logo :white="true"></app-logo>
          </a>
        </li>
      </ul>
      <ul class='items-center flex'>
        <li class='ml-4'>
          <a
            class='text-white text-md'
            href=""
          >Questions</a>
        </li>
        <li class='ml-12'>
          <auth-user-avatar></auth-user-avatar>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import AppLogo from './AppLogo'
import AuthUserAvatar from './auth/AuthUserAvatar'

export default {
  components: {
    AppLogo,
    AuthUserAvatar
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
