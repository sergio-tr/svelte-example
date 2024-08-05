<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>


	<h2> Here is a counter representing various Svelte features</h2>

	<p class="description">
		This counter component below is a simple example to demonstrate Svelte's reactivity. Click the buttons to increase or decrease the count and see how Svelte efficiently updates the DOM dynamically.
	</p>
	
	<Counter />

	<p class="call-to-action">
		Want to learn more? Check out the official <a href="https://svelte.dev" target="_blank">Svelte documentation</a> for tutorials and guides.
	</p>
	
</section>
