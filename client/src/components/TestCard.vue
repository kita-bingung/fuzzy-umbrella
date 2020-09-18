<template>
  <div class="row">
    <div class="mx-auto">
      <div class="row justify-content-md-center">
        <Card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          v-on:flipCard="flipCard"
        />{{ users }}
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'TestCard',
  data () {
    return {
      newCards: [],
      match: []
    }
  },
  components: {
    Card
  },
  sockets: {
    // init: function (data) {
    //   // this.$store.commit('setCards', data)
    // }
  },
  computed: {
    cards () {
      return this.$store.state.cards
    },
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    flipCard (card) {
      this.$store.dispatch('flipCard', card)
      this.$socket.emit('updateCard', this.$store.state.cards)
    }
  }
}
</script>

<style>
.flip-container {
  perspective: 1000;
  min-height: 120px;
  cursor: pointer;
}
.front,
.back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
}
.back {
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  transform: rotateY(180deg);
}
</style>
