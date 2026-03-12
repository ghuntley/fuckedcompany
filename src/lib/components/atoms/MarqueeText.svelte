<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		speed?: number;
		direction?: 'left' | 'right';
		children: Snippet;
	}

	let { speed = 6, direction = 'left', children }: Props = $props();
</script>

<marquee scrollamount={speed} {direction} class="marquee-text">
	{@render children()}
</marquee>

<style>
	.marquee-text {
		display: block;
	}
</style>
