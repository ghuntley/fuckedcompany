<script lang="ts">
	import type { Signal } from '$lib/types';
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import BlinkText from '$lib/components/atoms/BlinkText.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';

	interface Props {
		signals: Signal[];
		totalBodyCount: number;
	}

	let { signals, totalBodyCount }: Props = $props();
</script>

<section class="kill-list">
	<GeoHeading level={2}>☠ THE KILL LIST ☠</GeoHeading>
	<p class="kills-total">
		TOTAL CONFIRMED KILLS: <BlinkText><span class="kills-number">{totalBodyCount.toLocaleString()}</span></BlinkText>
	</p>
	<p class="kills-subtitle">THESE ROLES ARE GONE. AUTOMATED. REPLACED. FUCKED.</p>
	<RainbowHR />

	<table>
		<thead>
			<tr>
				<th>☠ ROLE</th>
				<th>COMPANY</th>
				<th>BODY COUNT</th>
				<th>DATE CONFIRMED</th>
			</tr>
		</thead>
		<tbody>
			{#each signals as signal}
				<tr>
					<td>☠ <NeonLink href="/pool/{signal.slug}">{signal.role}</NeonLink></td>
					<td class="company">{signal.company}</td>
					<td class="body-count">{signal.body_count.toLocaleString()}</td>
					<td class="date">{signal.date}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	.kills-total {
		color: var(--color-status-automated);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-lg);
		text-align: center;
		margin-bottom: var(--space-2);
	}
	.kills-number {
		color: var(--color-status-automated);
		font-weight: var(--font-weight-bold);
	}
	.kills-subtitle {
		color: var(--color-text-muted);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		text-align: center;
		margin-bottom: var(--space-2);
	}
	.company {
		color: var(--color-text-heading);
	}
	.body-count {
		color: var(--color-status-automated);
		font-family: var(--font-family-mono);
		font-weight: var(--font-weight-bold);
		text-align: right;
	}
	.date {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}
</style>
