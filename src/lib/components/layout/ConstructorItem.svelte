<script lang="ts">
	import { getTeamInfo, type TeamInfo } from '$lib/teams';
	import { onMount } from 'svelte';

	let { teamKey, position, points } = $props();

	const team = getTeamInfo(teamKey);

	onMount(() => {});
</script>

<div
	class="w-full rounded-xl bg-gradient-to-b from-{team?.color} via-neutral-900 to-neutral-900 px-6 py-5 shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.02]"
>
	<!-- Position and Points -->
	<div class="flex w-full items-center justify-between">
		<h2 class="text-3xl font-extrabold text-white">#{position}</h2>
		<div class="flex items-center gap-2">
			<span class="text-2xl font-black text-white">{points}</span>
			<span class="rounded-md bg-black px-2 py-1 text-sm font-semibold text-gray-300 uppercase">
				Pts
			</span>
		</div>
	</div>

	<!-- Team Name & Logo -->
	<div class="mt-5 flex items-center justify-between">
		<div class="flex items-center gap-3">
			<span class="block h-8 w-[6px] rounded-full bg-{team?.color}"></span>
			<h2 class="text-2xl font-bold text-white">{team?.name}</h2>
		</div>
		<img src={team?.logo} class="h-10 w-10 object-contain" alt={`${team?.name} Logo`} />
	</div>

	<!-- Drivers -->
	<div class="mt-4 grid grid-cols-2 gap-4">
		{#each team?.drivers ?? [] as driver}
			<div
				class="flex hidden flex-col items-start rounded-md border border-neutral-700 bg-neutral-800/30 px-3 py-2 text-white md:block"
			>
				<a href={`/drivers/${driver.name.split(' ')[1]}`}>
					<span class="text-sm">{driver.name.split(' ')[0]}</span>
					<span class="text-lg font-semibold">{driver.name.split(' ')[1]}</span>
				</a>
			</div>
		{/each}
	</div>

	<!-- Car Image -->
	<div class="mt-4 flex w-full items-center justify-center">
		<img src={team?.carImg} alt={`${team?.name} F1 Car`} class="max-h-32 object-contain" />
	</div>
</div>
