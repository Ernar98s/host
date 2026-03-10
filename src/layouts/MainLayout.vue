<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SidebarWidget from '../widgets/sidebar/SidebarWidget.vue'
import HostMicrofrontendPopup from '../shared/ui/HostMicrofrontendPopup.vue'

const isMobileSidebarOpen = ref(false)
const route = useRoute()

function openMobileSidebar() {
  isMobileSidebarOpen.value = true
}

function closeMobileSidebar() {
  isMobileSidebarOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMobileSidebar()
  },
)
</script>

<template>
  <div class="h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white">
    <div class="flex h-full">
      <div class="hidden h-full md:block">
        <SidebarWidget />
      </div>

      <div
        class="fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 md:hidden"
        :class="isMobileSidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
        @click="closeMobileSidebar"
      ></div>

      <aside
        class="fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 md:hidden"
        :class="isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <SidebarWidget @navigate="closeMobileSidebar" />
      </aside>

      <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header
          class="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-white px-4 py-3 md:hidden dark:border-white/20 dark:bg-black"
        >
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-black/20 px-3 py-1.5 text-sm dark:border-white/30"
            @click="openMobileSidebar"
          >
            <Icon icon="mdi:menu" class="text-lg" />
            <span>Menu</span>
          </button>
          <span class="text-sm font-medium">Frontend Systems Lab</span>
        </header>

        <main class="flex-1 overflow-y-auto p-4 sm:p-6">
          <slot />
        </main>
      </div>
    </div>
    <HostMicrofrontendPopup />
  </div>
</template>
