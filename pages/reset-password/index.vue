<script>
export default {
  name: 'ResetPasswordPage',
  auth: 'guest',
  data () {
    return {
      email: null,
      token: null
    }
  },
  mounted () {
    this.email = this.$route.query.email || null
    this.token = this.$route.query.token || null
  }
}
</script>

<template>
  <div class="forgot-password-page">
    <au-reset :email="email" :token="token" />
    <div class="forgot-password-page__background" />
  </div>
</template>

<style lang="scss" scoped>
@import 'index';
</style>
