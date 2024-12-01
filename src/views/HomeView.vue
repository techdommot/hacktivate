<template>
  <main class="container mx-auto px-4 py-12">
    <div class="text-center mb-16 space-y-6">
      <h1 class="text-5xl font-bold mb-4 animate-fade-in">
        <span class="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Welcome to Hacktivate
        </span>
      </h1>
      <p class="text-xl text-text-muted mb-8 animate-fade-in-delay">
        Experience thrilling escape rooms and mysteries!
      </p>
      <div class="space-x-4 animate-fade-in-delay-2">
        <RouterLink 
          v-if="!playerStore.currentPlayer"
          to="/login" 
          class="btn-primary inline-flex items-center space-x-2 group"
        >
          <span>Get Started</span>
          <span class="transform transition-transform group-hover:translate-x-1">→</span>
        </RouterLink>
        <RouterLink 
          to="/games" 
          class="btn-secondary inline-flex items-center space-x-2 group"
        >
          <span>Browse Games</span>
          <span class="transform transition-transform group-hover:translate-x-1">→</span>
        </RouterLink>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="card hover-card group">
        <h2 class="section-title flex items-center space-x-3">
          <span class="text-primary-light">🎲</span>
          <span>How it Works</span>
        </h2>
        <ul class="space-y-6">
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="bg-primary text-text rounded-full w-8 h-8 flex items-center justify-center mr-3 group-hover:animate-pulse">1</span>
            <span class="text-text-muted">Create your player profile</span>
          </li>
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="bg-primary text-text rounded-full w-8 h-8 flex items-center justify-center mr-3 group-hover:animate-pulse">2</span>
            <span class="text-text-muted">Sign the digital waiver</span>
          </li>
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="bg-primary text-text rounded-full w-8 h-8 flex items-center justify-center mr-3 group-hover:animate-pulse">3</span>
            <span class="text-text-muted">Book your game (2-5 players)</span>
          </li>
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="bg-primary text-text rounded-full w-8 h-8 flex items-center justify-center mr-3 group-hover:animate-pulse">4</span>
            <span class="text-text-muted">Pay 10% deposit online</span>
          </li>
        </ul>
      </div>

      <div class="card hover-card">
        <h2 class="section-title flex items-center space-x-3">
          <span class="text-primary-light">🏆</span>
          <span>Why Choose Us</span>
        </h2>
        <ul class="space-y-6">
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="text-primary-light mr-3">✓</span>
            <span class="text-text-muted">Exciting game scenarios</span>
          </li>
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="text-primary-light mr-3">✓</span>
            <span class="text-text-muted">Earn points for rewards</span>
          </li>
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="text-primary-light mr-3">✓</span>
            <span class="text-text-muted">Flexible booking options</span>
          </li>
          <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
            <span class="text-primary-light mr-3">✓</span>
            <span class="text-text-muted">Professional game masters</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'

const playerStore = usePlayerStore()
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.4s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 