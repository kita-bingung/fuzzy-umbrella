<template>
  <div>
    <div class="leaderboard-cont">
      <div class="home-container">
        <div class="home-top-bar">
          <div id="nav">
            <router-link class="link" :to="{ name: 'Home' }">🏡 Home</router-link>
            <router-link class="link link2" :to="{ name: 'Leaderboard' }">🏅 Leaderboard</router-link>
          </div>
        </div>
        <div class="not-found">
          <div class="statement">
            <div class="inside" style="text-align: center;">
              <h1>UH OH, 404 PAGE NOT FOUND ⏳</h1>
              <p class="fud nom">*nom nom*</p>
              <h2 class="fud">🍳🥯🥐🍕🍔🍟🥙🌮🍜🍣🍛🍦🍿🍮🍫🍭</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>