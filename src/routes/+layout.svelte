<script lang="ts">
	import '$lib/styles/tokens.css';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/animations.css';

	import SiteHeader from '$lib/components/organisms/SiteHeader.svelte';
	import SiteFooter from '$lib/components/organisms/SiteFooter.svelte';
	import { getBodyCount } from '$lib/content';

	let { children } = $props();

	const bodyCount = getBodyCount();
</script>

<svelte:head>
	<title>☠ FuckedCompany.com — AI Dead Pool</title>
	<meta name="description" content="Official Lubricant of the AI Economy. Tracking humans replaced by AI." />
	<link rel="alternate" type="application/rss+xml" title="FuckedCompany RSS" href="/rss.xml" />
	<link rel="sitemap" href="/sitemap.xml" />
</svelte:head>

<div class="site-container">
	<SiteHeader {bodyCount} />
	<main>
		{@render children()}
	</main>
	<SiteFooter />
</div>

<style>
	main {
		padding: var(--space-4);
		min-height: 400px;
	}
</style>
