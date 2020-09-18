import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    match: [],
    users: [],
    currentPlayer: {},
    counter: 0
  },
  getters: {
    allFlippedCards (state) {
      return state.cards.filter(card => card.matched === true)
    }
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.cards = payload
      console.log(payload, '<<<<<<<<<<<< ini payload')
    },
    SOCKET_userInitData (state, payload) {
      state.users = payload
      console.log(payload, '<<<<<<<<<<<<<<<<<<<<<, user init data')
      payload.forEach(i => {
        if (i.isPlay === true) state.currentPlayer = i
      })
    },
    SOCKET_fetchUserData (state, payload) {
      state.users = payload
      payload.forEach(i => {
        if (i.isPlay === true) state.currentPlayer = i
      })
    },
    SOCKET_updateCard (state, payload) {
      state.cards = payload
    },
    SOCKET_changeCurrentPlayer (state, payload) {
      state.currentPlayer = payload
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
          state.cards[item.index].isFlipped = false
        })
        state.users.forEach((user, i) => {
          if (user.isPlay === true) {
            if (i === state.users.length - 1) {
              state.currentPlayer = state.users[0]
              console.log(state.currentPlayer, 'ini if <<<<<')
            } else {
              state.currentPlayer = state.users[i + 1]
              console.log(state.currentPlayer, 'ini else <<<<<')
            }
          }
        })
        this._vm.$socket.emit('changeCurrentPlayer', state.currentPlayer)
        state.match = []
      } else {
        // state.match.forEach(item => {
        //   state.cards[item.index].matched = true
        // })
        state.counter++
        state.users.forEach(user => {
          if (user.name === localStorage.username) {
            user.score++
            this._vm.$socket.emit('updateScore', state.users)
          }
        })
        state.match = []
      }
    }
  },
  actions: {
    flipCard ({ state, commit, getters }, card) {
      if (state.match.length < 2) {
        commit('setFlipped', card)
      }
      setTimeout(() => {
        if (state.match.length === 2) {
          commit('resetMatch')
          this._vm.$socket.emit('updateCard', state.cards)
        }
      }, 2000)
    }
  },
  modules: {
  }
})
