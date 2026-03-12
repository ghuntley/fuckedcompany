<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import SiteHeader from '$lib/components/organisms/SiteHeader.svelte';
	import SignalFeed from '$lib/components/organisms/SignalFeed.svelte';
	import DeadPoolTable from '$lib/components/organisms/DeadPoolTable.svelte';
	import LeaderboardTable from '$lib/components/organisms/LeaderboardTable.svelte';
	import CopeCornerList from '$lib/components/organisms/CopeCornerList.svelte';
	import KillListArchive from '$lib/components/organisms/KillListArchive.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import SiteFooter from '$lib/components/organisms/SiteFooter.svelte';
	import BodyCountTicker from '$lib/components/organisms/BodyCountTicker.svelte';

	// Use real content slugs that match actual markdown files
	import { getSignals, getCopePosts, getBodyCount } from '$lib/content';
	import { leaderboard } from '$lib/data/leaderboard';

	const signals = getSignals().slice(0, 3);

	const copePosts = getCopePosts().slice(0, 2);
	const users = leaderboard.slice(0, 3);
	const bodyCount = getBodyCount();
</script>

<GeoHeading level={1}>🦠 ORGANISMS</GeoHeading>

<!-- SiteHeader -->
<GeoHeading level={3}>SiteHeader</GeoHeading>
<div class="demo">
	<SiteHeader {bodyCount} />
</div>
<RainbowHR />

<!-- BodyCountTicker -->
<GeoHeading level={3}>BodyCountTicker</GeoHeading>
<div class="demo">
	<BodyCountTicker count={bodyCount} />
</div>
<RainbowHR />

<!-- SignalFeed -->
<GeoHeading level={3}>SignalFeed</GeoHeading>
<div class="demo">
	<SignalFeed {signals} />
</div>
<RainbowHR />

<!-- DeadPoolTable -->
<GeoHeading level={3}>DeadPoolTable</GeoHeading>
<div class="demo">
	<DeadPoolTable {signals} />
</div>
<RainbowHR />

<!-- LeaderboardTable -->
<GeoHeading level={3}>LeaderboardTable</GeoHeading>
<div class="demo">
	<LeaderboardTable {users} />
</div>
<RainbowHR />

<!-- CopeCornerList -->
<GeoHeading level={3}>CopeCornerList</GeoHeading>
<div class="demo">
	<CopeCornerList posts={copePosts} />
</div>
<RainbowHR />

<!-- KillListArchive -->
<GeoHeading level={3}>KillListArchive</GeoHeading>
<div class="demo">
	<KillListArchive signals={signals.filter(s => s.status === 'AUTOMATED')} totalBodyCount={bodyCount} />
</div>
<RainbowHR />

<!-- Sidebar -->
<GeoHeading level={3}>Sidebar</GeoHeading>
<div class="demo sidebar-demo">
	<Sidebar {signals} {users} {bodyCount} />
</div>
<RainbowHR />

<!-- SiteFooter -->
<GeoHeading level={3}>SiteFooter</GeoHeading>
<div class="demo">
	<SiteFooter />
</div>
<RainbowHR />

<style>
	.demo {
		padding: var(--space-4);
		border: 1px solid var(--color-border-table);
		background: var(--color-bg-panel);
		margin-bottom: var(--space-2);
	}
	.sidebar-demo {
		max-width: 250px;
	}
</style>
