<script lang="ts">
	import { fade } from 'svelte/transition';
	import NbrtlsmButton from './NBRTLSM_Button.svelte';

	interface BTRLSM_DialogProps {
		title: string;
		open: boolean;
	}
	let { title, open = $bindable(false) }: BTRLSM_DialogProps = $props();
</script>

{#if open}
	<div transition:fade={{ duration: 200 }} class=" flex h-dvh w-full items-center justify-center">
		<dialog
			class=" flex flex-col items-center justify-center gap-4
    text-nowrap rounded bg-gray-600 p-4 text-white transition-all"
			{open}
		>
			<div>
				<h3 class=" self-start font-bold">{title}</h3>
				<p>Salutations, à tous et à toutes !</p>
			</div>
			<form method="dialog" class="self-end">
				<NbrtlsmButton title="Fermer" type="submit" onclick={() => (open = false)} />
			</form>
		</dialog>
	</div>
{/if}
