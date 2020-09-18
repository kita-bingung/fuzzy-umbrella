import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    setCards (state, payload) {
      state.cards = payload
    }
  },
  actions: {
    fetchCards ({ commit }) {
      axios({
        method: 'get',
        url: '/cards'
      })
        .then(({ data }) => {
          data.forEach(i => {
            i.isFlipped = false
          })
          commit('setCards', data)
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
