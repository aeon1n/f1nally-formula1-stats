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

<h2 class="mt-6 mb-2 text-2xl font-extrabold text-gray-200 md:text-3xl">Team Rankings</h2>
<p class="mb-6 font-semibold text-gray-400 md:text-lg">
	Up-to-date standings of all F1 constructors.
</p>
<div class="flex flex-col gap-4 md:flex-row md:gap-3">
	{#each constructors ?? [] as constructor}
		<ConstructorItem
			teamKey={constructor.Constructor.name}
			position={constructor.position}
			points={constructor.points}
		/>
	{/each}
</div>
