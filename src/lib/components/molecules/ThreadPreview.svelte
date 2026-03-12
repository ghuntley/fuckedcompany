<script lang="ts">
	import type { CopePost } from '$lib/types';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';

	interface Props {
		post: CopePost;
	}

	let { post }: Props = $props();
</script>

<div class="thread-preview">
	<div class="thread-title">
		💀 <NeonLink href="/cope/{post.slug}">{post.title}</NeonLink>
	</div>
	<div class="thread-meta">
		by <span class="author">{post.author}</span> — {post.date}
		{#if post.tags.length > 0}
			&nbsp;&nbsp;
			{#each post.tags as tag}
				<span class="tag">[{tag}]</span>
			{/each}
		{/if}
	</div>
</div>

<style>
	.thread-preview {
		padding: var(--space-3);
		border-bottom: 1px solid var(--color-border-table);
		text-align: left;
	}
	.thread-title {
		font-size: var(--font-size-base);
		margin-bottom: var(--space-1);
	}
	.thread-meta {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}
	.author {
		color: var(--color-text-heading);
	}
	.tag {
		color: var(--color-text-hot);
		font-size: var(--font-size-xs);
		margin-left: var(--space-1);
	}
</style>
