import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import NotFound from '../views/NotFound.vue'
import Leaderboard from '../views/Leaderboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/play',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
      }
    ]
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!localStorage.username && to.name !== 'Login') next({ name: 'Login' })
//   else next()
// })

export default router
