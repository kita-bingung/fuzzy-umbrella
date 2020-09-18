<template>
  <div>
    <router-view></router-view>
    <TestCard></TestCard>
  </div>
</template>

<script>
// @ is an alias to /src
import TestCard from '../components/TestCard.vue'
export default {
  name: 'Home',
  components: {
    TestCard
  }
}
</script>
