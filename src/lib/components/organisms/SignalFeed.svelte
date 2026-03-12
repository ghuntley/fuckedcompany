<script lang="ts">
	import type { Signal } from '$lib/types';
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import RumorPost from '$lib/components/molecules/RumorPost.svelte';

	interface Props {
		signals: Signal[];
	}

	let { signals }: Props = $props();
</script>

<section class="signal-feed">
	<GeoHeading level={2}>💀 LATEST SIGNALS 💀</GeoHeading>
	<RainbowHR />
	{#each signals as signal, i}
		<RumorPost {signal} />
		{#if i < signals.length - 1}
			<RainbowHR />
		{/if}
	{/each}
</section>
