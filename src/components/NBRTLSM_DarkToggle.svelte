<script lang="ts">
	import { fade } from 'svelte/transition';

	let { dark, toggleDark }: { dark: boolean; toggleDark: () => void } = $props();
</script>

<div class="relative">
	<button
		onclick={toggleDark}
		type="button"
		class="bg-spring-green-300 dark:bg-spring-green-800 group w-11 text-nowrap rounded-md border-2
         border-black py-2 text-center text-black transition-all
		 hover:translate-x-1 hover:translate-y-1"
	>
		{#key dark}
			<div in:fade={{ duration: 200 }} class="w-full text-center">
				{dark ? '🌙' : ' ☀️ '}
			</div>
		{/key}
	</button>
	<div
		id="button-shadow"
		class="absolute left-1 top-1 -z-10 h-full w-11 text-nowrap rounded-md border-2 border-black bg-black"
	></div>
</div>
