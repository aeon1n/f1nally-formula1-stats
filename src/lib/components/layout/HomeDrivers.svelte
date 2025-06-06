<script lang="ts">
	import { getDrivers } from '$lib/api';
	import HomeDriver from '$lib/components/layout/HomeDriver.svelte';
	import type { Driver } from '$lib/types';
	import { onMount } from 'svelte';

	const DriverItem = HomeDriver;

	let drivers: Driver[] = [];

	onMount(async () => {
		drivers = await getDrivers();
	});
</script>

<div class="mt-6">
	<h2 class="text-2xl font-bold">Drivers</h2>
	<!-- 	<Driver firstName="Lando" lastName="Norris" teamKey="mclaren" />
	<Driver firstName="Oscar" lastName="Piastri" teamKey="mclaren" />
	<Driver firstName="Max" lastName="Verstappen" teamKey="redbull" />
	<Driver firstName="Yuki" lastName="Tsunoda" teamKey="redbull" />
	<Driver firstName="Lewis" lastName="Hamilton" teamKey="ferrari" />
	<Driver firstName="Charles" lastName="Leclerc" teamKey="ferrari" /> -->

	{#each drivers as driver}
		<DriverItem
			firstName={driver.givenName}
			lastName={driver.familyName}
			teamKey={driver.constructor}
		/>
	{/each}
</div>
