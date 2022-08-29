<script>
export default {
  name: 'AuNavigation',
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<template>
  <div class="au-navigation">
    <div class="au-navigation__column">
      <nuxt-link to="/" class="au-navigation__logo-wrapper">
        <span class="au-navigation__icon">
          <img src="~assets/images/logored2.svg" alt="" height="70" width="70">
        </span>
        <span class="au-navigation__logo">
          Auktionsarkivet.dk
        </span>
      </nuxt-link>
    </div>
    <div v-if="$auth.loggedIn" class="au-navigation__column">
      <div class="au-navigation__links">
        <nuxt-link to="/search" class="au-navigation__link">
          Arkiv
        </nuxt-link>
      </div>
    </div>
    <div class="au-navigation__column">
      <au-button v-if="!$auth.loggedIn && $route.path !== '/login'" to="/login">
        Få adgang nu
      </au-button>
      <au-button v-else-if="$route.path !== '/login'" @click="$auth.logout()">
        Log ud
      </au-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuNavigation';
</style>
