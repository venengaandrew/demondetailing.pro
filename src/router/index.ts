import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: (Layout),
      children: [
        { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      ]

    },

  ]
})

export default router
