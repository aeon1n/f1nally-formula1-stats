<script lang="ts">
	import { getTeamInfo, type TeamInfo } from '$lib/teams';
	import { onMount } from 'svelte';

	let { teamKey, position, points } = $props();

	const team = getTeamInfo(teamKey);

	onMount(() => {});
</script>

<div
	class="w-full rounded-md bg-gradient-to-t from-{team?.color} via-neutral-900 to-neutral-900 px-8 py-4 duration-200 ease-in-out hover:scale-102"
>
	<div class="flex w-full justify-between">
		<h2 class="text-3xl font-black">#{position}</h2>
		<div class="flex flex-row gap-2">
			<span class="text-2xl font-black">{points}</span>
			<span
				class="flex items-center justify-center rounded-md bg-black px-2 py-1 text-sm font-bold text-gray-300 uppercase"
				>Pts</span
			>
		</div>
	</div>
	<div class="mt-4 flex justify-between">
		<div class="flex gap-3">
			<span class="block h-8 w-[6px] rounded bg-{team?.color}"></span>
			<h2 class="text-2xl font-bold">{team?.name}</h2>
		</div>
		<img src={team?.logo} class="w-8" alt={`${team?.name} Logo`} />
	</div>
	<div class="mt-3 flex gap-4">
		{#each team?.drivers ?? [] as driver}
			<div
				class="flex basis-1/2 flex-col rounded-br-md border-r-2 border-b-2 border-neutral-400 py-2"
			>
				<a href={`/drivers/${driver.name.split(' ')[1]}`}>
					<span>{driver.name.split(' ')[0]}</span>
					<span class="text-xl font-bold">{driver.name.split(' ')[1]}</span>
				</a>
			</div>
		{/each}
	</div>
	<div class="mt-2 flex w-full items-center justify-center">
		<img src={team?.carImg} alt={`${team?.name} F1 Car`} />
	</div>
</div>
