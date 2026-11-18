import { createRouter, createWebHistory } from 'vue-router'
import GuitarListView from '@/components/GuitarListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'guitarList',
      component : GuitarListView
    }
  ],
})

export default router
