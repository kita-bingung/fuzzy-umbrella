<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" name="" placeholder="input your name" v-model="name" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      name: ''
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
    }
  }
}
</script>

<style>

</style>
