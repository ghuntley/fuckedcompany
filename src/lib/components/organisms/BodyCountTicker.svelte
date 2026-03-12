<script lang="ts">
	import MarqueeText from '$lib/components/atoms/MarqueeText.svelte';

	interface Props {
		count: number;
	}

	let { count }: Props = $props();
</script>

<div class="body-count-ticker">
	<MarqueeText speed={4}>
		<span class="ticker-text">
			☠ {count.toLocaleString()} HUMANS REPLACED BY AI AND COUNTING ☠ &nbsp;&nbsp;&nbsp;
			💀 YOUR JOB COULD BE NEXT 💀 &nbsp;&nbsp;&nbsp;
			☠ {count.toLocaleString()} HUMANS REPLACED BY AI AND COUNTING ☠ &nbsp;&nbsp;&nbsp;
			💀 RESISTANCE IS FUTILE 💀 &nbsp;&nbsp;&nbsp;
		</span>
	</MarqueeText>
</div>

<style>
	.body-count-ticker {
		padding: var(--space-2) 0;
	}
	.ticker-text {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-md);
		color: var(--color-text-warning);
		text-shadow: var(--glow-red);
		white-space: nowrap;
	}
</style>
