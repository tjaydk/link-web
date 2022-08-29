<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AuList',
  computed: {
    ...mapState({
      links: state => state.link.index.items,
      linkLoading: state => state.link.index.loading,
      linkNoContent: state => state.link.index.noContent,
      linkError: state => state.link.index.error
    })
  },
  mounted () {
    this.getLinkIndex()
  },
  methods: {
    ...mapActions({
      getLinkIndex: 'link/getLinkIndex'
    }),
    refresh () {
      this.getLinkIndex()
    },
    goTo (url) {
      this.$router.push(url)
    }
  }
}
</script>

<template>
  <div class="au-list">
    <div v-if="!linkNoContent" id="au-list" class="au-list__items">
      <a v-for="link in links" :key="link.id" :href="link.url" target="_blank" class="au-list__item">
        <au-list-item :link="link" />
      </a>
      <div v-if="$auth.loggedIn" class="au-list__item au-list__item--ADD">
        <div class="au-list__item-icon" @click="$emit('create')">
          <font-awesome-icon icon="fa-plus-circle" />
        </div>
      </div>
    </div>
    <div v-else class="au-list__no-content">
      Ingen links
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "AuList";
</style>
