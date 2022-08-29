<script>
import VClamp from 'vue-clamp'

export default {
  name: 'AuListItem',
  components: {
    VClamp
  },
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    description () {
      const parser = new DOMParser()
      const doc = parser.parseFromString(this.link.description, 'text/html')
      return doc.body.firstChild.nodeValue
    }
  }
}
</script>

<template>
  <div class="au-list-item">
    <div class="au-list-item__background">
      <img
        v-if="link.image_url"
        :src="link.image_url"
        :alt="link.title"
        class="au-list-item__background-image"
      >
      <img
        v-else
        src="https://picsum.photos/200/300"
        alt="No image"
        class="au-list-item__background-image"
      >
    </div>
    <div class="au-list-item__meta">
      <div class="au-list-item__title">
        {{ link.title }}
      </div>
      <v-clamp autoresize :max-lines="2" class="au-list-item__description">
        {{ description }}
      </v-clamp>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "AuListItem";
</style>
