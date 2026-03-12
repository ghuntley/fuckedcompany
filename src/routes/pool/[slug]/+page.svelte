<script lang="ts">
	import StatusBadge from '$lib/components/atoms/StatusBadge.svelte';
	import PointsDisplay from '$lib/components/atoms/PointsDisplay.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';

	let { data } = $props();
	let s = $derived(data.signal);
</script>

<svelte:head>
	<title>💀 {s.title} — FuckedCompany.com</title>
</svelte:head>

<div class="signal-detail">
	<div class="breadcrumb">
		<NeonLink href="/">Home</NeonLink> &gt;
		<NeonLink href="/pool">Dead Pool</NeonLink> &gt;
		<span class="current">{s.role}</span>
	</div>

	<GeoHeading level={1}>{s.title}</GeoHeading>

	<div class="meta-row">
		<StatusBadge status={s.status} />
		<span class="sep">|</span>
		<PointsDisplay points={s.points} />
		<span class="sep">|</span>
		<span class="date">{s.date}</span>
	</div>

	<div class="company-info">
		<span class="label">Company:</span> <span class="company">{s.company}</span>
		<span class="sep">|</span>
		<span class="label">Role:</span> <span class="role">{s.role}</span>
		<span class="sep">|</span>
		<span class="label">Body Count:</span> <span class="body-count">{s.body_count.toLocaleString()}</span>
	</div>

	{#if s.tags.length > 0}
		<div class="tags">
			{#each s.tags as tag}
				<span class="tag">[{tag}]</span>
			{/each}
		</div>
	{/if}

	<RainbowHR />

	<div class="markdown-body">
		{@html s.body}
	</div>

	<RainbowHR />

	<div class="back-link">
		<NeonLink href="/pool">← BACK TO THE DEAD POOL</NeonLink>
	</div>
</div>

<style>
	.signal-detail {
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
	.meta-row {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-bottom: var(--space-3);
	}
	.sep {
		color: var(--color-text-muted);
	}
	.date {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
	}
	.company-info {
		font-size: var(--font-size-sm);
		margin-bottom: var(--space-3);
	}
	.label {
		color: var(--color-text-muted);
	}
	.company {
		color: var(--color-text-heading);
		font-weight: var(--font-weight-bold);
	}
	.role {
		color: var(--color-text-hot);
	}
	.body-count {
		color: var(--color-status-automated);
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
