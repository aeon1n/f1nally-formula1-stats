<script>
	import HomeDriverStanding from './HomeDriverStanding.svelte';
</script>

<div class="mt-6">
	<h2 class="text-2xl font-bold">Standings</h2>
	<div class="mt-4 flex w-full flex-col gap-3">
		<HomeDriverStanding position={1} driverName="Oscar Piastri" teamKey="mclaren" points={144} />
		<HomeDriverStanding position={2} driverName="Lando Norris" teamKey="mclaren" points={122} />
		<HomeDriverStanding position={3} driverName="Max Verstappen" teamKey="redbull" points={90} />
	</div>
</div>
