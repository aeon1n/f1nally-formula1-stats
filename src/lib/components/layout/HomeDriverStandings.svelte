<script lang="ts">
	import { getDriverStandings } from '$lib/api';
	import type { Standing } from '$lib/types';
	import HomeDriverStanding from './HomeDriverStanding.svelte';

	import { onMount } from 'svelte';

	let standings: Standing[] = [];

	onMount(async () => {
		standings = (await getDriverStandings()).slice(0, 10);
	});
</script>

<div class="mt-6" id="standings">
	<h2 class="mb-2 text-2xl font-extrabold text-gray-200 md:text-3xl">Driver Rankings</h2>
	<p class="mb-6 font-semibold text-gray-400 md:text-lg">
		Top 10 driver standings this season so far.
	</p>
	<div class="mt-4 flex w-full flex-col gap-3">
		{#each standings as standing, i}
			<HomeDriverStanding
				position={i + 1}
				driverName={`${standing.Driver.givenName} ${standing.Driver.familyName}`}
				teamKey={standing.Constructors?.[0]?.name.toLowerCase().replace(/\s+/g, '') || ''}
				points={Number(standing.points)}
			/>
		{/each}
	</div>
</div>
