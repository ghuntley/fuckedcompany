<script lang="ts">
	interface Props {
		points: number;
	}

	let { points }: Props = $props();
</script>

<span class="points-display">{points}</span>

<style>
	.points-display {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
		text-shadow: var(--glow-green);
		text-align: right;
	}
</style>
