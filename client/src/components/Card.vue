<template>
  <div class="col-auto mb-3 flip-container" :class="{ 'flipped': card.isFlipped }" @click="flipCard (card)">
    <div class="memorycard">
      <div class="front border rounded shadow"><img width="100" height="150" src="../assets/cat-shock.png"></div>
      <div class="back rounded border"><img width="100" height="150" :src="card.imageUrl"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  methods: {
    flipCard (data) {
      this.$emit('flipCard', data)
    }
  }
}
</script>

<style>

</style>
