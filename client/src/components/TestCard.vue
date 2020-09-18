<template>
  <div class="row">
    <div class="mx-auto">
      <div class="row justify-content-md-center">
        <Card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          v-on:flipCard="flipCard"
        />
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
      // state.cards[payload.index].isFlipped = true
      newCards: [],
      match: []
    }
  },
  components: {
    Card
  },
  created () {
    this.fetchCards()
  },
  computed: {
    cards () {
      return this.$store.state.cards
    }
  },
  methods: {
    fetchCards () {
      this.$store.dispatch('fetchCards')
    },
    flipCard (card) {
      console.log(card)
      this.$store.dispatch('flipCard', card)
      // console.log(card)
      // card.isFlipped = true
      // this.match.push({
      //   index: this.cards.indexOf(card),
      //   card
      // })
      // if (this.match.length === 2) {
      //   if (this.match[0].card.code !== this.match[1].card.code) {
      //     setTimeout(() => {
      //       this.cards[this.match[0].index].isFlipped = false
      //       this.cards[this.match[1].index].isFlipped = false
      //       this.match = []
      //     }, 1000)
      //   } else {
      //     this.match = []
      //   }
      // }
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
