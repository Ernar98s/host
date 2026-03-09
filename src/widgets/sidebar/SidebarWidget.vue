<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const overviewLink = { to: '/', label: 'Overview' }

const labLinks = [
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
    class="flex h-full w-64 shrink-0 flex-col overflow-y-auto border-r border-black/10 bg-white p-4 text-black dark:border-white/20 dark:bg-black dark:text-white"
  >
    <div class="mb-6 flex items-center gap-2">
      <Icon icon="raphael:lab" class="text-xl" />
      <span class="text-base font-semibold">Ernar98s Frontend Lab</span>
    </div>

    <nav class="flex flex-1 flex-col text-sm">
      <RouterLink
        :to="overviewLink.to"
        class="rounded px-2 py-1"
        :class="
          $route.path === overviewLink.to
            ? 'bg-black text-white dark:bg-white dark:text-black'
            : 'hover:bg-black/5 dark:hover:bg-white/10'
        "
      >
        {{ overviewLink.label }}
      </RouterLink>

      <div class="my-3 border-t border-black/10 dark:border-white/20"></div>

      <RouterLink
        v-for="link in labLinks"
        :key="link.to"
        :to="link.to"
        class="rounded px-2 py-1"
        :class="
          $route.path === link.to
            ? 'bg-black text-white dark:bg-white dark:text-black'
            : 'hover:bg-black/5 dark:hover:bg-white/10'
        "
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <p class="mb-3 text-xs leading-relaxed text-black/65 dark:text-white/65">
      This is the host application for a set of microfrontends with short, hands-on labs that explain how core
      frontend concepts work in practice.
    </p>

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
