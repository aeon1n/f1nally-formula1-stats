<script lang="ts">
	let { firstName, lastName, img, nationality } = $props();
</script>

<div
	class="mt-4 flex w-full cursor-pointer items-center gap-4 rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 shadow-xl backdrop-blur-lg transition hover:scale-101 hover:from-red-900 hover:to-red-950 hover:shadow-2xl"
>
	<div class="relative">
		<img
			src={img}
			alt="Portrait of Formula 1 Driver Lewis Hamilton"
			class="border-gradient-to-tr h-24 w-24 rounded-full border-4 from-red-500 via-black to-gray-300 object-cover transition-transform duration-300 hover:scale-110"
		/>
		<img
			src="https://media.formula1.com/content/dam/fom-website/teams/2025/ferrari-logo.png"
			alt="Ferarri Logo"
			class="absolute right-0 bottom-0 h-8 w-8 rounded-full bg-white p-1 shadow-md"
		/>
	</div>
	<div class="w-full">
		<div class="flex w-full items-center justify-between gap-2 pl-4">
			<div class="flex items-center gap-3">
				<span class="block h-14 w-[6px] rounded bg-gradient-to-b from-red-500 to-black"></span>
				<div class="flex flex-col">
					<h2 class="text-lg font-semibold tracking-wide text-neutral-200">
						{firstName}
						<span class="block text-2xl font-extrabold text-white drop-shadow">{lastName}</span>
					</h2>
				</div>
			</div>
			<div>
				<span class="text-5xl drop-shadow">{nationality}</span>
			</div>
		</div>
	</div>
</div>
