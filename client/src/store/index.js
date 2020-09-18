import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    match: []
  },
  mutations: {
    setCards (state, payload) {
      state.cards = payload
    },
    setFlipped (state, card) {
      state.cards[state.cards.indexOf(card)].isFlipped = true
      state.match.push({
        index: state.cards.indexOf(card),
        card
      })
    },
    resetMatch (state) {
      if (state.match[0].card.code !== state.match[1].card.code) {
        state.match.forEach(item => {
          console.log(item.index)
          state.cards[item.index].isFlipped = false
        })
      }
      state.match = []
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
    },
    flipCard ({ state, commit }, card) {
      if (state.match.length < 2) {
        commit('setFlipped', card)
      }
      setTimeout(() => {
        if (state.match.length === 2) {
          commit('resetMatch')
        }
      }, 2000)
    }
  },
  modules: {
  }
})
