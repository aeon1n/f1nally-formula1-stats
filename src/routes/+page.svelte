<script lang="ts">
	import HomeDrivers from '$lib/components/layout/HomeDrivers.svelte';
	import HomeDriverStandings from '$lib/components/layout/HomeDriverStandings.svelte';
	import HomeRaces from '$lib/components/layout/HomeRaces.svelte';
</script>

<!--HOME-->

<div class="px-6 md:px-12 xl:px-24 2xl:px-48">
	<HomeRaces />
	<HomeDrivers />
	<HomeDriverStandings />
</div>
