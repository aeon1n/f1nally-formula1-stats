<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header class="flex h-12 items-center justify-between bg-black px-6 py-8 text-white">
	<div>
		<h1 class="text-lg font-bold text-red-600">f1<span class="text-white">nally</span></h1>
	</div>
	<nav>
		<ul class="flex gap-2">
			<li>home</li>
			<li>driver</li>
			<li>races</li>
			<li>results</li>
			<li>circuits</li>
		</ul>
	</nav>
</header>
<main class="px-6 py-3">
	{@render children()}
</main>
