import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../src/views/Home'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: () => import('../src/views/ToDos')
    }
  ]
})
