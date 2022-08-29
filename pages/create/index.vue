<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CreatePate',
  data () {
    return {
      url: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => state.link.create.loading,
      error: state => state.link.create.error
    })
  },
  methods: {
    ...mapActions({
      createLink: 'link/createLink'
    }),
    async create () {
      await this.createLink({
        url: this.url
      })
      if (!this.error) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<template>
  <div class="create-page">
    <div class="create-page__content">
      <h1 class="create-page__header">
        Create link
      </h1>
      <div v-if="error" class="create-page__error">
        Url invalid, try another!
      </div>
      <au-input v-model="url" type="url" class="create-page__input" />
      <au-button class="create-page__button" :disabled="!url" @click="create">
        Create
      </au-button>
      <div class="create-page__button-back" @click="$router.push('/')">
        Back
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'index';
</style>
