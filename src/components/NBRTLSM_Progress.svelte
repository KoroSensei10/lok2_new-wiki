<script lang="ts">
	import { navigating } from '$app/stores';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	const startValue = 0;
	const timeout = 3;
	const timeout2 = 30;

	let progressValue = $state(startValue);

	$effect.pre(() => {
		progressValue = 10;
		if ($navigating) {
			const interval = setInterval(() => {
				progressValue += cubicOut(progressValue / 1000);
				if (progressValue >= 90) {
					clearInterval(interval);
					setTimeout(() => {
						const interval2 = setInterval(() => {
							progressValue += cubicOut(progressValue / 10000);
							if (progressValue >= 99) {
								clearInterval(interval2);
							}
						}, timeout2);
					}, 500);
				}
			}, timeout);
		} else {
			progressValue = 100;
		}
	});
</script>

{#if $navigating}
	<div
		out:fade={{ duration: 300 }}
		in:fade={{ duration: 100 }}
		class="fixed left-0 top-0 z-50 h-2 w-full"
	>
		<progress
			class="progress fixed left-0 top-0 h-2 w-full border-b-2 border-r-2 border-black bg-spring-green-600 text-blue-100 transition-all dark:bg-spring-green"
			value={progressValue}
			max="100"
		></progress>
		<div
			class=" loader float-end m-2 mt-4 h-2 w-6 rounded-sm border-2 border-black bg-spring-green-600 dark:bg-spring-green"
		></div>
	</div>
{/if}

<style lang="postcss">
	progress[value]::-webkit-progress-value {
		@apply appearance-none bg-spring-green-600 dark:bg-spring-green;
	}
	.loader {
		animation: spin 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
