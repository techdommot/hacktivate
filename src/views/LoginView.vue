<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto card hover-card relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-8 grid-rows-8 gap-1 h-full">
          <div v-for="n in 64" :key="n" class="bg-primary"></div>
        </div>
      </div>

      <div class="relative z-10">
        <h1 class="page-title flex items-center justify-center gap-3 mb-8">
          <span class="text-primary-light">🎮</span>
          <span>Player Login</span>
        </h1>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="form-group">
            <label class="form-label">Email</label>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                required
                class="input-field w-full pl-10"
                placeholder="Enter your email"
                :class="{ 'animate-shake': showError }"
              >
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-primary-light">
                @
              </span>
            </div>
          </div>

          <button 
            type="submit" 
            class="btn-primary w-full group relative overflow-hidden"
            :disabled="isLoading"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <span v-if="isLoading">Loading...</span>
              <span v-else>Continue</span>
              <span class="transform transition-transform group-hover:translate-x-1">→</span>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </form>

        <p class="mt-6 text-sm text-text-muted text-center">
          New player? We'll create your profile next
        </p>

        <!-- Loading Indicator -->
        <div v-if="isLoading" class="absolute inset-0 bg-background-card/50 flex items-center justify-center backdrop-blur-sm">
          <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'

const router = useRouter()
const route = useRoute()
const playerStore = usePlayerStore()
const email = ref('')
const isLoading = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true
    const existingPlayer = playerStore.findPlayerByEmail(email.value)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    if (existingPlayer) {
      playerStore.loginPlayer(existingPlayer)
      const redirectPath = route.query.redirect as string
      router.push(redirectPath || '/dashboard')
    } else {
      router.push({
        path: '/profile',
        query: { email: email.value }
      })
    }
  } catch (error) {
    console.error('Login error:', error)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 1000)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}

.input-field:focus {
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px #3B82F6, 0 0 10px #3B82F6, 0 0 15px #2563EB;
  }
  to {
    box-shadow: 0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 30px #2563EB;
  }
}
</style> 