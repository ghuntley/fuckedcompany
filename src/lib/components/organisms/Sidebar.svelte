<script lang="ts">
	import type { Signal, LeaderboardUser } from '$lib/types';
	import UnderConstructionBanner from '$lib/components/atoms/UnderConstructionBanner.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';
	import BlinkText from '$lib/components/atoms/BlinkText.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import Badge88x31 from '$lib/components/atoms/Badge88x31.svelte';
	import GuestbookCTA from '$lib/components/molecules/GuestbookCTA.svelte';
	import MidiPlayer from '$lib/components/molecules/MidiPlayer.svelte';

	interface Props {
		signals: Signal[];
		users: LeaderboardUser[];
		bodyCount: number;
	}

	let { signals, users, bodyCount }: Props = $props();
</script>

<aside class="sidebar">
	<UnderConstructionBanner />

	<RainbowHR />

	<div class="sidebar-section">
		<h3 class="sidebar-heading">💀 LATEST SIGNALS</h3>
		<ul class="signal-list">
			{#each signals.slice(0, 5) as signal}
				<li>
					<NeonLink href="/pool/{signal.slug}">{signal.company}: {signal.role}</NeonLink>
				</li>
			{/each}
		</ul>
	</div>

	<RainbowHR />

	<div class="sidebar-section">
		<h3 class="sidebar-heading">🏆 TOP PROPHETS</h3>
		{#each users.slice(0, 5) as user}
			<div class="mini-leader">
				<span class="rank">#{user.rank}</span>
				<span class="username">{user.username}</span>
				<span class="pts">{user.points.toLocaleString()}pts</span>
			</div>
		{/each}
	</div>

	<RainbowHR />

	<div class="sidebar-section body-count-section">
		<h3 class="sidebar-heading">☠ TOTAL BODY COUNT</h3>
		<div class="body-count-big">
			<BlinkText><span class="body-count-number">{bodyCount.toLocaleString()}</span></BlinkText>
		</div>
		<div class="body-count-label">HUMANS REPLACED</div>
	</div>

	<RainbowHR />

	<GuestbookCTA />

	<RainbowHR />

	<MidiPlayer />

	<RainbowHR />

	<div class="badge-collection">
		<Badge88x31 text="NETSCAPE NOW!" bgColor="#006600" textColor="#FFFFFF" borderColor="#00FF00" />
		<Badge88x31 text="HTML 4.01" bgColor="#333399" textColor="#FFFFFF" borderColor="#6666CC" />
		<Badge88x31 text="MADE WITH NOTEPAD" bgColor="#000066" textColor="#00FFFF" borderColor="#0000FF" />
		<Badge88x31 text="RSS XML" href="/rss.xml" bgColor="#FF6600" textColor="#FFFFFF" borderColor="#CC5500" />
		<Badge88x31 text="NO AI WAS SPARED" bgColor="#CC0000" textColor="#FFFF00" borderColor="#FF0000" />
		<Badge88x31 text="Y2K COMPLIANT" bgColor="#333333" textColor="#00FF00" borderColor="#666666" />
	</div>
</aside>

<style>
	.sidebar {
		border: var(--border-panel);
		background: var(--color-bg-panel);
		padding: var(--space-3);
		font-size: var(--font-size-sm);
	}
	.sidebar-section {
		text-align: left;
	}
	.sidebar-heading {
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		color: var(--color-text-heading);
		text-shadow: none;
		letter-spacing: 0;
		margin-bottom: var(--space-2);
		text-transform: uppercase;
	}
	.signal-list {
		list-style: none;
		padding: 0;
	}
	.signal-list li {
		margin-bottom: var(--space-1);
		font-size: var(--font-size-xs);
	}
	.signal-list li::before {
		content: '• ';
		color: var(--color-text-hot);
	}
	.mini-leader {
		display: flex;
		gap: var(--space-2);
		font-size: var(--font-size-xs);
		margin-bottom: var(--space-1);
	}
	.rank {
		color: var(--color-text-warning);
		font-weight: var(--font-weight-bold);
		min-width: 20px;
	}
	.username {
		color: var(--color-text-heading);
		font-family: var(--font-family-mono);
		flex: 1;
	}
	.pts {
		color: var(--color-text);
		font-family: var(--font-family-mono);
	}
	.body-count-section {
		text-align: center;
	}
	.body-count-big {
		font-size: var(--font-size-xl);
		margin: var(--space-2) 0;
	}
	.body-count-number {
		color: var(--color-status-automated);
		font-family: var(--font-family-mono);
		font-weight: var(--font-weight-bold);
		text-shadow: var(--glow-red);
	}
	.body-count-label {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
		text-transform: uppercase;
	}
	.badge-collection {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
		justify-content: center;
		padding: var(--space-2) 0;
	}
</style>
