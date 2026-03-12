<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';

	let { data } = $props();
	let p = $derived(data.post);
</script>

<svelte:head>
	<title>😤 {p.title} — Cope Corner</title>
</svelte:head>

<div class="cope-detail">
	<div class="breadcrumb">
		<NeonLink href="/">Home</NeonLink> &gt;
		<NeonLink href="/cope">Cope Corner</NeonLink> &gt;
		<span class="current">{p.title}</span>
	</div>

	<GeoHeading level={1}>{p.title}</GeoHeading>

	<div class="post-meta">
		by <span class="author">{p.author}</span> — {p.date}
	</div>

	{#if p.tags.length > 0}
		<div class="tags">
			{#each p.tags as tag}
				<span class="tag">[{tag}]</span>
			{/each}
		</div>
	{/if}

	<RainbowHR />

	<div class="markdown-body">
		{@html p.body}
	</div>

	<RainbowHR />

	<div class="back-link">
		<NeonLink href="/cope">← BACK TO COPE CORNER</NeonLink>
	</div>
</div>

<style>
	.cope-detail {
		text-align: left;
	}
	.breadcrumb {
		font-size: var(--font-size-xs);
		color: var(--color-text-muted);
		margin-bottom: var(--space-4);
	}
	.current {
		color: var(--color-text-hot);
	}
	.post-meta {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
		margin-bottom: var(--space-2);
	}
	.author {
		color: var(--color-text-heading);
		font-family: var(--font-family-mono);
		font-weight: var(--font-weight-bold);
	}
	.tags {
		margin-bottom: var(--space-3);
	}
	.tag {
		color: var(--color-text-hot);
		font-size: var(--font-size-xs);
		margin-right: var(--space-1);
	}
	.back-link {
		text-align: center;
		margin-top: var(--space-4);
		font-size: var(--font-size-md);
	}
</style>
