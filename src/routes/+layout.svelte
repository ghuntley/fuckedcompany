<script lang="ts">
	import '$lib/styles/tokens.css';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/animations.css';

	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<title>☠ FuckedCompany.com — AI Dead Pool</title>
	<meta name="description" content="Official Lubricant of the AI Economy. Tracking humans replaced by AI." />
	<!-- RSS and sitemap links added when those routes exist -->
	<!-- <link rel="alternate" type="application/rss+xml" title="FuckedCompany RSS" href="/rss.xml" /> -->
	<!-- <link rel="sitemap" href="/sitemap.xml" /> -->
</svelte:head>

<div class="site-container">
	{@render children()}
</div>
