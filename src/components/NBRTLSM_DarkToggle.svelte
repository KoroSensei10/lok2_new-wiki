<script lang="ts">
	import { fade } from 'svelte/transition';
	import { MoonStar, Sun } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';

	let dark = $state(true);

	const toggleDark = () => {
		dark = !dark;
		localStorage.theme = dark ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark', dark);
	};

	onMount(() => {
		// dark =
		// 	localStorage.theme === 'dark' ||
		// 	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		dark = true;
		document.documentElement.classList.toggle('dark', dark);
	});

	type NBRTLSM_DarkToggleProps = {} & HTMLButtonAttributes;

	let { ...rest }: NBRTLSM_DarkToggleProps = $props();
</script>

<div class="relative">
	<button
		onclick={toggleDark}
		type="button"
		{...rest}
		class="group flex w-11 items-center justify-center text-nowrap rounded-md
         border-2 border-black bg-spring-green-300 py-2 text-black transition-all hover:translate-x-1
		 hover:translate-y-1 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-spring-green-800"
	>
		{#key dark}
			<div in:fade={{ duration: 200 }} class="">
				{#if dark}
					<MoonStar stroke="3" />
				{:else}
					<Sun stroke="3" />
				{/if}
			</div>
		{/key}
	</button>
	<div
		id="button-shadow"
		class="absolute left-1 top-1 -z-10 h-full w-11 text-nowrap rounded-md border-2 border-black bg-black"
	></div>
</div>
