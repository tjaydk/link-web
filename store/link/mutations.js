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
  },

  /**
   * @param state
   */
  [C.LINK_CREATE_PENDING] (state) {
    set(state, 'create', {
      loading: true,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.LINK_CREATE_SUCCESS] (state, payload) {
    set(state, 'create', {
      loading: false,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.LINK_CREATE_FAILURE] (state, payload) {
    set(state, 'create', {
      loading: false,
      error: payload
    })
  }
}
