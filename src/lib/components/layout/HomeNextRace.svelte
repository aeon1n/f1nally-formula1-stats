<script lang="ts">
	import { getTrackPoster } from '$lib/utils';

	let {
		raceName,
		Circuit,
		round,
		time,
		date,
		Qualifying,
		FirstPractice,
		SecondPractice,
		ThirdPractice
	} = $props();
</script>

<div
	class="relative mx-auto flex min-h-[55vh] w-full items-center justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg md:min-h-[45vh]"
	style="background-image: url('{getTrackPoster(Circuit.circuitName)}')"
>
	<div class="absolute inset-0 bg-black/50"></div>

	<div
		class="relative z-10 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between"
	>
		<div class="flex flex-col gap-2 md:basis-3/4">
			<span
				class="inline-block w-fit rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold tracking-wide text-black shadow"
				>Round {round}</span
			>
			<h2 class="text-3xl leading-tight font-bold md:text-4xl">{raceName}</h2>
			<div class="flex gap-2 text-lg font-semibold text-gray-200">
				<h3>27 - 29 Jun</h3>
				<span>-</span>
				<h3 class="flex items-center gap-2">
					{Circuit.circuitName} <span class="">&gt;</span>
				</h3>
			</div>
			<div class="w-full md:w-auto">
				<div class="mt-2 flex flex-col gap-2 md:flex-row">
					<button
						class="text-md flex basis-1/2 cursor-pointer items-center justify-center gap-2 rounded-md bg-black px-6 py-2 text-sm font-bold md:basis-auto"
					>
						<i>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								/>
							</svg>
						</i>
						Add to Calendar
					</button>
					<button
						class="text-md flex basis-1/2 cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-2 text-sm font-bold text-black md:basis-auto"
					>
						<i>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
								/>
							</svg>
						</i>
						Streaming options
					</button>
				</div>
			</div>
		</div>

		<div class="mt-6 basis-2/4 rounded-lg bg-black/85 p-4 shadow-md md:basis-2/6">
			<ul class="space-y-2 text-sm">
				<li class="flex justify-between">
					<span class="min-w-[25%] font-bold">Practice 1</span>
					<span class="text-gray-300">Thu</span>
					<span
						class="min-w-[40%] rounded-lg bg-neutral-800 px-4 py-1 text-center font-bold text-white"
						>{FirstPractice.time.slice(0, 5)}</span
					>
				</li>
				<li class="flex justify-between">
					<span class="min-w-[25%] font-bold">Practice 2</span>
					<span class="text-gray-300">Fri</span><span
						class="min-w-[40%] rounded-lg bg-neutral-800 px-4 py-1 text-center font-bold text-white"
						>{SecondPractice.time.slice(0, 5)}</span
					>
				</li>
				<li class="flex justify-between">
					<span class="text-md min-w-[25%] font-bold">Practice 3</span>
					<span class="text-gray-300">Fri</span><span
						class="min-w-[40%] rounded-lg bg-neutral-800 px-4 py-1 text-center font-bold text-white"
						>{ThirdPractice.time.slice(0, 5)}</span
					>
				</li>
				<hr class="my-2 border-t-2 border-gray-500 opacity-50" />
				<li class="flex justify-between">
					<span class="min-w-[25%] font-bold">Qualifying</span>
					<span class="text-gray-300">Sat</span><span
						class="min-w-[40%] rounded-lg bg-neutral-800 px-4 py-1 text-center font-bold text-white"
						>{Qualifying.time.slice(0, 5)}
					</span>
				</li>
				<li class="flex justify-between text-white">
					<span class="min-w-[25%] font-bold">Race</span>
					<span class="text-gray-300">Sun</span>
					<span
						class="min-w-[40%] rounded-lg bg-neutral-800 px-4 py-1 text-center font-bold text-white"
					>
						{time.slice(0, 5)}
					</span>
				</li>
			</ul>
		</div>
	</div>
</div>
