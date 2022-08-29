<script>
export default {
  name: 'IndexPage',
  transition: 'test'
}
</script>

<template>
  <div class="index-page">
    <div class="index-page__content">
      <div v-if="$auth.loggedIn" class="index-page__login" @click="$auth.logout()">
        Logout
      </div>
      <div v-else class="index-page__login" @click="$router.push('/login')">
        Login
      </div>
      <au-list @create="$router.push('/create')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "index";
</style>
