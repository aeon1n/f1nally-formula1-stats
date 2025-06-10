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

<div class="mt-6">
	<h2 class="text-2xl font-bold">Standings</h2>
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
