<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header
	class="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-2 border-black/50 bg-black/75 px-6 py-4 text-white shadow-xl backdrop-blur-lg transition-all duration-300"
>
	<div>
		<h1 class="text-lg font-bold text-red-600">f1<span class="text-white"> stats</span></h1>
	</div>

	<nav
		class="font-heading flex items-center gap-3 text-sm font-bold text-white/80 sm:gap-6 sm:text-base"
	>
		<a
			href="/"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
			>Home</a
		>
		<a
			href="/drivers"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
			>Drivers</a
		>
		<a
			href="/races"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
			>Races</a
		>
		<a
			href="/standings"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
			>Standings</a
		>
	</nav>
</header>
<main class="px-6 py-20">
	{@render children()}
</main>
