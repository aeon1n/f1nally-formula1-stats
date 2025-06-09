<script>
	import HomeRace from './HomeRace.svelte';
</script>

<div>
	<div class="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
		<HomeRace
			gpImg="https://motorcyclesports.net/wp-content/uploads/2025/04/202504Monaco-Grand-Prix.jpeg"
			gpName="Monaco"
			gpYear="2025"
			gpDate="27 - 29 Jun"
			current={false}
		/>
		<HomeRace
			gpImg="https://f1rst-motors.s3.me-central-1.amazonaws.com/cars/1719846380091-2025%20Austrian%20F1%20Grand%20Prix%20George%20Russell%20Wins%203.webp"
			gpName="Austria"
			gpYear="2025"
			gpDate="27 - 29 Jun"
			current={true}
		/>
		<HomeRace
			gpImg="https://f1rst-motors.s3.me-central-1.amazonaws.com/cars/1719846380091-2025%20Austrian%20F1%20Grand%20Prix%20George%20Russell%20Wins%203.webp"
			gpName="Austria"
			gpYear="2025"
			gpDate="27 - 29 Jun"
			current={false}
		/>
		<HomeRace
			gpImg="https://motorcyclesports.net/wp-content/uploads/2025/04/202504Monaco-Grand-Prix.jpeg"
			gpName="Monaco"
			gpYear="2025"
			gpDate="27 - 29 Jun"
			current={false}
		/>
	</div>
</div>
