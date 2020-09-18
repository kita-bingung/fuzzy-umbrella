<template>
  <div id="app">
    <router-view/>
    <footer>
      <div style="width: 100%; text-align: center;">
        <h6>&copy Fuzzy Umbrella Team ☂️</h6>
      </div>
    </footer>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 1.2rem;
}

h1 {
  font-weight: 500;
  /* color: rgb(120,120,120); */
  color: rgb(64,64,64);
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
}

h2 {
  font-weight: 400;
  color: rgb(64,64,64);
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
}

h3 {
  font-weight: 400;
  color: rgb(120,120,120);
}

h4 {
  font-weight: 300;
  color: rgb(64,64,64);
}

h6 {
  color: rgb(120,120,120);
}

p {
  font-size: 1.1rem;
}

.landing-container {
  width: 100vw;
  height: 89vh;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.landing-text {
  margin-bottom: 2rem;
}

.landing-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.landing-input {
  margin-bottom: 1rem;
  width: 450px;
  font-size: 2rem;
  outline: none;
  border: none;
  border-bottom: turquoise solid;
  border-bottom-width: 3px;
  transition: 0.2s;
  color: rgb(64,64,64);
  text-align: center;
}

.landing-input:hover, .landing-input:focus {
  border-bottom: rgb(137, 245, 234) solid;
}

::placeholder {
  color: lightgray;
}

button {
  outline: none;
  border: none;
  background-color: transparent;
  color: rgb(64,64,64);
}

.landing-button {
  font-size: 2rem;
}

.landing-button:hover {
  color: rgb(104,104,104);
  transition: 0.2s;
}

.landing-button:focus {
  outline: none;
}

.home-container {
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
}

.home-top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.link {
  color: rgb(64,64,64);
  text-decoration: none;
  font-size: 1.1rem;
}

.link:visited {
  text-decoration: none;
}

.link:hover {
  text-decoration: none;
  color: rgb(104,104,104);
}

.link2 {
  margin-left: 2rem;
}

.leaderboard-cont {
  width: 100vw;
  height: 84vh;
}

.leaderboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
}

.leaderboard-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
}

.leaderboard-each {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.leaderboard-text {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.user-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.score-container, .opponent-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.score {
  font-weight: 700;
  color: rgb(80,80,80);
  font-size: 1.5rem;
}

.game-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
}

.opponent {
  font-weight: 400;
  color: rgb(80,80,80);
  font-size: 1.5rem;
}

.done-container {
  width: 100vw;
  height: 84vh;
}

.statement {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.choices {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.announcement {
  font-size: 7rem;
}

.name {
  margin: 0;
}

.exit-game:hover {
  color: rgb(104,104,104);
  transition: 0.2s;
}

.exit-game:focus {
  outline: none;
}

</style>
