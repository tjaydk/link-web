import { set } from 'vue'
import * as C from './constants'

export default {

  /**
   * @param state
   */
  [C.LINK_INDEX_PENDING] (state) {
    set(state, 'index', {
      loading: true,
      error: null,
      noContent: false,
      items: []
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.LINK_INDEX_SUCCESS] (state, payload) {
    set(state, 'index', {
      loading: false,
      error: null,
      noContent: false,
      items: payload
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.LINK_INDEX_FAILURE] (state, payload) {
    set(state, 'index', {
      loading: false,
      error: payload,
      noContent: false,
      items: []
    })
  },

  /**
   * @param state
   */
  [C.LINK_INDEX_NO_CONTENT] (state) {
    set(state, 'index', {
      loading: false,
      error: false,
      noContent: true,
      items: []
    })
  }
}
