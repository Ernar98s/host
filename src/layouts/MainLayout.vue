<script setup lang="ts">
import SidebarWidget from '../widgets/sidebar/SidebarWidget.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-black dark:bg-black dark:text-white">
    <div class="flex min-h-screen">
      <SidebarWidget />

      <div class="flex min-w-0 flex-1 flex-col">
        <main class="flex-1 p-6">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
