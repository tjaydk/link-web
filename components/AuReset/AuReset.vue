<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AuReset',
  props: {
    token: {
      type: String,
      default: null
    },
    email: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      password: null,
      password_confirmation: null,
      showPass: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.authorization.reset.loading,
      error: state => state.authorization.reset.error
    })
  },
  mounted () {
    this.success = this.$route.query.success || false
  },
  methods: {
    ...mapActions({
      resetPassword: 'authorization/resetPassword'
    }),
    async reset () {
      await this.resetPassword({
        email: this.email,
        token: this.token,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      if (!this.error) {
        await this.$router.push('login')
      }
    }
  }
}
</script>

<template>
  <div class="au-forgot">
    <div class="au-forgot__content">
      <form class="au-forgot__form" @submit="reset">
        <div class="au-forgot__header">
          Nulstil adgangskode
        </div>
        <div class="au-forgot__input-wrapper au-forgot__input-wrapper--HIDDEN">
          <input
            :value="email"
            type="text"
            class="au-forgot__input"
            disabled
          >
        </div>
        <div class="au-forgot__input-wrapper au-forgot__input-wrapper--HIDDEN">
          <input
            :value="token"
            type="text"
            class="au-forgot__input"
            disabled
          >
        </div>
        <div class="au-forgot__input-wrapper">
          <input
            v-model="password"
            :type="showPass ? 'text' : 'password'"
            placeholder="Adgangskode"
            class="au-forgot__input"
          >
          <div class="au-forgot__input-icon" @click="showPass = !showPass">
            <font-awesome-icon v-show="showPass" icon="eye" class="au-forgot__input-icon-svg" />
            <font-awesome-icon v-show="!showPass" icon="eye-slash" class="au-forgot__input-icon-svg" />
          </div>
        </div>
        <div class="au-forgot__input-wrapper">
          <input
            v-model="password_confirmation"
            :type="showPass ? 'text' : 'password'"
            placeholder="Gentag adgangskode"
            class="au-forgot__input"
          >
        </div>
        <div v-if="error" class="au-forgot__error-wrapper">
          <div class="au-forgot__error">
            Forkerte login oplysninger
          </div>
        </div>
        <div class="au-forgot__controls">
          <au-button
            class="au-forgot__control-button"
            :disabled="!email"
            :loading="loading"
            @click="reset"
          >
            Reset
          </au-button>
          <nuxt-link to="/login" class="au-forgot__control-link">
            Log ind her.
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuReset';
</style>
