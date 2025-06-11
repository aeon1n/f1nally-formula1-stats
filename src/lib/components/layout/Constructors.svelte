<script lang="ts">
	import { getTeamInfo, type TeamInfo } from '$lib/teams';
	import { onMount } from 'svelte';
	import ConstructorItem from './ConstructorItem.svelte';
	import type { ConstructorStandings } from '$lib/types';
	import { getConstructorStandings } from '$lib/api/constructors';

	let constructors: ConstructorStandings[] | undefined;

	onMount(async () => {
		constructors = await getConstructorStandings();
	});
</script>

<h1 class="mt-8 mb-4 text-2xl font-bold">Constructors Standings</h1>
<div class="flex flex-col gap-3 md:flex-row">
	{#each constructors ?? [] as constructor}
		<ConstructorItem
			teamKey={constructor.Constructor.name}
			position={constructor.position}
			points={constructor.points}
		/>
	{/each}
</div>
