<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>

		<svg viewBox="0 0 100 100"aria-hidden="true" style="width: 48px; height: 48px;">
			<path d="M100,100 C70,90 30,50 0,0 L100,0 Z"/>
		</svg>

		<!--
		Izquierda:

		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		
		Derecha:

		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
		-->

		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/todo' ? 'page' : undefined}>
				<a href="/to-do">To-do</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
		
		<svg viewBox="0 0 100 100" aria-hidden="true" style="width: 48px; height: 48px;">
			<path d="M0,100 C30,90 70,50 100,0 L0,0 Z"/>
		</svg>
		
		
	</nav>

	<div class="right-corner">
		<a href="https://github.com/sergio-tr">
			<img src={github} alt="Personal GitHub" />
		</a>
		<a href="https://linkedin.com/in/sergiotr74/">
			<img src={linkedin} alt="Personal Linkedin" />
		</a>
		
	</div>
</header>
