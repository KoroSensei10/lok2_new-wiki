<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import NbrtlsmButton from '../components/NBRTLSM_Button.svelte';
	import pierre from '../lib/assets/pierre_magique_hr.png';
	import NbrtlsmDarkToggle from '../components/NBRTLSM_DarkToggle.svelte';
	import NbrtlsmPierre from '../components/NBRTLSM_Pierre.svelte';

	let { children } = $props();

	let dark = $state(true);

	const toggleDark = () => {
		dark = !dark;
		localStorage.theme = dark ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark', dark);
	};

	onMount(() => {
		dark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList.toggle('dark', dark);
	});
</script>

<div class="flex h-full w-full flex-col items-center gap-4">
	<nav
		class="sticky flex w-full items-center gap-4 border-b-4 border-black bg-white p-4 font-bold text-black transition-all dark:bg-gray-700 dark:text-white"
	>
		<a href="/" class="">
			<!-- <picture class="">
				<img
					src={pierre}
					alt="Logo"
					class=" w-16 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-2"
				/>
			</picture>
			<picture class="absolute left-0 top-0 -z-10 content-center text-center">
				<img
					src={pierre}
					alt="Logo"
					class="w-16 transition-all group-hover:translate-x-1 group-hover:translate-y-1"
				/>
			</picture> -->
			<NbrtlsmPierre />
		</a>
		<a href="/" class="w-full text-nowrap text-2xl hover:text-fuel-yellow-200">
			Legend Of Kingdom 2 Wiki
		</a>
		<div class=" flex gap-4 justify-self-end">
			<NbrtlsmButton title="Rechercher une page" type="button">
				<span
					class="float-right rounded-md border-2 border-fuel-yellow-100
          bg-black px-1 text-sm text-fuel-yellow-100 group-disabled:bg-fuel-yellow-200"
				>
					⌘K
				</span>
			</NbrtlsmButton>
			<NbrtlsmDarkToggle {dark} {toggleDark} />
		</div>
	</nav>
	{@render children()}
	<aside
		class="bg-spring-green-500 fixed bottom-4 right-4 z-10 h-60 w-60 rounded-full border-8 border-black"
	></aside>
	<aside
		class=" bg-spring-green-500 fixed bottom-24 right-28 h-20 w-60 border-8 border-black"
	></aside>
</div>
