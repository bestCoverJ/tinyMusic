import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/App.vue')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes
})

const router = createRouter()

export default router