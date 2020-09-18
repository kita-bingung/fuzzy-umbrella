<template>
  <div class="done-container">
    <div class="home-container">
      <div class="home-top-bar">
        <div id="nav">
          <router-link class="link" :to="{ name: 'Home' }">🏡 Home</router-link>
          <router-link class="link link2" :to="{ name: 'Leaderboard' }">🏅 Leaderboard</router-link>
        </div>
      </div>
    </div>
    <div class="statement">
      <div class="choices">
        <h1 hidden class="announcement">🌟 You Win! 🎉</h1>
        <h1 class="announcement">🥴 You Lose 😫</h1>
        <button @click="toHome" class="landing-button" type="button">Want to play again? 🧸</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WinLose',
  methods: {
    toHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>