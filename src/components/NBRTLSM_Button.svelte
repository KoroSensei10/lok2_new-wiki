<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type BTRLSM_ButtonProps = {
		children?: Snippet;
		title: string;
	} & HTMLButtonAttributes;
	let { children, title, ...rest }: BTRLSM_ButtonProps = $props();
</script>

<div class="relative">
	<button
		{...rest}
		class="group text-nowrap rounded-md border-2 border-black
         bg-fuel-yellow p-4 py-2 text-black transition-all
		 
		 hover:translate-x-1 hover:translate-y-1
		 
		 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-800
		 
		 disabled:hover:bottom-1 disabled:hover:right-1"
	>
		<div class="flex items-center justify-between gap-2">
			{title}
			{#if children}
				{@render children()}
			{/if}
		</div>
	</button>
	<div
		id="button-shadow"
		class="absolute left-1 top-1 -z-10 h-full w-full text-nowrap rounded-md border-2 border-black bg-black"
	></div>
</div>
