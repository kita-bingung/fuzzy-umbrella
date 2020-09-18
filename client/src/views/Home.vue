<template>
  <div class="home-container">
    <div class="home-top-bar">
      <div id="nav">
        <router-link class="link" :to="{ name: 'Home' }">🏡 Home</router-link>
        <router-link class="link link2" :to="{ name: 'Leaderboard' }">🏅 Leaderboard</router-link>
      </div>
      <div>
        <p class="name">👤 NAME</p>
        <button @click="exit" class="exit-game" type="button">Exit Game</button>
      </div>
    </div>
    <div class="game-container">
      <h1 class="game-on">🎮 GAME ON 🕹</h1>
    </div>
    <div class="user-bar">
      <div class="score-container">
        <h2 class="score">Score: 980</h2>
      </div>
      <div class="opponent-container">
        <h2 class="opponent">⛄️ You're competing: Sam</h2>
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
  components: {
    TestCard
  },
  methods: {
    exit () {
      localStorage.clear()
      this.$router.push({ name: 'Landing' })
    }
  }
}
</script>

<style>
  
</style>