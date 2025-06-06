<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header
	class="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-2 border-black/50 bg-black/75 px-6 py-5 text-white shadow-xl backdrop-blur-lg transition-all duration-300"
>
	<div>
		<h1 class="text-lg font-bold text-red-600">f1<span class="text-white"> stats</span></h1>
	</div>

	<nav class="text-md font-heading flex items-center gap-4 font-bold text-white/90">
		<a
			href="/"
			class="text-red-600 transition-colors duration-200 hover:scale-101 hover:text-red-600">Home</a
		>
		<a href="/races" class="transition-colors duration-200 hover:scale-101 hover:text-red-600"
			>Drivers</a
		>
		<a href="/races" class="transition-colors duration-200 hover:scale-101 hover:text-red-600"
			>Races</a
		>
		<a href="/about" class="transition-colors duration-200 hover:scale-101 hover:text-red-600"
			>Standings</a
		>
	</nav>
</header>
<main class="px-6 py-20">
	{@render children()}
</main>
