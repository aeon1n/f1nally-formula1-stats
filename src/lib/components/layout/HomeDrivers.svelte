<script lang="ts">
	import HomeDriver from '$lib/components/layout/HomeDriver.svelte';

	const Driver = HomeDriver;
</script>

<div class="mt-6">
	<h2 class="text-2xl font-bold">Drivers</h2>
	<Driver
		firstName="Lewis"
		lastName="Hamilton"
		img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hamilton"
		nationality="🇬🇧"
	/>
	<Driver
		firstName="Charles"
		lastName="Leclerc"
		img="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc"
		nationality="🇲🇨"
	/>
</div>
