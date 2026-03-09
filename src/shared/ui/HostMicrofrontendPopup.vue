<script setup lang="ts">
import { onMounted, ref } from 'vue'

const STORAGE_KEY = 'host-microfrontend-popup-dismissed'
const isVisible = ref(false)

function closePopup() {
  isVisible.value = false
  localStorage.setItem(STORAGE_KEY, '1')
}

onMounted(() => {
  isVisible.value = localStorage.getItem(STORAGE_KEY) !== '1'
})
</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
    <div class="absolute inset-0 bg-black/45" @click="closePopup"></div>

    <div
      class="relative w-full max-w-sm rounded-2xl border-2 border-black bg-white p-4 text-black shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
      role="dialog"
      aria-live="polite"
      aria-label="Host application info"
    >
      <div class="mb-3">
        <h3 class="text-base font-bold">Frontend Systems Lab</h3>
        <p class="mt-1 text-sm leading-6 text-black">
          Это host-приложение. Оно динамически подгружает отдельные microfrontends для каждой лаборатории.
        </p>
      </div>

      <div class="flex items-center justify-end gap-2">
        <button
          type="button"
          class="rounded-lg border-2 border-black bg-black px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          @click="closePopup"
        >
          Понятно
        </button>
      </div>
    </div>
  </div>
</template>
