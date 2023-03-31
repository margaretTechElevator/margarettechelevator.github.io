import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Print from '../views/Print.vue'
import Count from '../views/Count.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/home',
    alias: '/',
    component: Home
  },

  
  {
    path: '/print',
    name: 'Print',
    component: Print
  },

  {
    path: '/count',
    name: 'Count',
    component: Count
  },

  {
    path: "*",
    redirect: "/",
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
