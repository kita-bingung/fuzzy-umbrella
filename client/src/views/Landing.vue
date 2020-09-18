<template>
  <div class="landing-container">
    <div class="landing-content">
      <div class="landing-text">
        <h2>🌝🌸🌈 Hi there! 👀💫🍃</h2>
        <h1>Welcome to Emoji Land🤙🤪✨</h1>
        <h3>A place to just have fun and chill with friends</h3>
      </div>
      <div>
        <form @submit.prevent="toHome" class="landing-form">
          <input v-model="username" type="text" class="landing-input" placeholder="Write your username here">
          <button type="submit" class="landing-button">Let's play now!🃏</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style>

</style>
