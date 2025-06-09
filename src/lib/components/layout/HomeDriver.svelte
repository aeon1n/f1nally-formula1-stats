<script lang="ts">
	import { getTeamInfo } from '$lib/teams';

	let { firstName, lastName, teamKey } = $props();
	const team = getTeamInfo(teamKey);
	const driver = team?.drivers.find((d) => d.name === firstName + ' ' + lastName);
</script>

<div
	class="flex w-full cursor-pointer items-center gap-4 rounded-xl bg-neutral-900 px-4 py-2 shadow-lg backdrop-blur-lg transition hover:scale-101 hover:shadow-xl"
>
	<div class="relative">
		<img
			src={driver?.name === 'Franco Colapinto'
				? `https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/colapinto`
				: `https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/${lastName}`}
			alt="Portrait of Formula 1 Driver {firstName} {lastName}"
			class="h-auto w-24 rounded-full border-3 border-neutral-800 object-cover transition-transform duration-300 hover:scale-110"
		/>
		<img
			src={team?.logo}
			alt="{team?.name} Logo"
			class="absolute right-0 bottom-0 h-8 w-8 rounded-full border-2 bg-white p-1 shadow {team?.name ===
			'Haas F1 Team'
				? `border-red-600`
				: `border-${team?.color}`}"
		/>
	</div>
	<div class="w-full">
		<div class="flex w-full items-center justify-between gap-2">
			<div class="flex items-center gap-3">
				<span class="block h-14 w-[6px] rounded bg-{team?.color}"></span>
				<div class="flex flex-col">
					<h2 class="text-md font-semibold tracking-wide text-neutral-200 md:text-lg">
						{firstName}
						<span class="block text-xl font-extrabold text-white drop-shadow md:text-2xl"
							>{lastName}</span
						>
					</h2>
				</div>
			</div>
			<div>
				<span class="fi fi-{driver?.nationality.toLowerCase()} rounded-sm text-4xl drop-shadow"
				></span>
			</div>
		</div>
	</div>
</div>
