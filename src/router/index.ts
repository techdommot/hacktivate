import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { usePlayerStore } from '@/stores/playerStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { allowNewUser: true }
    },
    {
      path: '/waiver',
      name: 'waiver',
      component: () => import('../views/WaiverView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/booking/:gameId',
      name: 'booking',
      component: () => import('../views/BookingView.vue'),
      meta: { requiresAuth: true, requiresWaiver: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const playerStore = usePlayerStore()
  
  if (to.name === 'profile' && to.query.email) {
    next()
    return
  }

  if (to.meta.requiresAuth && !playerStore.currentPlayer) {
    next({ 
      name: 'login', 
      query: { redirect: to.fullPath }
    })
    return
  }

  if (to.meta.requiresWaiver && !playerStore.currentPlayer?.waiverSigned) {
    next({ name: 'waiver' })
    return
  }

  next()
})

export default router 