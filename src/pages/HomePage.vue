<template>
  <section class="mx-auto max-w-6xl space-y-8 px-2 pb-10 pt-2 sm:px-4">
    <div
      v-reveal="0"
      class="grid gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out dark:border-white/20 dark:bg-black md:grid-cols-[220px_1fr]"
    >
      <div class="mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-black/15 bg-black/5 dark:border-white/30 dark:bg-white/10 md:h-52 md:w-52">
        <img :src="avatar" alt="Ernar Shandalinov" class="h-full w-full object-cover" />
      </div>

      <div class="space-y-4">
        <div>
          <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Ernar Shandalinov</h1>
          <p class="mt-1 text-base text-black/70 dark:text-white/70 sm:text-lg">Senior Frontend Developer (Vue.js / AI SaaS)</p>
        </div>

        <div class="flex flex-wrap gap-2 text-sm">
          <span class="rounded-full border border-black/15 px-3 py-1 dark:border-white/25">Astana, Kazakhstan</span>
          <span class="rounded-full border border-black/15 px-3 py-1 dark:border-white/25">5+ years experience</span>
          <span class="rounded-full border border-black/15 px-3 py-1 dark:border-white/25">Vue 3 / TypeScript / Tailwind</span>
        </div>

        <div class="grid gap-3 text-sm sm:grid-cols-2">
          <a href="mailto:shernar1298@gmail.com" class="inline-flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:email-outline" class="text-lg" />
            <span>shernar1298@gmail.com</span>
          </a>
          <a href="tel:+77771120398" class="inline-flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:phone-outline" class="text-lg" />
            <span>+7 (777) 112-03-98</span>
          </a>
          <a href="https://github.com/Ernar98s" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:github" class="text-lg" />
            <span>github.com/Ernar98s</span>
          </a>
          <a href="https://github.com/Ernar98s" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:open-in-new" class="text-lg" />
            <span>Portfolio / Projects</span>
          </a>
        </div>
      </div>
    </div>

    <article
      v-reveal="80"
      class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out dark:border-white/20 dark:bg-black"
    >
      <div class="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
        <Icon icon="mdi:card-account-details-outline" />
        <h2>Professional Summary</h2>
      </div>
      <p class="leading-7 text-black/80 dark:text-white/80">
        Frontend engineer with 5+ years of experience building scalable SPA and SSR applications in fintech and SaaS domains.
        Specialized in Vue 3, modular frontend architecture, performance optimization, and complex UI systems. Recently led frontend development
        of an AI-agent platform featuring streaming chat, dynamic agent configuration, and scalable Tailwind-based design system.
      </p>
    </article>

    <article
      v-reveal="120"
      class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out dark:border-white/20 dark:bg-black"
    >
      <div class="mb-4 inline-flex items-center gap-2 text-xl font-semibold">
        <Icon icon="mdi:tools" />
        <h2>Core Skills</h2>
      </div>
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="skill in skills"
          :key="skill"
          class="rounded-xl border border-black/10 bg-black/[0.02] px-3 py-2 text-sm dark:border-white/20 dark:bg-white/5"
        >
          {{ skill }}
        </div>
      </div>
    </article>

    <article
      v-reveal="160"
      class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out dark:border-white/20 dark:bg-black"
    >
      <div class="mb-5 inline-flex items-center gap-2 text-xl font-semibold">
        <Icon icon="mdi:briefcase-outline" />
        <h2>Experience</h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in experience"
          :key="item.company + item.period"
          v-reveal="index * 80"
          class="rounded-2xl border border-black/10 p-4 transition-all duration-700 ease-out dark:border-white/20"
        >
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 class="text-lg font-semibold">{{ item.role }}</h3>
              <p class="text-sm text-black/70 dark:text-white/70">{{ item.company }}</p>
            </div>
            <span class="rounded-full border border-black/15 px-3 py-1 text-xs font-medium dark:border-white/25">{{ item.period }}</span>
          </div>

          <ul class="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-black/85 dark:text-white/85">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </article>

    <div class="grid gap-4 lg:grid-cols-2">
      <article
        v-reveal="100"
        class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out dark:border-white/20 dark:bg-black"
      >
        <div class="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
          <Icon icon="mdi:school-outline" />
          <h2>Education</h2>
        </div>
        <p class="font-medium">Suleyman Demirel University</p>
        <p class="text-sm text-black/75 dark:text-white/75">Engineering Degree (2020)</p>
      </article>

      <article
        v-reveal="160"
        class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out dark:border-white/20 dark:bg-black"
      >
        <div class="mb-3 inline-flex items-center gap-2 text-xl font-semibold">
          <Icon icon="mdi:account-network-outline" />
          <h2>Social Links</h2>
        </div>
        <div class="space-y-2 text-sm">
          <a href="https://github.com/Ernar98s" target="_blank" rel="noreferrer" class="flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:github" class="text-lg" />
            <span>GitHub</span>
          </a>
          <a href="mailto:shernar1298@gmail.com" class="flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:email-outline" class="text-lg" />
            <span>Email</span>
          </a>
          <a href="tel:+77771120398" class="flex items-center gap-2 rounded-xl border border-black/10 px-3 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <Icon icon="mdi:phone-outline" class="text-lg" />
            <span>Phone</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Directive } from 'vue';
import avatar from '../assets/img/avatar.jpg';

const skills = [
  'Vue 2 / Vue 3 (Composition API)',
  'TypeScript, JavaScript (ES6+)',
  'Nuxt.js, SPA / SSR architecture',
  'Modular frontend architecture (feature-based structure)',
  'Fetch ReadableStream (streaming)',
  'REST API, GraphQL',
  'State Management (Pinia / Vuex)',
  'Tailwind CSS, scalable UI systems',
  'Performance optimization (Core Web Vitals)',
  'Git, GitLab, Agile workflow',
];

const experience = [
  {
    role: 'Frontend Lead',
    company: 'AI Agent Platform',
    period: '2026',
    points: [
      'Designed and implemented scalable modular frontend architecture.',
      'Built ChatGPT-like streaming chat using Fetch ReadableStream with incremental token rendering.',
      'Implemented SSE-style parsing and progressive UI updates.',
      'Developed dynamic agent configuration interface with complex state orchestration.',
      'Built scalable Tailwind-based component system.',
      'Integrated LLM APIs with real-time UX updates.',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'KMF (Fintech)',
    period: 'May 2023 - Mar 2025',
    points: [
      'Developed banking SPA platform for online loan issuance.',
      'Led migration to Vue 3 (Composition API).',
      'Integrated GraphQL reducing network requests by ~30-40%.',
      'Optimized UX flows reducing submission time by ~25%.',
      'Improved frontend stability in critical financial flows.',
    ],
  },
  {
    role: 'Middle Frontend Developer',
    company: 'Bambini Fashion',
    period: 'Jul 2022 - May 2023',
    points: [
      'Maintained and scaled Nuxt.js e-commerce platform.',
      'Reduced client bundle size by 20-30%.',
      'Improved SSR performance and Core Web Vitals.',
      'Reduced technical debt and improved maintainability.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Apple City LLP',
    period: 'Jun 2020 - Jun 2022',
    points: [
      'Built document management and digital signature admin panel (SPA).',
      'Reduced initial load time by 30-40%.',
      'Designed modular UI architecture.',
      'Improved UX for search and filtering workflows.',
    ],
  },
];

const vReveal: Directive<HTMLElement, number> = {
  mounted(el, binding) {
    const delay = typeof binding.value === 'number' ? binding.value : 0;

    el.classList.add('opacity-0', 'translate-y-6');
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        el.classList.remove('opacity-0', 'translate-y-6');
        el.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(el);
      },
      { threshold: 0.15 },
    );

    (el as HTMLElement & { __observer?: IntersectionObserver }).__observer = observer;
    observer.observe(el);
  },
  unmounted(el) {
    const observer = (el as HTMLElement & { __observer?: IntersectionObserver }).__observer;
    observer?.disconnect();
  },
};
</script>
