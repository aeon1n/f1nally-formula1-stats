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
		<h2 class="text-2xl font-extrabold text-white md:text-3xl">#{position}</h2>
		<div class="flex items-center gap-2">
			<span class="text-2xl font-black text-white">{points}</span>
			<span
				class="rounded-md bg-black px-2 py-1 text-xs font-semibold text-gray-300 uppercase md:text-sm"
			>
				Pts
			</span>
		</div>
	</div>

	<!-- Team Name & Logo -->
	<div class="mt-3 flex items-center justify-between md:mt-5">
		<div class="flex items-center gap-3">
			<span class="block h-6 w-[6px] rounded-full md:h-8 bg-{team?.color}"></span>
			<h2 class="text-2xl font-bold text-white">{team?.name}</h2>
		</div>
		<img
			src={team?.logo}
			class="h-8 h-8 object-contain md:h-10 md:w-10"
			alt={`${team?.name} Logo`}
		/>
	</div>

	<!-- Drivers -->
	<div class="grid grid-cols-2 gap-4 md:mt-4">
		{#each team?.drivers ?? [] as driver}
			<div
				class="flex hidden flex-col items-start rounded-md border border-neutral-700 bg-neutral-800/30 px-3 py-2 text-white hover:scale-102 md:block"
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
