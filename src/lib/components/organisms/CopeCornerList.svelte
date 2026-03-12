<script lang="ts">
	import type { CopePost } from '$lib/types';
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import ThreadPreview from '$lib/components/molecules/ThreadPreview.svelte';

	interface Props {
		posts: CopePost[];
	}

	let { posts }: Props = $props();
</script>

<section class="cope-corner-list">
	<GeoHeading level={2}>😤 COPE CORNER 😤</GeoHeading>
	<p class="subtitle">VENT HERE. NO JUDGMENT. CAPS ENCOURAGED.</p>
	<RainbowHR />
	{#each posts as post}
		<ThreadPreview {post} />
	{/each}
</section>

<style>
	.subtitle {
		color: var(--color-text-hot);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		font-style: italic;
		text-align: center;
		margin-bottom: var(--space-2);
	}
</style>
