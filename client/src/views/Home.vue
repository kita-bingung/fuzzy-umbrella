<template>
  <div class="home-container">
    <div class="home-top-bar">
      <div id="nav">
        <router-link class="link" :to="{ name: 'Home' }">🏡 Home</router-link>
        <router-link class="link link2" :to="{ name: 'Leaderboard' }">🏅 Leaderboard</router-link>
      </div>
      <div>
        <p class="name">👤 {{ username }}</p>
        <button @click="exit" class="exit-game" type="button">Exit Game</button>
      </div>
    </div>
    <div class="game-container">
      <h1 class="game-on">🎮 GAME ON 🕹</h1>
    </div>
    <div class="user-bar">
      <div class="score-container">
        <h2 class="score">Score: 980  🎲 <span style="font-weight: 300">{{ currentPlayer.name }} playing...</span></h2>
      </div>
      <div class="score-container">
        
      </div>
      <div class="opponent-container">
        <h2 class="opponent">⛄️ You're competing: NAME2</h2>
      </div>
    </div>
    <TestCard></TestCard>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TestCard from '../components/TestCard.vue'

export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  components: {
    TestCard
  },
  methods: {
    exit () {
      localStorage.clear()
      this.$router.push({ name: 'Landing' })
    }
  },
  // sockets: {
  //   // init: function (data) {
  //   //   console.log('masuk disini <<<<<<<<<<<<<<<<<<<<<<<<<')
  //   //   // this.$store.commit('setCards', data)
  //   // },
  // },
  created () {
    this.username = localStorage.username
  },
  computed: {
    currentPlayer () {
      return this.$store.state.currentPlayer
    }
  }
}
</script>

<style>
  
</style>