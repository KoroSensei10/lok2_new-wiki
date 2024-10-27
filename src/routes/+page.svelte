<script>
	import { fly } from 'svelte/transition';
	import titre from '../lib/assets/titre.png';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<div class="container flex flex-col items-center gap-8 p-4">
	{#if visible}
		<picture
			in:fly={{
				delay: 0,
				duration: 1500,
				easing: cubicOut,
				x: 0,
				y: -100,
				opacity: 0.2
			}}
		>
			<img src={titre} alt="Legend Of Kingdom" srcset="" />
		</picture>
	{:else}
		<picture>
			<img src={titre} alt="Legend Of Kingdom" srcset="" />
		</picture>
	{/if}
	<div class=" relative m-4">
		<blockquote
			class="flex overflow-hidden rounded-md
		border-4 border-black bg-fuel-yellow-200"
		>
			<div class="flex w-20 items-center justify-center bg-fuel-yellow-500">
				<div class="translate-y-1 font-serif text-2xl font-bold">"</div>
			</div>
			<cite class=" p-4">
				Une ombre s'étend sur le nord du royaume de Gnomépiec alors que la Gang'reine détruit
				implacablement les terres jadis luxuriantes, transformant les réserves naturelles en déserts
				stériles et empoisonnant les rivières qui foisonnaient autrefois de vie.
			</cite>
		</blockquote>
		<div
			class="bg-spring-green-500 absolute -right-2 -top-2 rounded-md border-2 border-black px-2 py-1 font-bold"
		>
			Nouveau !
		</div>
		<div
			id="quote-shadow"
			class=" absolute left-1 top-1 -z-10 flex h-full w-full rounded-md border-4 border-black
		bg-black text-black"
		></div>
	</div>
	<div
		class="rounded-md bg-slate-300 p-4 text-justify indent-8 text-black dark:bg-slate-700 dark:text-white"
	>
		Bienvenue sur le Wiki de Legend of Kingdom 2 ! Découvrez ce jeu de point & click étonnant qui a
		surgi de nulle part, créé par une équipe de développeurs mystérieux. Plongez dans un monde
		captivant rempli d'énigmes, d'aventures et de découvertes inattendues. Trouvez ici des guides
		pratiques, des astuces et des infos sur les personnages et lieux. Que vous soyez un joueur
		chevronné ou novice, préparez-vous à explorer un univers fascinant ! N'hésitez pas à commenter
		ou ajouter des articles pour faire partie de la communauté !
	</div>
</div>
