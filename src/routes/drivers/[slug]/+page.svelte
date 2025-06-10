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
		<a href="/" data-sveltekit-noscroll>back</a>
		<div
			class="w-full rounded-xl bg-neutral-900 px-6 py-6 shadow-lg backdrop-blur-lg transition"
			style="border: 1px solid {team?.color || '#333'}"
		>
			<!-- Top Row -->
			<div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
				<!-- Driver Image -->
				<div class="relative">
					<img
						src={driverInfo?.imgTransparent ||
							'https://media.formula1.com/d_driver_fallback_image.png'}
						alt="Portrait of {driver.Driver.givenName} {driver.Driver.familyName}"
						class="h-28 w-28 rounded-full border-4 object-cover transition-transform duration-300 hover:scale-105"
						style="border-color: {team?.color || '#999'}"
					/>
					{#if team?.logo}
						<img
							src={team.logo}
							alt="{team.name} Logo"
							class="absolute right-0 bottom-0 h-8 w-8 rounded-full border-2 bg-white p-1 shadow"
							style="border-color: {team?.color || '#ccc'}"
						/>
					{/if}
				</div>

				<!-- Driver Info -->
				<div class="w-full flex-1">
					<!-- Name + Flag -->
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<span
								class="block h-12 w-1 rounded bg-white"
								style="background-color: {team?.color || '#fff'}"
							></span>
							<div>
								<h2 class="text-xl font-semibold text-neutral-200">{driver.Driver.givenName}</h2>
								<h1 class="text-3xl font-extrabold text-white drop-shadow">
									{driver.Driver.familyName}
								</h1>
							</div>
						</div>
						<!-- Nationality Flag -->
						<span class="fi fi-{driver.Driver.nationality.toLowerCase()} text-4xl"></span>
					</div>

					<!-- Team -->
					{#if team}
						<p class="mt-2 text-sm text-gray-400">Team: {team.name}</p>
					{/if}

					<!-- Stats -->
					<div class="mt-4 grid grid-cols-3 gap-4 text-center">
						<div>
							<p class="text-lg font-bold text-white">#{driver.position}</p>
							<p class="text-xs text-gray-400">Position</p>
						</div>
						<div>
							<p class="text-lg font-bold text-green-400">{driver.points}</p>
							<p class="text-xs text-gray-400">Points</p>
						</div>
						<div>
							<p class="text-lg font-bold text-yellow-400">{driver.wins}</p>
							<p class="text-xs text-gray-400">Wins</p>
						</div>
					</div>

					<!-- DOB -->
					<p class="mt-4 text-xs text-gray-500">Born: {driver.Driver.dateOfBirth}</p>
				</div>
			</div>
		</div>
	</div>
{:else}
	<p class="mt-8 text-center text-gray-400">Loading...</p>
{/if}
