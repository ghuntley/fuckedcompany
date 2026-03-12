<script lang="ts">
	import type { SignalStatus } from '$lib/types';

	interface Props {
		status: SignalStatus;
	}

	let { status }: Props = $props();

	const colorMap: Record<SignalStatus, string> = {
		AUTOMATED: 'var(--color-status-automated)',
		DOWNSIZED: 'var(--color-status-downsized)',
		ON_NOTICE: 'var(--color-status-on-notice)',
		RUMOR: 'var(--color-status-rumor)'
	};

	let color = $derived(colorMap[status] ?? 'var(--color-text-muted)');
	let shouldBlink = $derived(status === 'AUTOMATED');
</script>

<span
	class="status-badge"
	class:blink={shouldBlink}
	style="color: {color}"
>
	{status.replace('_', ' ')}
</span>

<style>
	.status-badge {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		letter-spacing: 1px;
		display: inline;
	}
	.blink {
		animation: blink 1s step-end infinite;
	}
</style>
