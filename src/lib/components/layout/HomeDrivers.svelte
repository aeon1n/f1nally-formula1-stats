<script lang="ts">
	import { getDrivers } from '$lib/api';
	import HomeDriver from '$lib/components/layout/HomeDriver.svelte';
	import type { Driver } from '$lib/types';
	import { onMount } from 'svelte';

	const DriverItem = HomeDriver;

	let drivers: Driver[] = [];

	onMount(async () => {
		const fetchedDrivers = await getDrivers();
		drivers = fetchedDrivers
			.filter((d) => d.familyName.toLowerCase() !== 'doohan')
			.sort((a, b) => a.constructor.localeCompare(b.constructor));
	});
</script>

<div id="drivers">
	<h2 class="mb-2 text-2xl font-extrabold text-gray-200 md:text-3xl">Meet the Grid</h2>
	<p class="mb-6 font-semibold text-gray-400 md:text-lg">Discover F1 driver stats and stories.</p>
	<div class="grid gap-4 lg:grid-cols-2">
		{#each drivers as driver}
			<a href={`/drivers/${driver.familyName.toLocaleLowerCase()}`}>
				<DriverItem
					firstName={driver.givenName}
					lastName={driver.familyName}
					teamKey={driver.constructor}
				/>
			</a>
		{/each}
	</div>
</div>
