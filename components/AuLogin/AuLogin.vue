<script>
export default {
  name: 'AuLogin',
  data () {
    return {
      email: null,
      password: null,
      error: null,
      showPass: false,
      loading: false
    }
  },
  methods: {
    login () {
      this.error = null
      this.loading = true
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then(() => {
        this.$auth.refreshTokens()
        this.loading = false
      }).catch((err) => {
        this.error = err.response.status
        this.loading = false
      })
    }
  }
}
</script>

<template>
  <div class="au-login">
    <div class="au-login__content">
      <div class="au-login__logo">
        <img src="~assets/images/logored2.svg" alt="" height="140" width="140" class="au-login__logo-image">
      </div>
      <form class="au-login__form" @submit="login">
        <h1 class="au-login__header">
          Lykkeriddernes Kamp
        </h1>
        <div class="au-login__sub-header">
          Log ind
        </div>
        <div class="au-login__input-wrapper">
          <au-input
            v-model="email"
            type="email"
            placeholder="Email"
            class="au-login__input"
            clearable
            :disabled="loading"
          />
        </div>
        <div class="au-login__input-wrapper">
          <au-input
            v-model="password"
            :type="showPass ? 'text' : 'password'"
            placeholder="Adgangskode"
            :disabled="loading"
          />
        </div>
        <div v-if="error" class="au-login__error-wrapper">
          <div class="au-login__error">
            Forkerte login oplysninger
          </div>
        </div>
        <div class="au-login__controls">
          <au-button
            class="au-login__control-button"
            type="indicator"
            :loading="loading"
            :disabled="!email || !password"
            @click="login"
          >
            Log ind
          </au-button>
          <nuxt-link to="/forgot-password" class="au-login__control-link">
            Glemt adgangskode
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuLogin';
</style>
