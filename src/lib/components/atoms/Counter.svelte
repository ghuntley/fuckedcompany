<script lang="ts">
	interface Props {
		count: number;
	}

	let { count }: Props = $props();
</script>

<span class="counter">[{count.toLocaleString()}]</span>

<style>
	.counter {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		display: inline;
	}
</style>
