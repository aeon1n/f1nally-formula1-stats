<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let map;

	onMount(() => {
		map = new maplibregl.Map({
			container: 'map',
			style: 'https://demotiles.maplibre.org/style.json',
			center: [11.7167, 44.3439],
			zoom: 4
		});

		new maplibregl.Marker().setLngLat([11.7167, 44.3439]).addTo(map);
	});

	const tracks = [
		{
			name: 'Autodromo Internazionale Enzo e Dino Ferrari',
			location: 'Imola, Italy',
			flag: 'it'
		},
		{
			name: 'Monza Circuit',
			location: 'Monza, Italy',
			flag: 'it'
		},
		{
			name: 'Monza Circuit',
			location: 'Monza, Italy',
			flag: 'it'
		},
		{
			name: 'Monza Circuit',
			location: 'Monza, Italy',
			flag: 'it'
		},
		{
			name: 'Monza Circuit',
			location: 'Monza, Italy',
			flag: 'it'
		},
		{
			name: 'Monza Circuit',
			location: 'Monza, Italy',
			flag: 'it'
		}
	];
</script>

<div class="mt-8">
	<h2 class="mb-2 text-2xl font-extrabold text-gray-200 md:text-3xl">F1 Circuits Worldwide</h2>
	<p class="mb-6 font-semibold text-gray-400 md:text-lg">
		Discover all Formula 1 tracks around globe.
	</p>
	<div class="flex flex-col gap-6 md:flex-row">
		<!-- Map -->
		<div class="w-full rounded-2xl shadow-lg md:flex-[2]">
			<div id="map" class="h-[300px] w-full rounded-2xl md:h-[60vh]"></div>
		</div>

		<!-- Track List -->
		<div class="w-full flex-[1] space-y-4 overflow-x-hidden overflow-y-auto md:max-h-[60vh]">
			{#each tracks as track}
				<div
					class="flex items-center justify-between gap-4 rounded-2xl bg-neutral-900 p-4 shadow-lg transition hover:scale-[1.01]"
				>
					<span class={`fi fi-${track.flag} rounded text-2xl drop-shadow`}></span>

					<div class="flex flex-1 flex-col overflow-hidden px-2">
						<h2 class="truncate text-lg font-extrabold text-white uppercase md:text-xl">
							{track.name}
						</h2>
						<small class="text-sm tracking-wide text-neutral-400">
							{track.location}
						</small>
					</div>
					<span class="text-2xl font-bold text-[#ff1e00]">&gt;</span>
				</div>
			{/each}
		</div>
	</div>
</div>
