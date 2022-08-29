import * as C from './constants'

export default {

  /**
   * @param commit
   * @param payload
   */
  async getLinkIndex ({ commit }, payload) {
    commit(C.LINK_INDEX_PENDING)
    await this.$axios.get('/link', payload)
      .then((res) => {
        if (res.status === 200) {
          commit(C.LINK_INDEX_SUCCESS, res.data)
        } else {
          commit(C.LINK_INDEX_NO_CONTENT)
        }
      }).catch((err) => {
        commit(C.LINK_INDEX_FAILURE, err.response.data.message)
      })
  }
}