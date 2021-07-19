import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import todo from '../views/todo.vue'
import clientList from '../views/clientList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo
  },
  {
    path: '/clientList',
    name: 'client',
    component: clientList
  }
]

const router = new VueRouter({
  routes
})

export default router
