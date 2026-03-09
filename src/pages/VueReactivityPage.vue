<template>
  <section class="reactivity-demo text-black dark:text-white">
    <header>
      <h1>Vue Reactivity: Vue 2 vs Vue 3</h1>
      <p>Сравнение одинаковой операции в двух моделях реактивности.</p>
    </header>

    <div class="controls">
      <label for="operation">Operation</label>
      <select id="operation" v-model="selectedOperation">
        <option v-for="operation in operations" :key="operation.key" :value="operation.key">
          {{ operation.label }}
        </option>
      </select>
      <button type="button" @click="runOperation">run operation</button>
      <button type="button" class="secondary" @click="resetDemo">reset</button>
    </div>

    <p class="operation-line">{{ currentOperation.title }}: <code>{{ currentOperation.code }}</code></p>

    <div class="panels">
      <article class="panel border border-black/15 bg-white text-black dark:border-white/25 dark:bg-black dark:text-white">
        <h2>Vue 2 behavior</h2>
        <p class="reactivity-type">Object.defineProperty</p>
        <p class="code-line">{{ currentOperation.code }}</p>
        <p class="render-state" :class="getRenderClass(vue2Result.rerender)">
          Render: {{ getRenderText(vue2Result.rerender) }}
        </p>
        <h3>Mini log</h3>
        <ul class="log">
          <li v-for="(item, index) in vue2Log" :key="`v2-${index}`">{{ item }}</li>
        </ul>
      </article>

      <article class="panel border border-black/15 bg-white text-black dark:border-white/25 dark:bg-black dark:text-white">
        <h2>Vue 3 behavior</h2>
        <p class="reactivity-type">Proxy</p>
        <p class="code-line">{{ currentOperation.code }}</p>
        <p class="render-state" :class="getRenderClass(vue3Result.rerender)">
          Render: {{ getRenderText(vue3Result.rerender) }}
        </p>
        <h3>Mini log</h3>
        <ul class="log">
          <li v-for="(item, index) in vue3Log" :key="`v3-${index}`">{{ item }}</li>
        </ul>
      </article>
    </div>

    <div class="objects-grid">
      <article class="object-card border border-black/15 bg-white text-black dark:border-white/25 dark:bg-black dark:text-white">
        <h3>Vue 2 objects</h3>
        <p>Source object (simulated reactive state)</p>
        <pre>{{ vue2SourceView }}</pre>
        <p>Template snapshot (what UI sees)</p>
        <pre>{{ vue2TemplateView }}</pre>
      </article>

      <article class="object-card border border-black/15 bg-white text-black dark:border-white/25 dark:bg-black dark:text-white">
        <h3>Vue 3 objects</h3>
        <p>Source object (simulated reactive state)</p>
        <pre>{{ vue3SourceView }}</pre>
        <p>Template snapshot (what UI sees)</p>
        <pre>{{ vue3TemplateView }}</pre>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

type OperationKey = 'addProperty' | 'arrayIndexSet' | 'deleteProperty';

interface DemoUser {
  name?: string;
  age?: number;
}

const operations = [
  {
    key: 'addProperty' as const,
    label: 'add property',
    title: 'Operation',
    code: 'user.age = 20',
  },
  {
    key: 'arrayIndexSet' as const,
    label: 'array index set',
    title: 'Operation',
    code: "items[1] = 'x'",
  },
  {
    key: 'deleteProperty' as const,
    label: 'delete property',
    title: 'Operation',
    code: 'delete user.name',
  },
];

const selectedOperation = ref<OperationKey>('addProperty');

const vue2User = ref<DemoUser>({ name: 'Ernar' });
const vue3User = ref<DemoUser>({ name: 'Ernar' });
const vue2Items = ref(['a', 'b', 'c']);
const vue3Items = ref(['a', 'b', 'c']);

const vue2Ui = ref({ userAge: 'undefined', itemAtIndex1: 'b', userName: 'Ernar' });
const vue3Ui = ref({ userAge: 'undefined', itemAtIndex1: 'b', userName: 'Ernar' });

const vue2Result = ref({ rerender: false });
const vue3Result = ref({ rerender: false });
const hasActionRun = ref(false);

const vue2Log = ref(['Начальное состояние: user = { name: "Ernar" }']);
const vue3Log = ref(['Начальное состояние: user = { name: "Ernar" }']);

const currentOperation = computed<(typeof operations)[number]>(() => {
  return operations.find((operation) => operation.key === selectedOperation.value) ?? operations[0]!;
});

const vue2SourceView = computed(() =>
  JSON.stringify({ user: vue2User.value, items: vue2Items.value }, null, 2),
);
const vue3SourceView = computed(() =>
  JSON.stringify({ user: vue3User.value, items: vue3Items.value }, null, 2),
);
const vue2TemplateView = computed(() =>
  JSON.stringify(
    {
      'user.age': vue2Ui.value.userAge,
      'items[1]': vue2Ui.value.itemAtIndex1,
      'user.name': vue2Ui.value.userName,
    },
    null,
    2,
  ),
);
const vue3TemplateView = computed(() =>
  JSON.stringify(
    {
      'user.age': vue3Ui.value.userAge,
      'items[1]': vue3Ui.value.itemAtIndex1,
      'user.name': vue3Ui.value.userName,
    },
    null,
    2,
  ),
);

function getRenderClass(rerender: boolean) {
  if (!hasActionRun.value) {
    return 'pending';
  }
  return rerender ? 'ok' : 'fail';
}

function getRenderText(rerender: boolean) {
  if (!hasActionRun.value) {
    return '⏳ waiting for action';
  }
  return rerender ? '✅ rerender' : '❌ no rerender';
}

function resetDemo() {
  vue2User.value = { name: 'Ernar' };
  vue3User.value = { name: 'Ernar' };
  vue2Items.value = ['a', 'b', 'c'];
  vue3Items.value = ['a', 'b', 'c'];

  vue2Ui.value = { userAge: 'undefined', itemAtIndex1: 'b', userName: 'Ernar' };
  vue3Ui.value = { userAge: 'undefined', itemAtIndex1: 'b', userName: 'Ernar' };

  vue2Result.value = { rerender: false };
  vue3Result.value = { rerender: false };
  hasActionRun.value = false;

  vue2Log.value = ['Начальное состояние: user = { name: "Ernar" }'];
  vue3Log.value = ['Начальное состояние: user = { name: "Ernar" }'];
}

function runOperation() {
  hasActionRun.value = true;

  if (selectedOperation.value === 'addProperty') {
    vue2User.value.age = 20;
    vue3User.value.age = 20;

    vue2Result.value = { rerender: false };
    vue3Result.value = { rerender: true };

    vue2Ui.value.userAge = 'undefined';
    vue3Ui.value.userAge = '20';

    vue2Log.value = ['property added', 'reactivity not triggered'];
    vue3Log.value = ['property added', 'proxy set trap triggered', 'component rerender'];
    return;
  }

  if (selectedOperation.value === 'arrayIndexSet') {
    vue2Items.value[1] = 'x';
    vue3Items.value[1] = 'x';

    vue2Result.value = { rerender: false };
    vue3Result.value = { rerender: true };

    vue2Ui.value.itemAtIndex1 = 'b';
    vue3Ui.value.itemAtIndex1 = 'x';

    vue2Log.value = ['array index updated', 'reactivity not triggered'];
    vue3Log.value = ['array index updated', 'proxy set trap triggered', 'component rerender'];
    return;
  }

  delete vue2User.value.name;
  delete vue3User.value.name;

  vue2Result.value = { rerender: false };
  vue3Result.value = { rerender: true };

  vue2Ui.value.userName = 'Ernar';
  vue3Ui.value.userName = 'undefined';

  vue2Log.value = ['property deleted', 'reactivity not triggered'];
  vue3Log.value = ['property deleted', 'proxy deleteProperty trap triggered', 'component rerender'];
}

watch(selectedOperation, () => {
  resetDemo();
});
</script>

<style scoped>
.reactivity-demo {
  --text: currentColor;
  --muted: #3f3f46;
  --border: #d4d4d8;
  --surface: #f5f5f5;
  --surface-2: #ebebeb;
  --control-bg: #ffffff;
  --control-text: #000000;
  --ok: #0f8a43;
  --fail: #b91c1c;
  --pending: #a16207;

  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 16px;
  font-family: 'Avenir Next', 'Segoe UI', sans-serif;
  color: inherit;
}

:global(html.dark) .reactivity-demo {
  --muted: #d4d4d8;
  --border: #52525b;
  --surface: #18181b;
  --surface-2: #09090b;
  --control-bg: #000000;
  --control-text: #ffffff;
  --ok: #4ade80;
  --fail: #f87171;
  --pending: #facc15;
}

.reactivity-demo h1,
.reactivity-demo h2,
.reactivity-demo h3,
.reactivity-demo p,
.reactivity-demo li,
.reactivity-demo label {
  color: var(--text);
}

.reactivity-demo code {
  color: var(--text);
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1px 6px;
}

.reactivity-demo option {
  color: var(--control-text);
  background: var(--control-bg);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
}

select,
button {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 12px;
  background: var(--control-bg);
  color: var(--control-text);
}

button {
  cursor: pointer;
}

button.secondary {
  background: var(--surface-2);
}

.operation-line {
  margin: 18px 0;
}

.panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 16px;
}

.panel {
  border-radius: 12px;
  padding: 16px;
}

.reactivity-type {
  color: var(--muted);
  margin-top: -6px;
}

.code-line {
  margin: 8px 0 12px;
  font-family: 'SFMono-Regular', Consolas, monospace;
}

.render-state {
  font-weight: 700;
  margin: 8px 0 12px;
}

.render-state.ok {
  color: var(--ok);
}

.render-state.fail {
  color: var(--fail);
}

.render-state.pending {
  color: var(--pending);
}

.log {
  padding-left: 18px;
}

.objects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.object-card {
  border-radius: 12px;
  padding: 16px;
}

.object-card p {
  margin: 8px 0 6px;
  color: var(--muted);
}

pre {
  margin: 0;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface-2);
  color: var(--text);
  font-size: 13px;
  line-height: 1.45;
  overflow-x: auto;
}

@media (max-width: 760px) {
  .panels {
    grid-template-columns: 1fr;
  }

  .objects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
