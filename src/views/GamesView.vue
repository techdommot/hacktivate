<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="page-title text-center flex items-center justify-center gap-3 mb-12">
      <span class="text-primary-light">🎲</span>
      <span>Available Games</span>
    </h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="game in games" 
        :key="game.id" 
        class="card hover-card group relative overflow-hidden"
      >
        <!-- Image Container with Overlay -->
        <div class="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
          <img 
            :src="game.imageUrl" 
            :alt="game.name" 
            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-background-card to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4">
            <h2 class="text-xl font-bold text-text">{{ game.name }}</h2>
          </div>
        </div>

        <!-- Game Details -->
        <div class="space-y-4">
          <p class="text-text-muted">{{ game.description }}</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-background-light p-3 rounded-lg text-center">
              <p class="text-text-muted text-sm">Price</p>
              <p class="text-primary-light font-bold">${{ game.pricePerPerson }}/person</p>
            </div>
            <div class="bg-background-light p-3 rounded-lg text-center">
              <p class="text-text-muted text-sm">Duration</p>
              <p class="text-text font-bold">{{ game.duration }} min</p>
            </div>
          </div>

          <div class="bg-background-light p-3 rounded-lg space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-text-muted text-sm">Players Required</span>
              <span class="text-text font-medium">
                {{ game.minPlayers }}-{{ game.maxPlayers }} players
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-muted text-sm">Available Slots</span>
              <span :class="[
                'font-medium',
                game.availableSlots > 5 ? 'text-success' : 
                game.availableSlots > 2 ? 'text-warning' : 'text-error'
              ]">
                {{ game.availableSlots }} slots
              </span>
            </div>
          </div>

          <!-- Book Now Button -->
          <button 
            type="button"
            @click="handleBookClick(game.id)"
            class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            :class="{ 'opacity-50 cursor-not-allowed': game.availableSlots === 0 }"
            :disabled="game.availableSlots === 0"
          >
            <span>{{ game.availableSlots === 0 ? 'Fully Booked' : 'Book Now' }}</span>
            <span v-if="game.availableSlots > 0" class="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        <!-- Status Badge -->
        <div class="absolute top-2 right-2 bg-background-light/50 backdrop-blur-sm px-2 py-1 rounded-full">
          <div class="flex items-center gap-1">
            <span v-if="game.availableSlots === 0" class="text-error">🔒</span>
            <span v-else-if="game.availableSlots <= 5" class="text-warning">⚡</span>
            <span v-else class="text-success">✓</span>
            <span class="text-text-muted text-sm">
              {{ 
                game.availableSlots === 0 ? 'Fully Booked' :
                game.availableSlots <= 5 ? 'Limited Slots' : 'Available'
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookingStore } from '@/stores/bookingStore'
import { usePlayerStore } from '@/stores/playerStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const bookingStore = useBookingStore()
const playerStore = usePlayerStore()
const games = bookingStore.games

function handleBookClick(gameId: number) {
  console.log('Booking game:', gameId)
  try {
    router.push(`/booking/${gameId}`)
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>

<style scoped>

</style> 