import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        title: 'MHW Damage Calculator',
      }
    }
  ]
})
