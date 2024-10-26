<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import NbrtlsmButton from '../components/NBRTLSM_Button.svelte';
	let { children } = $props();

	let dark = $state(true);

	onMount(() => {
		dark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList.toggle('dark', dark);
	});
</script>

<div class="flex h-full w-full flex-col items-center gap-4">
	<nav
		class="sticky flex w-full items-center gap-4 border-b-4 border-black bg-white p-4 font-bold text-black dark:bg-gray-700 dark:text-white"
	>
		<h2 class="text-nowrap text-2xl">Legend Of Kingdom 2 Wiki</h2>
		<ul class="flex w-full gap-4">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
		<div class="float-end flex gap-4">
			<NbrtlsmButton
				title="Rechercher"
				type="button"
				disabled
				onclick={() => {
					let a = 2;
				}}
			/>
			<NbrtlsmButton
				title="_"
				type="button"
				onclick={() => {
					dark = !dark;
					localStorage.theme = dark ? 'dark' : 'light';
					document.documentElement.classList.toggle('dark', dark);
				}}
			/>
		</div>
	</nav>
	{@render children()}
</div>
