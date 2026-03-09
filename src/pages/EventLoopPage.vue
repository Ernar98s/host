<template>
  <div ref="container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const container = ref<HTMLElement | null>(null);
const baseUrl =
  (import.meta.env.VITE_EVENT_LOOP_URL as string | undefined)?.replace(
    /\/+$/,
    '',
  ) || 'http://localhost:5174';

function isLocalUrl(url: string) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(url);
}

function ensureRemoteCss(base: string, fileName: string) {
  const href = `${base}/${fileName}`;
  if (document.querySelector(`link[data-mf-css="${href}"]`)) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.mfCss = href;
  document.head.appendChild(link);
}

onMounted(async () => {
  if (!isLocalUrl(baseUrl)) {
    ensureRemoteCss(baseUrl, 'lab-event-loop.css');
  }

  let remote: { mount: (el: HTMLElement | null) => void };

  try {
    remote = await import(/* @vite-ignore */ `${baseUrl}/main.js`);
  } catch {
    remote = await import(/* @vite-ignore */ `${baseUrl}/src/main.ts`);
  }

  remote.mount(container.value);
});
</script>
