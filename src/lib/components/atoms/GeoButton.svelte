<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		type?: 'button' | 'submit';
		disabled?: boolean;
		onclick?: () => void;
		children: Snippet;
	}

	let { type = 'button', disabled = false, onclick, children }: Props = $props();
</script>

<button {type} {disabled} {onclick} class="geo-button">
	{@render children()}
</button>

<style>
	.geo-button {
		background: var(--color-bg-button);
		color: var(--color-text);
		border: 2px outset #6600CC;
		border-radius: var(--radius);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
		padding: var(--space-1) var(--space-3);
		cursor: pointer;
		text-transform: uppercase;
	}
	.geo-button:hover:not(:disabled) {
		background: var(--color-bg-button-hover);
		color: var(--color-text-heading);
	}
	.geo-button:active:not(:disabled) {
		border-style: inset;
	}
	.geo-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
