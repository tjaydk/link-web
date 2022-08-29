import * as C from './constants'

export default {

  /**
   * @param commit
   * @param payload
   */
  async getLinkIndex ({ commit }) {
    commit(C.LINK_INDEX_PENDING)
    await this.$axios.get('/link', {
      baseURL: process.env.PUBLIC_URL
    })
      .then((res) => {
        if (res.status === 200) {
          commit(C.LINK_INDEX_SUCCESS, res.data)
        } else {
          commit(C.LINK_INDEX_NO_CONTENT)
        }
      }).catch((err) => {
        commit(C.LINK_INDEX_FAILURE, err.response.data.message)
      })
  },

  /**
   * @param commit
   * @param url
   */
  async createLink ({ commit }, { url }) {
    commit(C.LINK_CREATE_PENDING)
    await this.$axios.post('/link', {
      url
    })
      .then((res) => {
        commit(C.LINK_CREATE_SUCCESS, res.data)
      }).catch((err) => {
        commit(C.LINK_CREATE_FAILURE, err.response.data.message)
      })
  }
}
