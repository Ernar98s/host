<template>
	<section>
		<h1>Event Loop</h1>
		<p>Page stub.</p>

		<div ref="container"></div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const container = ref();

onMounted(async () => {
	const remote = await import('http://localhost:5174/src/main.ts');
	remote.mount(container.value);
});
</script>
