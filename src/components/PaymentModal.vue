<template>
  <div class="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="max-w-md w-full mx-4 card animate-slide-up">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-text flex items-center gap-2">
          <span class="text-primary-light">💳</span>
          Payment Details
        </h2>
        <button 
          @click="$emit('close')"
          class="text-text-muted hover:text-primary-light transition-colors"
        >
          ✕
        </button>
      </div>
      
      <div class="space-y-6">
        <div class="bg-background-light p-4 rounded-lg">
          <p class="font-medium text-text">Deposit Amount: ${{ props.amount }}</p>
          <p class="text-sm text-text-muted">10% of total booking amount</p>
        </div>

        <div class="space-y-4">
          <div class="form-group">
            <label class="form-label">Card Number</label>
            <div class="relative">
              <input
                type="text"
                class="input-field w-full pl-10"
                placeholder="4242 4242 4242 4242"
                maxlength="19"
                v-model="cardNumber"
                @input="formatCardNumber"
              >
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-primary-light">
                💳
              </span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label class="form-label">Expiry</label>
              <input
                type="text"
                class="input-field w-full"
                placeholder="MM/YY"
                maxlength="5"
                v-model="expiry"
                @input="formatExpiry"
              >
            </div>
            <div class="form-group">
              <label class="form-label">CVC</label>
              <input
                type="text"
                class="input-field w-full"
                placeholder="123"
                maxlength="3"
                v-model="cvc"
              >
            </div>
          </div>
        </div>

        <div class="flex space-x-4">
          <button 
            @click="handlePayment"
            class="btn-primary flex-grow group"
            :disabled="isLoading"
          >
            <span class="flex items-center justify-center gap-2">
              <span v-if="isLoading">Processing...</span>
              <span v-else>Pay Deposit</span>
              <span v-if="!isLoading" class="transform transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
          <button 
            @click="$emit('close')"
            class="btn-secondary"
            :disabled="isLoading"
          >
            Cancel
          </button>
        </div>
      </div>

      <!-- Processing Overlay -->
      <div 
        v-if="isLoading"
        class="absolute inset-0 bg-background-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center"
      >
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  amount: number
}>()

const emit = defineEmits<{
  (e: 'success'): void
  (e: 'close'): void
}>()

const isLoading = ref(false)
const cardNumber = ref('')
const expiry = ref('')
const cvc = ref('')

const formatCardNumber = () => {
  cardNumber.value = cardNumber.value
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()
}

const formatExpiry = () => {
  expiry.value = expiry.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
}

const handlePayment = async () => {
  isLoading.value = true
  // Simulate payment processing
  await new Promise(resolve => setTimeout(resolve, 1500))
  isLoading.value = false
  emit('success')
}
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
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