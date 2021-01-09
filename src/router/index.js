import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import graph from "@/components/graph";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/graph',
    name: 'Graphs',
    component: graph
  }
]

const router = new VueRouter({
  routes
})

export default router
