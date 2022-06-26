import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/fm',
    name: 'Fm',
    component: () => import('@/views/fm.vue')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes
})

const router = createRouter()

export default router
