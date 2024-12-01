<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto card">
      <h1 class="page-title flex items-center justify-center gap-3">
        <span class="text-primary-light">👤</span>
        <span>Create Your Profile</span>
      </h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input
            v-model="formData.username"
            type="text"
            required
            class="input-field w-full"
            placeholder="Choose a username"
          >
        </div>

        <div class="form-group">
          <label class="form-label">Email</label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="input-field w-full bg-background-card border-border/50 text-text-muted"
            readonly
          >
        </div>

        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input
            v-model="formData.name"
            type="text"
            required
            class="input-field w-full"
            placeholder="Enter your full name"
          >
        </div>

        <div class="form-group">
          <label class="form-label">Phone</label>
          <input
            v-model="formData.phone"
            type="tel"
            required
            class="input-field w-full"
            placeholder="Enter your phone number"
          >
        </div>

        <button type="submit" class="btn-primary w-full group relative overflow-hidden">
          <span class="relative z-10 flex items-center justify-center gap-2">
            Create Profile & Continue
            <span class="transform transition-transform group-hover:translate-x-1">→</span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePlayerStore } from '@/stores/playerStore'

const router = useRouter()
const route = useRoute()
const playerStore = usePlayerStore()

const formData = ref({
  username: '',
  email: '',
  name: '',
  phone: '',
})

onMounted(() => {
  if (route.query.email) {
    formData.value.email = route.query.email as string
  }
})

const handleSubmit = () => {
  playerStore.createPlayer({
    name: formData.value.name,
    email: formData.value.email,
    phone: formData.value.phone,
    username: formData.value.username,
    waiverSigned: false,
  })
  router.push('/waiver')
}
</script> 