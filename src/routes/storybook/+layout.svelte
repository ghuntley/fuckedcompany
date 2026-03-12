<script lang="ts">
	import '$lib/styles/tokens.css';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/animations.css';

	let { children } = $props();

	const sections = [
		{ href: '/storybook', label: '📋 Overview' },
		{ href: '/storybook/tokens', label: '🎨 Tokens' },
		{ href: '/storybook/atoms', label: '⚛️ Atoms' },
		{ href: '/storybook/molecules', label: '🧬 Molecules' },
		{ href: '/storybook/organisms', label: '🦠 Organisms' }
	];
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<title>Storybook — FuckedCompany Design System</title>
</svelte:head>

<div class="storybook-layout">
	<nav class="storybook-sidebar">
		<div class="storybook-logo">
			<span class="logo-text">💀 STORYBOOK</span>
			<span class="logo-sub">Design System</span>
		</div>
		<ul class="storybook-nav">
			{#each sections as section}
				<li>
					<a href={section.href} class="storybook-link">{section.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<main class="storybook-main">
		{@render children()}
	</main>
</div>

<style>
	.storybook-layout {
		display: flex;
		min-height: 100vh;
		max-width: 1200px;
		margin: 0 auto;
	}
	.storybook-sidebar {
		width: 200px;
		background: var(--color-bg-panel);
		border-right: var(--border-panel);
		padding: var(--space-4);
		flex-shrink: 0;
	}
	.storybook-logo {
		text-align: center;
		margin-bottom: var(--space-4);
		padding-bottom: var(--space-4);
		border-bottom: 1px solid var(--color-border-table);
	}
	.logo-text {
		display: block;
		font-family: var(--font-family-heading);
		font-size: var(--font-size-md);
		color: var(--color-text-heading);
		text-shadow: var(--glow-cyan);
	}
	.logo-sub {
		display: block;
		font-family: var(--font-family-fun);
		font-size: var(--font-size-xs);
		color: var(--color-text-muted);
	}
	.storybook-nav {
		list-style: none;
	}
	.storybook-nav li {
		margin-bottom: var(--space-2);
	}
	.storybook-link {
		color: var(--color-link);
		text-decoration: none;
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		display: block;
		padding: var(--space-1) var(--space-2);
		border-radius: 0;
	}
	.storybook-link:hover {
		background: var(--color-bg-panel-alt);
		color: var(--color-link-hover);
	}
	.storybook-main {
		flex: 1;
		padding: var(--space-5);
		overflow-x: auto;
	}
</style>
