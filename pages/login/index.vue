<script>
export default {
  name: 'LoginPage',
  auth: 'guest',
  transition: 'test',
  data () {
    return {
      toggled: false
    }
  }
}
</script>

<template>
  <div class="login-page">
    <au-login />
    <div class="login-page__background" />
  </div>
</template>

<style lang="scss" scoped>
@import "index";
</style>
