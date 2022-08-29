<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  transition: 'test',
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState({
      auctions: state => state.auctions.index.items,
      auctionsLoading: state => state.auctions.index.loading,
      auctionsNoContent: state => state.auctions.index.noContent,
      auctionsError: state => state.auctions.index.error
    })
  },
  methods: {
    ...mapActions({
      getAuctionIndex: 'auctions/getAuctionIndex',
      resetAuctionIndex: 'auctions/resetAuctionIndex'
    })
  }
}
</script>

<template>
  <div class="camera-page">
    <div class="camera-page__content">
      Hello World
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "index";
</style>
