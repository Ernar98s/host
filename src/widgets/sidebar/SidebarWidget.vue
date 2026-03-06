<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/event-loop', label: 'Event Loop' },
  { to: '/browser-rendering', label: 'Browser Rendering' },
  { to: '/http-caching', label: 'HTTP / Caching' },
  { to: '/vue-reactivity', label: 'Vue Reactivity' },
]

const isDark = ref(false)

function applyTheme(nextDark: boolean) {
  isDark.value = nextDark
  document.documentElement.classList.toggle('dark', nextDark)
}

function toggleTheme() {
  applyTheme(!isDark.value)
}

onMounted(() => {
  applyTheme(document.documentElement.classList.contains('dark'))
})
</script>

<template>
  <aside
    class="flex h-screen w-64 flex-col border-r border-black/10 bg-white p-4 text-black dark:border-white/20 dark:bg-black dark:text-white"
  >
    <div class="mb-6 flex items-center gap-2">
      <Icon icon="material-symbols:widgets-outline-rounded" class="text-xl" />
      <span class="text-base font-semibold">Host Sidebar</span>
    </div>

    <nav class="flex flex-1 flex-col gap-2 text-sm">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="rounded px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10"
        active-class="bg-black text-white dark:bg-white dark:text-black"
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <button
      type="button"
      class="mt-4 inline-flex items-center justify-center gap-2 rounded border border-black/20 px-3 py-2 text-sm hover:bg-black/5 dark:border-white/30 dark:hover:bg-white/10"
      @click="toggleTheme"
    >
      <Icon :icon="isDark ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'" />
      <span>{{ isDark ? 'Light Theme' : 'Dark Theme' }}</span>
    </button>
  </aside>
</template>
