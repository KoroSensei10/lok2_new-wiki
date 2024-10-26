<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	type BTRLSM_ButtonProps = {
		title: string;
	} & HTMLButtonAttributes;
	let { title, ...rest }: BTRLSM_ButtonProps = $props();
</script>

<div class="flex h-full w-full items-center justify-center">
	<div class="group relative">
		<button
			{...rest}
			class="absolute bottom-1 right-1 text-nowrap rounded-md border-2 border-black bg-blue-400
        p-4 py-2 text-black transition-all disabled:bg-gray-400 disabled:text-gray-800 group-hover:bottom-0 group-hover:right-0"
		>
			{title}
		</button>
		<button
			disabled
			class="-z-10 h-full w-full text-nowrap rounded-md border-2 border-black bg-black p-4 py-2 text-black transition-all"
			>{title}</button
		>
	</div>
</div>
