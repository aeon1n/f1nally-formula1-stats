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

<h2 class="mt-6 mb-4 text-2xl font-bold">Drivers</h2>
<div class="grid gap-4 lg:grid-cols-2">
	{#each drivers as driver}
		<DriverItem
			firstName={driver.givenName}
			lastName={driver.familyName}
			teamKey={driver.constructor}
		/>
	{/each}
</div>
