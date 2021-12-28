import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },

  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
