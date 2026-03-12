<script lang="ts">
	import type { Signal } from '$lib/types';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';
	import StatusBadge from '$lib/components/atoms/StatusBadge.svelte';
	import PointsDisplay from '$lib/components/atoms/PointsDisplay.svelte';
	import Counter from '$lib/components/atoms/Counter.svelte';

	interface Props {
		signal: Signal;
	}

	let { signal }: Props = $props();
</script>

<tr class="role-card">
	<td><NeonLink href="/pool/{signal.slug}">{signal.role}</NeonLink></td>
	<td class="company">{signal.company}</td>
	<td><StatusBadge status={signal.status} /></td>
	<td class="points"><PointsDisplay points={signal.points} /></td>
	<td><Counter count={signal.body_count} /></td>
	<td class="date">{signal.date}</td>
</tr>

<style>
	.role-card:hover {
		background: #2A1A4E !important;
	}
	.company {
		color: var(--color-text-heading);
	}
	.points {
		text-align: right;
	}
	.date {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}
</style>
