<script lang="ts">
	import LeaderboardTable from '$lib/components/organisms/LeaderboardTable.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>🏆 Hall of Prophets — FuckedCompany.com</title>
</svelte:head>

<LeaderboardTable users={data.users} />

<div class="note">
	<p>This leaderboard is maintained by THE PROPHECY COUNCIL.</p>
	<p>Points are awarded for accurate predictions of AI-driven job displacement.</p>
	<p>AUTOMATED = 100pts | DOWNSIZED = 50pts | ON NOTICE = 25pts | RUMOR = 10pts</p>
	<p>Rarity multiplier: fewer predictors = more points. OBVIOUS calls are WORTHLESS.</p>
</div>

<style>
	.note {
		margin-top: var(--space-6);
		padding: var(--space-4);
		border: var(--border-glow);
		background: var(--color-bg-panel);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-xs);
		color: var(--color-text-muted);
		text-align: center;
	}
	.note p {
		margin-bottom: var(--space-2);
	}
</style>
