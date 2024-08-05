<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; 2024 Sergio Truébano Robles. All rights reserved.</p>
	</footer>
</div>
