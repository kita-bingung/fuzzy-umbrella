<template>
  <div class="row">
    <div class="mx-auto">
      <div class="row justify-content-md-center">
        <div v-for="(card, i) in cards" :key="i" class="col-auto mb-3 flip-container" :class="{ 'flipped': card.isFlipped }" @click="flipCard (card)">
          <div class="memorycard">
            <div class="front border rounded shadow"><img width="100" height="150" src="/assets/images/memorycard/pattern3.jpeg"></div>
            <div class="back rounded border"><img width="100" height="150" src="'/assets/images/memorycard/test.jpeg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'TestCard',
  data () {
    return {
      cards: [
        {
          name: 'Apple',
          img: 'apple.gif'
        },
        {
          name: 'Banana',
          img: 'banana.gif'
        },
        {
          name: 'Orange',
          img: 'orange.jpg'
        },
        {
          name: 'Pineapple',
          img: 'pineapple.png'
        },
        {
          name: 'Strawberry',
          img: 'strawberry.png'
        },
        {
          name: 'watermelon',
          img: 'watermelon.jpg'
        },
        {
          name: 'Apple',
          img: 'apple.gif'
        },
        {
          name: 'Banana',
          img: 'banana.gif'
        },
        {
          name: 'Orange',
          img: 'orange.jpg'
        },
        {
          name: 'Pineapple',
          img: 'pineapple.png'
        },
        {
          name: 'Strawberry',
          img: 'strawberry.png'
        },
        {
          name: 'watermelon',
          img: 'watermelon.jpg'
        }
      ],
      match: []
    }
  },
  created () {
    this.cards.forEach((card) => {
      Vue.set(card, 'isFlipped', false)
    })
  },
  methods: {
    flipCard (card) {
      card.isFlipped = true
      this.match.push({
        index: this.cards.indexOf(card),
        card
      })
      if (this.match.length === 2) {
        if (this.match[0].card.name !== this.match[1].card.name) {
          setTimeout(() => {
            this.cards[this.match[0].index].isFlipped = false
            this.cards[this.match[1].index].isFlipped = false
            this.match = []
          }, 2000)
        } else {
          this.match = []
        }
      }
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
