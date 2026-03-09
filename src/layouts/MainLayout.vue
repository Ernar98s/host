<script setup lang="ts">
import SidebarWidget from '../widgets/sidebar/SidebarWidget.vue'
</script>

<template>
  <div class="h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white">
    <div class="flex h-full">
      <SidebarWidget />

      <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <main class="flex-1 overflow-y-auto p-6">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
