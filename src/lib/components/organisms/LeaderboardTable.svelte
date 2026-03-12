<script lang="ts">
	import type { LeaderboardUser } from '$lib/types';
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import LeaderboardRow from '$lib/components/molecules/LeaderboardRow.svelte';

	interface Props {
		users: LeaderboardUser[];
	}

	let { users }: Props = $props();
</script>

<section class="leaderboard-table">
	<GeoHeading level={2}>🏆 HALL OF PROPHETS 🏆</GeoHeading>
	<p class="subtitle">THE SEERS WHO PREDICTED THE AI CULLING</p>

	<table>
		<thead>
			<tr>
				<th>RANK</th>
				<th>PROPHET</th>
				<th>POINTS</th>
				<th>ACCURACY</th>
				<th>CALLS</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<LeaderboardRow {user} />
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
		margin-bottom: var(--space-4);
	}
</style>
