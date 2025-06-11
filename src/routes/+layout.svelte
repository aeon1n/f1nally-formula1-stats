<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header
	class="fixed top-0 left-0 z-50 flex w-full items-center items-center justify-between bg-black/80 px-6 py-4 text-white shadow-xl backdrop-blur-md transition-all duration-300 md:px-12 xl:px-24 2xl:px-48"
>
	<!-- Logo / Brand -->
	<div>
		<a href="/">
			<h1 class="text-2xl font-extrabold tracking-wide">
				<span class="text-red-600">F1</span><span class="text-white">Stats</span>
			</h1>
		</a>
	</div>

	<!-- Navigation -->
	<nav
		class="font-heading flex items-center gap-2 text-sm font-semibold text-white/80 sm:gap-4 sm:text-base md:gap-6"
	>
		<a
			href="/#races"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
		>
			Races
		</a>
		<a
			href="/#drivers"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
		>
			Drivers
		</a>
		<a
			href="/#standings"
			class="rounded-md px-3 py-1.5 transition-all duration-150 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
		>
			Standings
		</a>
	</nav>
</header>

<main class=" py-20">
	{@render children()}
</main>
