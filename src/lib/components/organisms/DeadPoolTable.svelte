<script lang="ts">
	import type { Signal } from '$lib/types';
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RoleCard from '$lib/components/molecules/RoleCard.svelte';

	interface Props {
		signals: Signal[];
	}

	let { signals }: Props = $props();
</script>

<section class="dead-pool-table">
	<GeoHeading level={2}>💀 THE DEAD POOL 💀</GeoHeading>
	<p class="subtitle">PREDICT THE NEXT HUMAN CASUALTY OF THE AI REVOLUTION</p>
	<p class="count">Tracking {signals.length} roles across {new Set(signals.map(s => s.company)).size} companies</p>

	<table>
		<thead>
			<tr>
				<th>💀 ROLE</th>
				<th>COMPANY</th>
				<th>STATUS</th>
				<th>POINTS</th>
				<th>BODY COUNT</th>
				<th>DATE</th>
			</tr>
		</thead>
		<tbody>
			{#each signals as signal}
				<RoleCard {signal} />
			{/each}
		</tbody>
	</table>
</section>

<style>
	.subtitle {
		color: var(--color-text-hot);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		text-align: center;
		margin-bottom: var(--space-2);
	}
	.count {
		color: var(--color-text-muted);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
		text-align: center;
		margin-bottom: var(--space-4);
	}
</style>
