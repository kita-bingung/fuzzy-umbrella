<template>
  <div class="landing-container">
    <div class="landing-content">
      <div class="landing-text">
        <h2>🌝🌸🌈 Hi there! 👀💫🍃</h2>
        <h1>Welcome to Emoji Land🤙🤪✨</h1>
        <h3>A place to just have fun and chill with friends</h3>
      </div>
      <div>
        <form @submit.prevent="login" class="landing-form">
          <input v-model="name" type="text" class="landing-input" placeholder="Write your username here">
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
    login () {
      this.$router.push({ name: 'Home' })
      const payload = {
        name: this.name,
        score: 0
      }
      localStorage.setItem('username', this.name)
      this.$socket.emit('userInitData', payload)
    },
    toHome () {
      this.$router.push({ name: 'Home' });
      name: ''
    }
  }
}
</script>

<style>

</style>
