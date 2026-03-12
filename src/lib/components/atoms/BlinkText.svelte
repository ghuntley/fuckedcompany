<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<span class="blink-text">{@render children()}</span>

<style>
	.blink-text {
		animation: blink 1s step-end infinite;
	}
</style>
