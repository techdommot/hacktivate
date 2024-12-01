<template>
  <div class="min-h-screen flex flex-col bg-background">
    <header class="bg-background-card border-b border-border/50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <RouterLink to="/" class="text-2xl font-bold flex items-center space-x-3 group">
            <span class="text-primary-light transform transition-transform group-hover:scale-110">⚡</span>
            <span class="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Hacktivate
            </span>
          </RouterLink>
          
          <div class="flex items-center space-x-6">
            <RouterLink 
              to="/games" 
              class="nav-link relative group"
            >
              <span>Games</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
            
            <template v-if="playerStore.currentPlayer">
              <RouterLink 
                to="/dashboard" 
                class="nav-link relative group"
              >
                <span>Dashboard</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
              </RouterLink>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-text-muted">
                  {{ playerStore.currentPlayer.username }}
                </span>
                <button 
                  @click="handleLogout"
                  class="text-sm text-text-muted hover:text-primary-light transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            </template>
            
            <template v-else>
              <RouterLink 
                to="/login" 
                class="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Sign In
              </RouterLink>
            </template>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="bg-background-card border-t border-border/50 py-6">
      <div class="container mx-auto px-4 text-center text-text-muted">
        <p>&copy; 2024 Hacktivate. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'

const router = useRouter()
const playerStore = usePlayerStore()

const handleLogout = () => {
  playerStore.logout()
  router.push('/')
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style> 