<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		external?: boolean;
		children: Snippet;
	}

	let { href, external = false, children }: Props = $props();
</script>

{#if external}
	<a {href} target="_blank" rel="noopener noreferrer" class="neon-link">{@render children()}</a>
{:else}
	<a {href} class="neon-link">{@render children()}</a>
{/if}

<style>
	.neon-link {
		color: var(--color-link);
		text-decoration: underline;
	}
	.neon-link:visited {
		color: var(--color-link-visited);
	}
	.neon-link:hover {
		color: var(--color-link-hover);
		text-shadow: var(--glow-cyan);
	}
</style>
