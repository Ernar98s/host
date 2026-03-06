import { createRouter, createWebHistory } from 'vue-router'

import BrowserRenderingPage from '../../pages/BrowserRenderingPage.vue'
import EventLoopPage from '../../pages/EventLoopPage.vue'
import HomePage from '../../pages/HomePage.vue'
import HttpCachingPage from '../../pages/HttpCachingPage.vue'
import VueReactivityPage from '../../pages/VueReactivityPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/event-loop', name: 'event-loop', component: EventLoopPage },
    {
      path: '/browser-rendering',
      name: 'browser-rendering',
      component: BrowserRenderingPage,
    },
    { path: '/http-caching', name: 'http-caching', component: HttpCachingPage },
    {
      path: '/vue-reactivity',
      name: 'vue-reactivity',
      component: VueReactivityPage,
    },
  ],
})
