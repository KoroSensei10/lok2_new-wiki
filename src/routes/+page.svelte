<script>
	import NbrtlsmButton from '../components/NBRTLSM_Button.svelte';
	import NbrtlsmDialog from '../components/NBRTLSM_Dialog.svelte';

	let modalOpen = $state(false);
</script>

<div class="container">
	<NbrtlsmButton title="Open Modal" onclick={() => (modalOpen = true)} />
	<NbrtlsmDialog title="Test" bind:open={modalOpen} />
</div>
