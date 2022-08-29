<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AuForgot',
  data () {
    return {
      email: null,
      success: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.authorization.forgot.loading,
      error: state => state.authorization.forgot.error
    })
  },
  mounted () {
    this.success = this.$route.query.success || false
  },
  methods: {
    ...mapActions({
      forgotPassword: 'authorization/forgotPassword'
    }),
    async forgot () {
      await this.forgotPassword({
        email: this.email
      })
      if (!this.error) {
        await this.$router.push({
          path: this.$route.path,
          query: { success: 1 }
        })
        this.success = true
      }
    }
  }
}
</script>

<template>
  <div class="au-forgot">
    <div v-if="!success" class="au-forgot__content">
      <form class="au-forgot__form" @submit="forgot">
        <div class="au-forgot__header">
          Nulstil adgangskode
        </div>
        <div class="au-forgot__input-wrapper">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="au-forgot__input"
          >
          <div v-if="email" class="au-forgot__input-icon" @click="email = null">
            <font-awesome-icon icon="x" class="au-forgot__input-icon-svg" />
          </div>
        </div>
        <div class="au-forgot__controls">
          <au-button
            class="au-forgot__control-button"
            :disabled="!email"
            :loading="loading"
            @click="forgot"
          >
            Reset
          </au-button>
          <nuxt-link to="/login" class="au-forgot__control-link">
            Log ind her.
          </nuxt-link>
        </div>
      </form>
    </div>
    <div v-else class="au-forgot__content">
      <div class="au-forgot__body">
        <div class="au-forgot__header">
          Email sendt
        </div>
        <div class="au-forgot__description">
          Check din email for vejledning til at nulstille din adgangskode.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuForgot';
</style>
