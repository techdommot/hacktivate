<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Greeting Section -->
    <div class="card mb-8 bg-gradient-to-r from-background-card to-background-light border-primary/10">
      <div class="flex items-start justify-between">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold text-text flex items-center gap-3">
            <span class="text-primary-light">{{ getGreetingEmoji() }}</span>
            <span>{{ greeting }}</span>
            <span class="text-primary-light">{{ playerStore.currentPlayer?.username }}</span>
          </h1>
          <p class="text-text-muted">
            {{ getRandomMessage() }}
          </p>
          <div class="flex items-center gap-2 mt-4">
            <span class="badge-primary">
              {{ playerStore.currentPlayer?.points }} Points
            </span>
            <span class="text-text-muted">•</span>
            <span class="text-text-muted">
              Level {{ Math.floor((playerStore.currentPlayer?.points || 0) / 100) + 1 }}
            </span>
          </div>
        </div>
        <div class="animate-pulse">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span class="text-2xl">🎮</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Player Profile Card -->
      <div class="lg:col-span-1">
        <div class="card hover-card space-y-6">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="text-2xl">👤</span>
            </div>
            <div>
              <h2 class="text-xl font-bold text-text">{{ playerStore.currentPlayer?.username }}</h2>
              <p class="text-text-muted">Player Profile</p>
            </div>
          </div>

          <div class="space-y-4 pt-4 border-t border-border/50">
            <div>
              <p class="text-text-muted text-sm">Email</p>
              <p class="text-text">{{ playerStore.currentPlayer?.email }}</p>
            </div>
            <div>
              <p class="text-text-muted text-sm">Phone</p>
              <p class="text-text">{{ playerStore.currentPlayer?.phone }}</p>
            </div>
            <div class="bg-background-light p-4 rounded-lg">
              <div class="flex justify-between items-center">
                <span class="text-text-muted">Points Balance</span>
                <span class="text-2xl font-bold text-primary-light">
                  {{ playerStore.currentPlayer?.points }}
                </span>
              </div>
              <div class="mt-2 text-sm text-text-muted">
                Level {{ Math.floor((playerStore.currentPlayer?.points || 0) / 100) + 1 }} Hacker
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bookings Section -->
      <div class="lg:col-span-2 space-y-6">
        <h2 class="section-title">Your Missions</h2>
        
        <div class="space-y-4">
          <div 
            v-for="booking in playerBookings" 
            :key="booking.id"
            class="card hover-card group"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="space-y-1">
                <h3 class="font-semibold text-lg text-text">{{ getGameName(booking) }}</h3>
                <p class="text-text-muted flex items-center gap-2">
                  <span>📅 {{ formatDate(booking.date) }}</span>
                  <span>⏰ {{ booking.time }}</span>
                </p>
              </div>
              <span 
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium',
                  statusClasses[booking.status]
                ]"
              >
                {{ booking.status }}
              </span>
            </div>

            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div class="bg-background-light p-3 rounded-lg">
                <p class="text-text-muted">Players</p>
                <p class="text-text font-medium">{{ booking.numberOfPlayers }}</p>
              </div>
              <div class="bg-background-light p-3 rounded-lg">
                <p class="text-text-muted">Total Amount</p>
                <p class="text-text font-medium">${{ booking.totalAmount }}</p>
              </div>
              <div class="bg-background-light p-3 rounded-lg">
                <p class="text-text-muted">Payment Status</p>
                <p class="text-primary-light font-medium">
                  {{ formatPaymentStatus(booking.paymentStatus) }}
                </p>
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
              <p class="text-text-muted text-sm">
                Balance Due: ${{ booking.totalAmount - booking.depositAmount }}
              </p>
              <button 
                v-if="booking.paymentStatus === 'deposit_paid'"
                class="btn-secondary text-sm"
              >
                Pay Balance
              </button>
            </div>
          </div>

          <!-- Empty State -->
          <div 
            v-if="playerBookings.length === 0"
            class="card text-center py-12"
          >
            <p class="text-text-muted mb-4">No missions booked yet</p>
            <RouterLink 
              to="/games"
              class="btn-primary inline-flex items-center space-x-2"
            >
              <span>Browse Missions</span>
              <span>→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'
import { useBookingStore } from '@/stores/bookingStore'
import type { Booking } from '@/types'

const playerStore = usePlayerStore()
const bookingStore = useBookingStore()

// Get time-based greeting
const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
})

// Fun greeting emoji based on time
const getGreetingEmoji = () => {
  const hour = new Date().getHours()
  if (hour < 6) return "🌙"
  if (hour < 12) return "☀️"
  if (hour < 17) return "⚡"
  if (hour < 22) return "🌟"
  return "🌙"
}

// Random fun messages
const getRandomMessage = () => {
  const messages = [
    "Ready to hack the system?",
    "Your next mission awaits!",
    "Time to level up your game!",
    "The matrix has been waiting for you...",
    "Hack the planet! 🌍",
    "System breach imminent...",
    "Loading next challenge...",
    "Your hacking skills are needed!",
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}

const playerBookings = computed(() => {
  if (!playerStore.currentPlayer) return []
  return bookingStore.bookings.filter(
    booking => booking.playerId === playerStore.currentPlayer?.id
  )
})

const statusClasses = {
  pending: 'bg-warning/10 text-warning border border-warning/20',
  confirmed: 'bg-primary/10 text-primary-light border border-primary/20',
  completed: 'bg-success/10 text-success border border-success/20'
}

const getGameName = (booking: Booking) => {
  const game = bookingStore.games.find(
    game => booking.gameId === game.id
  )
  return game?.name || 'Unknown Mission'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatPaymentStatus = (status: string) => {
  return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
}
</script> 