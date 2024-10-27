<script lang="ts">
	import { fade } from 'svelte/transition';
	import '../app.css';
	import NbrtlsmButton from '../components/NBRTLSM_Button.svelte';
	import NbrtlsmDarkToggle from '../components/NBRTLSM_DarkToggle.svelte';
	import NbrtlsmPierre from '../components/NBRTLSM_Pierre.svelte';
	import NbrtlsmProgress from '../components/NBRTLSM_Progress.svelte';
	import { headingsStore } from '../stores/headings/index.svelte';

	let { children } = $props();
</script>

<NbrtlsmProgress />
<div
	class=" flex h-dvh w-full flex-col bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] dark:bg-[linear-gradient(to_right,#00000030_1px,transparent_1px),linear-gradient(to_bottom,#00000030_1px,transparent_1px)]"
>
	<nav
		class="sticky flex h-20 w-full items-center gap-4 border-b-4 border-black bg-white p-4 font-bold text-black transition-all dark:bg-gray-700 dark:text-white"
	>
		<a href="/" class="group h-auto w-24">
			<NbrtlsmPierre />
		</a>
		<a href="/about" class="w-full text-nowrap text-2xl hover:text-fuel-yellow-200">
			Legend Of Kingdom 2 Wiki
		</a>
		<div class=" flex h-full gap-4 justify-self-end">
			<NbrtlsmButton title="Rechercher une page" type="button">
				<span
					class="float-right rounded-md border-2 border-gray-300
		bg-black px-1 text-sm text-gray-300"
				>
					⌘K
				</span>
			</NbrtlsmButton>
			<NbrtlsmDarkToggle disabled />
		</div>
	</nav>
	<main class="grid h-full w-full grid-flow-col overflow-hidden">
		<aside
			class="sticky left-0 flex max-h-lvh w-60 snap-y flex-col gap-4 overflow-auto border-r-4 border-black bg-white px-4 pb-8 transition-all dark:bg-gray-700 dark:text-gray-300"
		>
			{#key headingsStore.headings}
				<div in:fade={{ duration: 400 }} class="relative h-fit w-full">
					<div
						class=" -mb-4 mt-4 h-60 w-full rounded-md border-2 border-black bg-gray-200 p-2 font-semibold transition-all dark:bg-spring-green-900"
					>
						<h3 class="pb-4 text-gray-100">Table des matières</h3>
						<ul class=" list-inside list-disc space-y-2 text-sm">
							{#each headingsStore.headings as heading}
								<li class="truncate text-ellipsis">
									<a href="#{heading}">{heading}</a>
								</li>
							{/each}
						</ul>
					</div>
					<div
						class="absolute left-1 top-1 -z-10 mt-4 h-60 w-full rounded-md border-2 border-black bg-black"
					></div>
				</div>
			{/key}
		</aside>
		<div class="overflow-y-auto border-b-4 border-r-4 border-black text-center">
			{@render children()}
		</div>
	</main>
</div>

<style lang="postcss">
	/* width */
	::-webkit-scrollbar {
		@apply w-2;
	}

	/* Track */
	::-webkit-scrollbar-track {
		@apply bg-black;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-spring-green-500 dark:bg-spring-green-700;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		@apply bg-spring-green-500 dark:bg-spring-green-700;
	}
</style>
