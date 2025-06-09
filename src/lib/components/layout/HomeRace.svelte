<script lang="ts">
	let { gpName, gpYear, gpImg, gpDate, current } = $props();
</script>

<div
	class="group relative min-h-60 cursor-pointer rounded-md bg-center duration-200 ease-in-out hover:scale-101"
	style="background-image: url('{gpImg}')"
>
	<div
		class="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-neutral-900/40 to-black/90 duration-200 ease-in-out group-hover:to-black"
	></div>
	<div
		class="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center text-4xl font-bold"
	>
		{gpName}
		<span class="block text-5xl font-black">{gpYear}</span>
		<div class="mt-2 rounded-full bg-black px-3 py-1 text-xs">{gpDate}</div>
	</div>
</div>
