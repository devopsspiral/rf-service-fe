import Vue from 'vue'
import VueRouter from 'vue-router'
import Runner from '../views/Runner.vue'
import Results from '../views/Results.vue'
import Config from '../views/Config.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Runner',
    component: Runner
  },
  {
    path: '/config',
    name: 'Config',
    component: Config
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
]

const router = new VueRouter({
  routes
})

export default router
