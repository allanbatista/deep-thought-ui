<template>
  <el-button
    type='default'
    class='g-btn btn--block'
  >
    <div class='g-btn__wrapper'>
      <img
        class='g-btn__icon'
        src="@/assets/icons/google-icon.svg"
      >
      <span class='g-btn__text'>
        Sing In with Google
      </span>
    </div>
  </el-button>
</template>

<style lang='scss'>
.g-btn {
  &__wrapper {
    padding: 5px 10px 2px 10px;
  }
  &__icon {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
  &__text {
    font-size: 16px;
    margin-left: 30px;
  }
}
</style>
