<script lang="ts">
	import { getTeamInfo } from '$lib/teams';
	export let position: number;
	export let driverName: string;
	export let teamKey: string;
	export let points: number;

	const team = getTeamInfo(teamKey);
	const driver = team?.drivers.find((d) => d.name === driverName);
</script>

<div
	class={`h-13 w-full rounded-md bg-${team?.color ?? 'bg-gray-500'} ${
		team?.name === 'Haas F1 Team' ? 'text-red-600' : 'text-white'
	}`}
>
	<div class="flex w-full items-center gap-2 px-3">
		<h2
			class="flex shrink-0 grow-0 basis-[10%] items-center justify-center text-3xl leading-none font-black md:basis-[3%]"
		>
			<span class="text-4xl drop-shadow-md">{position}</span>
			<sup class="align-super text-base font-bold drop-shadow-md">
				{#if position === 1}
					st
				{:else if position === 2}
					nd
				{:else if position === 3}
					rd
				{:else}
					th
				{/if}
			</sup>
		</h2>
		<img src={driver?.imgTransparent} class="h-auto w-13 shrink-0" alt="driver portrait" />
		<span class="w-full truncate text-2xl font-black md:ml-6">{driverName}</span>
		<img src={team?.logo} alt="{team?.name} logo" class="h-6 shrink-0" />
		<div
			class="flex shrink-0 grow-0 basis-[20%] items-center justify-end gap-1 text-right md:basis-[6%]"
		>
			<strong class="text-3xl">{points}</strong>
			<span>Pts</span>
		</div>
	</div>
</div>
