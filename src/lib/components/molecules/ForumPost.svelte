<script lang="ts">
	import type { CopePost } from '$lib/types';

	interface Props {
		post: CopePost;
		index?: number;
	}

	let { post, index = 0 }: Props = $props();

	let bgColor = $derived(index % 2 === 0 ? 'var(--color-bg-table-row)' : 'var(--color-bg-table-row-alt)');
</script>

<div class="forum-post" style="background: {bgColor}">
	<div class="post-header">
		<span class="post-author">{post.author}</span>
		<span class="post-date">{post.date}</span>
	</div>
	<div class="post-body markdown-body">
		{@html post.body}
	</div>
</div>

<style>
	.forum-post {
		padding: var(--space-4);
		text-align: left;
	}
	.post-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: var(--space-2);
	}
	.post-author {
		color: var(--color-text-heading);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
	}
	.post-date {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}
	.post-body {
		color: var(--color-text);
		font-size: var(--font-size-sm);
		line-height: var(--line-height);
	}
</style>
