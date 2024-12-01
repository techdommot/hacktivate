<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto card">
      <h1 class="page-title flex items-center justify-center gap-3">
        <span class="text-primary-light">📝</span>
        <span>Digital Waiver Agreement</span>
      </h1>
      
      <div class="space-y-6">
        <div class="card bg-background-light border-border/10">
          <h2 class="text-xl font-semibold mb-4 text-text">Terms and Conditions</h2>
          <div class="bg-background p-6 rounded-lg mb-4 h-64 overflow-y-auto border border-border/20">
            <p class="mb-4 text-text">By signing this waiver, I acknowledge and agree to the following:</p>
            <ol class="list-decimal list-inside space-y-4 text-text-muted">
              <li class="flex items-start">
                <span class="ml-2">I understand that participating in escape room activities involves physical activity.</span>
              </li>
              <li class="flex items-start">
                <span class="ml-2">I will follow all safety instructions provided by the game masters.</span>
              </li>
              <li class="flex items-start">
                <span class="ml-2">I am physically fit and mentally able to participate in the activities.</span>
              </li>
              <li class="flex items-start">
                <span class="ml-2">I assume all risks associated with participation in the activities.</span>
              </li>
              <li class="flex items-start">
                <span class="ml-2">I will not damage or misuse any equipment or facilities.</span>
              </li>
            </ol>
          </div>
        </div>

        <div class="flex items-center mb-6">
          <input 
            type="checkbox" 
            id="agree" 
            v-model="agreed"
            class="w-5 h-5 rounded border-border focus:ring-primary bg-background-light text-primary"
          >
          <label for="agree" class="ml-3 text-text-muted">
            I have read and agree to the terms and conditions
          </label>
        </div>

        <button 
          @click="signWaiver" 
          :disabled="!agreed"
          class="w-full group relative"
          :class="[
            agreed ? 'btn-primary' : 'bg-background-light text-text-muted cursor-not-allowed'
          ]"
        >
          <span class="relative z-10 flex items-center justify-center gap-2">
            <span>Sign Waiver & Continue</span>
            <span v-if="agreed" class="transform transition-transform group-hover:translate-x-1">→</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'

const router = useRouter()
const playerStore = usePlayerStore()
const agreed = ref(false)

const signWaiver = () => {
  if (agreed.value) {
    playerStore.signWaiver()
    router.push('/games')
  }
}
</script>

<style scoped>
.list-decimal li {
  position: relative;
  padding-left: 1rem;
}

/* Custom scrollbar for the terms and conditions */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  @apply bg-background rounded-full;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-border rounded-full;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  @apply bg-primary/30;
}
</style> 