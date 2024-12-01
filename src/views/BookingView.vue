<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto card">
      <h1 class="page-title flex items-center justify-center gap-3">
        <span class="text-primary-light">🎲</span>
        <span>Book {{ game?.name }}</span>
      </h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input
            type="date"
            v-model="formData.date"
            required
            class="input-field w-full appearance-none"
            :min="today"
            :class="{'cursor-pointer': true}"
            style="color-scheme: dark;"
          >
        </div>

        <div class="form-group">
          <label class="form-label">Time</label>
          <select
            v-model="formData.time"
            required
            class="input-field w-full"
          >
            <option value="" disabled>Select a time</option>
            <option v-for="time in availableTimes" :key="time" :value="time">
              {{ time }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Number of Players</label>
          <select
            v-model="formData.numberOfPlayers"
            required
            class="input-field w-full"
          >
            <option value="" disabled>Select number of players</option>
            <option 
              v-for="n in (game?.maxPlayers || 5)" 
              :key="n" 
              :value="n"
              :disabled="n < (game?.minPlayers || 2)"
            >
              {{ n }} players
            </option>
          </select>
        </div>

        <div class="bg-background-light p-6 rounded-lg space-y-4">
          <h3 class="text-lg font-semibold text-text flex items-center gap-2">
            <span class="text-primary-light">💰</span>
            Booking Summary
          </h3>
          <div class="space-y-3 text-text-muted">
            <div class="flex justify-between">
              <span>Price per person:</span>
              <span class="text-text">${{ game?.pricePerPerson }}</span>
            </div>
            <div class="flex justify-between">
              <span>Total amount:</span>
              <span class="text-text">${{ totalAmount }}</span>
            </div>
            <div class="flex justify-between font-medium">
              <span>Required deposit (10%):</span>
              <span class="text-primary-light">${{ depositAmount }}</span>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          class="btn-primary w-full group relative overflow-hidden"
        >
          <span class="relative z-10 flex items-center justify-center gap-2">
            Continue to Payment
            <span class="transform transition-transform group-hover:translate-x-1">→</span>
          </span>
        </button>
      </form>
    </div>

    <PaymentModal
      v-if="showPayment"
      :amount="depositAmount"
      @success="handlePaymentSuccess"
      @close="showPayment = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookingStore } from '@/stores/bookingStore'
import { usePlayerStore } from '@/stores/playerStore'
import PaymentModal from '@/components/PaymentModal.vue'

const route = useRoute()
const router = useRouter()
const bookingStore = useBookingStore()
const playerStore = usePlayerStore()

const game = bookingStore.getGameById(Number(route.params.gameId))
const today = new Date().toISOString().split('T')[0]
const showPayment = ref(false)

const availableTimes = [
  '10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', 
  '4:00 PM', '5:30 PM', '7:00 PM', '8:30 PM'
]

const formData = ref({
  date: '',
  time: '',
  numberOfPlayers: '',
})

const totalAmount = computed(() => {
  return formData.value.numberOfPlayers ? 
    Number(formData.value.numberOfPlayers) * (game?.pricePerPerson || 0) : 
    0
})

const depositAmount = computed(() => {
  return Math.round(totalAmount.value * 0.1 * 100) / 100
})

const handleSubmit = () => {
  if (!playerStore.currentPlayer) return
  showPayment.value = true
}

const handlePaymentSuccess = () => {
  if (!playerStore.currentPlayer || !game) return

  bookingStore.createBooking({
    gameId: game.id,
    date: formData.value.date,
    time: formData.value.time,
    numberOfPlayers: Number(formData.value.numberOfPlayers),
    totalAmount: totalAmount.value,
    depositAmount: depositAmount.value,
    playerId: playerStore.currentPlayer.id,
    paymentStatus: 'deposit_paid'
  })

  playerStore.addPoints(Math.floor(depositAmount.value / 10))
  router.push('/dashboard')
}
</script> 