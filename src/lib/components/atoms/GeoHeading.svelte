<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		children: Snippet;
	}

	let { level = 2, children }: Props = $props();
</script>

{#if level === 1}
	<h1 class="geo-heading">{@render children()}</h1>
{:else if level === 2}
	<h2 class="geo-heading">{@render children()}</h2>
{:else if level === 3}
	<h3 class="geo-heading">{@render children()}</h3>
{:else if level === 4}
	<h4 class="geo-heading">{@render children()}</h4>
{:else if level === 5}
	<h5 class="geo-heading">{@render children()}</h5>
{:else}
	<h6 class="geo-heading">{@render children()}</h6>
{/if}

<style>
	.geo-heading {
		font-family: var(--font-family-heading);
		color: var(--color-text-heading);
		text-transform: uppercase;
		letter-spacing: 2px;
		text-shadow: var(--glow-cyan);
		margin: var(--space-4) 0;
	}
</style>
