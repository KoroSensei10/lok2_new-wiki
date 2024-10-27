<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import titre from '../lib/assets/titre.png';
	import { headingsStore } from '../stores/headings/index.svelte';

	headingsStore.headings = ['Les différents chapitres', 'Les Personnages', 'Les Lieux'];
	const lists = [
		['Chapitre 1', 'Chapitre 2', 'Chapitre 3'],
		['Le héros', 'Le voyageur', 'Le propriétaire de la maison', 'Le tavernier', "L'écrivain"],
		[
			'Le pâturage',
			'Forêt de Gnomépièc',
			'Maison du propriétaire',
			'Royaume de Gnomépièc',
			'Village de Gnomépièc',
			'Taverne',
			'Forêt magique',
			'Tour de Gnomépièc'
		]
	];

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<div class="container flex flex-col items-center gap-8 overflow-x-clip p-4 dark:text-gray-300">
	<div class="relative pt-8">
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

		<div
			class="absolute -right-7 top-2 rotate-12 rounded-md border-2 border-black bg-spring-green-300 px-2 py-1 font-bold text-black"
		>
			Déja Disponible !
		</div>
	</div>
	<div class=" relative my-4 ml-8 mr-0">
		<blockquote
			class="flex overflow-hidden rounded-md
		border-4 border-black bg-fuel-yellow-200 text-black"
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
			id="quote-shadow"
			class=" absolute left-1 top-1 -z-10 flex h-full w-full rounded-md border-4 border-black
		bg-black text-black"
		></div>
	</div>
	<div class="w-full self-end pl-8">
		<div class="border-b-2 dark:border-spring-green-700"></div>
	</div>
	<div class="text-justify indent-8">
		Bienvenue sur le Wiki de <span class=" font-bold">Legend of Kingdom 2 !</span> Découvrez ce jeu de
		point & click étonnant qui a surgi de nulle part, créé par une équipe de développeurs mystérieux.
		Plongez dans un monde captivant rempli d'énigmes, d'aventures et de découvertes inattendues. Trouvez
		ici des guides pratiques, des astuces et des infos sur les personnages et lieux. Que vous soyez un
		joueur chevronné ou novice, préparez-vous à explorer un univers fascinant ! N'hésitez pas à commenter
		ou ajouter des articles pour faire partie de la communauté !
	</div>

	{#each headingsStore.headings as heading, i (heading)}
		<div class="w-full">
			<h2 id={heading} class="w-full text-left text-2xl font-bold text-gray-100">{heading}</h2>
			<ul class="w-full list-inside list-disc px-4 text-left">
				{#each lists[i] as list}
					<li>{list}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
