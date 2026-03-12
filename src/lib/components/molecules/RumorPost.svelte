<script lang="ts">
	import type { Signal } from '$lib/types';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';
	import StatusBadge from '$lib/components/atoms/StatusBadge.svelte';

	interface Props {
		signal: Signal;
	}

	let { signal }: Props = $props();

	// Get a plain text excerpt from HTML body
	function excerpt(html: string, maxLen: number = 200): string {
		const text = html.replace(/<[^>]*>/g, '');
		if (text.length <= maxLen) return text;
		return text.slice(0, maxLen) + '...';
	}
</script>

<div class="rumor-post">
	<div class="rumor-header">
		<span class="rumor-company">💀 {signal.company} — {signal.role}</span>
		<StatusBadge status={signal.status} />
	</div>
	<div class="rumor-title">
		<NeonLink href="/pool/{signal.slug}">{signal.title}</NeonLink>
	</div>
	<div class="rumor-excerpt">{excerpt(signal.body)}</div>
	<div class="rumor-meta">
		Posted: {signal.date} &nbsp;|&nbsp; Body Count: {signal.body_count.toLocaleString()} &nbsp;|&nbsp; Points: {signal.points}
	</div>
</div>

<style>
	.rumor-post {
		padding: var(--space-4);
		border-bottom: var(--border-panel);
		text-align: left;
	}
	.rumor-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-2);
	}
	.rumor-company {
		color: var(--color-text-hot);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-sm);
	}
	.rumor-title {
		font-size: var(--font-size-md);
		margin-bottom: var(--space-2);
	}
	.rumor-excerpt {
		color: var(--color-text);
		font-size: var(--font-size-sm);
		margin-bottom: var(--space-2);
		line-height: var(--line-height);
	}
	.rumor-meta {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
		font-family: var(--font-family-mono);
	}
</style>
