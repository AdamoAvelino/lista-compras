import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import routes from './router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(beforeEach)

export default router
