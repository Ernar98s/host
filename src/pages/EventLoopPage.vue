<template>
	<div ref="container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const container = ref();

onMounted(async () => {
	const remote = await import('http://localhost:5174/src/main.ts');
	remote.mount(container.value);
});
</script>
