<script lang="ts">
	import type { LeaderboardUser } from '$lib/types';
	import PointsDisplay from '$lib/components/atoms/PointsDisplay.svelte';

	interface Props {
		user: LeaderboardUser;
	}

	let { user }: Props = $props();

	const glowMap: Record<number, string> = {
		1: '0 0 10px #FFD700, 0 0 20px #FFD700',
		2: '0 0 10px #C0C0C0, 0 0 20px #C0C0C0',
		3: '0 0 10px #CD7F32, 0 0 20px #CD7F32'
	};

	let glow = $derived(glowMap[user.rank] ?? 'none');
</script>

<tr class="leaderboard-row" style="text-shadow: {glow}">
	<td class="rank" class:gold={user.rank === 1} class:silver={user.rank === 2} class:bronze={user.rank === 3}>
		#{user.rank}
	</td>
	<td class="username">{user.username}</td>
	<td class="points"><PointsDisplay points={user.points} /></td>
	<td class="accuracy">{user.accuracy}%</td>
	<td class="predictions">{user.predictions}</td>
</tr>

<style>
	.rank {
		font-weight: var(--font-weight-bold);
		color: var(--color-text-inverse);
	}
	.gold { color: #FFD700 !important; }
	.silver { color: #C0C0C0 !important; }
	.bronze { color: #CD7F32 !important; }
	.username {
		color: var(--color-text-heading);
		font-family: var(--font-family-mono);
	}
	.points {
		text-align: right;
	}
	.accuracy {
		color: var(--color-text-secondary);
		text-align: right;
	}
	.predictions {
		color: var(--color-text-muted);
		text-align: right;
	}
</style>
