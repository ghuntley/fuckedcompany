<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/pool', label: 'Dead Pool' },
		{ href: '/killist', label: 'Kill List' },
		{ href: '/cope', label: 'Cope Corner' },
		{ href: '/retraining', label: 'Retraining' },
		{ href: '/leaderboard', label: 'Leaderboard' },
		{ href: '/about', label: 'About' }
	];
</script>

<nav class="navbar">
	{#each links as link, i}
		{#if i > 0}
			<span class="separator"> | </span>
		{/if}
		<a
			href={link.href}
			class="nav-link"
			class:active={$page.url.pathname === link.href}
		>
			{link.label}
		</a>
	{/each}
</nav>

<style>
	.navbar {
		background: var(--color-bg-panel);
		padding: var(--space-2) var(--space-4);
		text-align: center;
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		border-top: 1px solid #330066;
		border-bottom: 1px solid #330066;
	}
	.nav-link {
		color: var(--color-link);
		text-decoration: underline;
	}
	.nav-link:visited {
		color: var(--color-link);
	}
	.nav-link:hover {
		color: var(--color-link-hover);
		text-shadow: var(--glow-cyan);
	}
	.nav-link.active {
		color: var(--color-text-hot);
		text-decoration: none;
		font-weight: var(--font-weight-bold);
	}
	.separator {
		color: var(--color-text-muted);
	}
</style>
