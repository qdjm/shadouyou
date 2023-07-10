import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/page',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/',
    redirect: '/page'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router