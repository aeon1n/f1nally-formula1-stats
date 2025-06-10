<script lang="ts">
	import { onMount } from 'svelte';
	import HomeRace from './HomeRace.svelte';
	import { getRaces } from '$lib/api';
	import HomeNextRace from './HomeNextRace.svelte';
	import type { Race } from '$lib/types';
	import { getTrackPoster } from '$lib/utils';

	let races: Race[] = $state([]);
	let currentRace: Race | undefined = $state();
	let nextRace: Race | undefined;

	onMount(async () => {
		races = await getRaces();

		nextRace = getNextRace(races);
		selectRace(nextRace);

		setTimeout(() => {
			const currentGpElement = document.querySelector('.current-gp') as HTMLElement | null;
			const raceScrollContainer = document.getElementById('race-scroll');

			if (currentGpElement && raceScrollContainer) {
				raceScrollContainer.scrollTo({
					left: currentGpElement.offsetLeft - raceScrollContainer.offsetWidth / 2,
					behavior: 'smooth'
				});
			}
		}, 100);
	});

	function selectRace(race: Race | undefined) {
		currentRace = race;
		console.log(currentRace);
	}

	function getNextRace(races: Race[]): Race | undefined {
		let currentDate = new Date();

		return races.find((race) => new Date(race.date) > currentDate);
	}
</script>

{#if currentRace}
	<HomeNextRace {...currentRace} />
{:else}
	<p>Loading next race...</p>
{/if}

<div
	id="race-scroll"
	class="scrollbar-hidden w-full snap-x snap-mandatory overflow-x-auto scroll-smooth py-6"
>
	<div class="flex min-w-full space-x-4">
		{#each races as race}
			<div
				role="button"
				tabindex="0"
				class="w-full shrink-0 snap-start {race === currentRace ? 'md:w-4/12' : 'md:w-3/12'}"
				onclick={() => selectRace(race)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						selectRace(race);
					}
				}}
			>
				<HomeRace
					gpImg={getTrackPoster(race.Circuit.circuitName)}
					gpName={race.Circuit.Location.country}
					gpYear="2025"
					gpDate={`${new Date(race.date).getDate().toString().padStart(2, '0')} - ${(
						new Date(race.date).getDate() + 2
					)
						.toString()
						.padStart(2, '0')} ${new Date(race.date).toLocaleString('en-GB', {
						month: 'short'
					})}`}
					current={race === currentRace}
				/>
			</div>
		{/each}
	</div>
</div>
