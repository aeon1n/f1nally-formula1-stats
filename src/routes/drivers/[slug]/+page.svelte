<script lang="ts">
	import { getDriver } from '$lib/api';
	import { getTeamInfo } from '$lib/teams';
	import type { Standing } from '$lib/types.js';
	import type { Driver, TeamInfo } from '$lib/teams.js';
	import { onMount } from 'svelte';

	export let data;

	let driver: Standing;
	let team: TeamInfo | undefined;
	let driverInfo: Driver | undefined;

	onMount(async () => {
		driver = await getDriver(data.slug.toLowerCase());

		if (driver.Constructors?.length) {
			const teamKey = driver.Constructors[0].name.toLowerCase().replace(/\s+/g, '');
			team = getTeamInfo(teamKey);
			driverInfo = team?.drivers.find(
				(d) => d.name === `${driver.Driver.givenName} ${driver.Driver.familyName}`
			);
		}
	});
</script>

{#if driver}
	<div class="px-6 md:px-12 xl:px-24 2xl:px-48">
		<div class="flex w-full flex-col rounded-xl bg-neutral-900 shadow-lg md:flex-row">
			<div
				class="relative h-[55vh] overflow-hidden rounded-t-xl md:w-[45%] md:rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl"
			>
				<img
					src={driverInfo?.name === 'Franco Colapinto'
						? `https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/colapinto`
						: `https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/${driver.Driver.familyName}`}
					alt={`Portrait of Formula 1 Driver ${driverInfo?.name}`}
					class="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
				/>

				<div
					class="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"
				></div>

				<div class="absolute bottom-4 left-4 z-10 flex w-full items-center gap-4 text-white">
					<div class="flex w-full flex-col">
						<div class="mt-4 grid grid-cols-3 gap-4 text-center">
							<div>
								<p class="text-2xl font-bold text-white md:text-3xl">{driver.position}</p>
								<p class="text-xs text-gray-400">Position</p>
							</div>
							<div>
								<p class="text-2xl font-bold text-white md:text-3xl">{driver.points}</p>
								<p class="text-xs text-gray-400">Points</p>
							</div>
							<div>
								<p class="text-2xl font-bold text-white md:text-3xl">{driver.wins}</p>
								<p class="text-xs text-gray-400">Wins</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full">
				<div class="flex w-full justify-between px-6 pt-4 pb-2">
					<div class="flex flex-row items-center gap-4">
						<h2 class="text-2xl font-black text-neutral-400 md:text-3xl">
							{driver.Driver.permanentNumber}
						</h2>
						<div class="flex items-center gap-1">
							<span class="block h-6 w-[6px] rounded md:h-8 bg-{team?.color} mr-3"></span>
							<h3 class="text-xl font-medium text-neutral-200 md:text-3xl">
								{driver.Driver.givenName}
							</h3>
							<h2 class="text-xl font-black md:text-3xl">{driver.Driver.familyName}</h2>
						</div>
					</div>
					<span
						class="fi fi-{driverInfo?.nationality.toLowerCase()} rounded-sm text-xl drop-shadow md:text-4xl"
					></span>
				</div>
				<div class="flex min-h-auto w-full items-center">
					<div class="mb-4 ml-22 flex items-center justify-center md:ml-24">
						<span class="ml-2 text-lg font-bold md:text-xl">{team?.name} F1 Team</span>
					</div>
				</div>
				{#if driverInfo?.desc}
					<hr class="border-t border-neutral-700 opacity-70" />
					<div class="px-6 py-5 text-base leading-relaxed text-neutral-200">
						<p class="prose prose-invert max-w-none font-semibold">
							{@html driverInfo.desc}
						</p>
					</div>
				{/if}

				<hr class="border-t border-neutral-700 opacity-70" />

				<div class="px-6 py-5">
					<ul class="flex flex-col gap-3 text-neutral-100">
						<li class="flex justify-between">
							<span class="font-semibold text-neutral-400">Driver Code:</span>
							<span class="font-bold md:text-lg">{driver.Driver.code}</span>
						</li>
						<li class="flex justify-between">
							<span class="font-semibold text-neutral-400">Date of Birth:</span>
							<span class="font-bold md:text-lg">
								{new Date(driver.Driver.dateOfBirth).toLocaleDateString()}
							</span>
						</li>
						<li class="flex justify-between">
							<span class="font-semibold text-neutral-400">Nationality:</span>
							<span class="font-bold md:text-lg">{driver.Driver.nationality}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
{:else}
	<p class="mt-8 text-center text-gray-400">Loading...</p>
{/if}
