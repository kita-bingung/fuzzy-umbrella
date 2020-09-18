<template>
  <div>
    <TestCard></TestCard>
    <h1>{{ username }}</h1>
    <p> current player : {{ currentPlayer.name }} </p>
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
  sockets: {
    // init: function (data) {
    //   console.log('masuk disini <<<<<<<<<<<<<<<<<<<<<<<<<')
    //   // this.$store.commit('setCards', data)
    // },
  },
  created () {
    this.username = localStorage.username
  },
  computed: {
    currentPlayer () {
      return this.$store.state.currentPlayer
    }
  },
  methods: {
    // getCurrentPlayer () {
    //   this.$socket.emit('getCurrentPlayer', this.$store.state.currentPlayer)
    // }
  }
}
</script>
