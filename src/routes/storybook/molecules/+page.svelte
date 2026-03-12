<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import RoleCard from '$lib/components/molecules/RoleCard.svelte';
	import RumorPost from '$lib/components/molecules/RumorPost.svelte';
	import ForumPost from '$lib/components/molecules/ForumPost.svelte';
	import NavBar from '$lib/components/molecules/NavBar.svelte';
	import LeaderboardRow from '$lib/components/molecules/LeaderboardRow.svelte';
	import SearchBar from '$lib/components/molecules/SearchBar.svelte';
	import ThreadPreview from '$lib/components/molecules/ThreadPreview.svelte';
	import WebRing from '$lib/components/molecules/WebRing.svelte';
	import GuestbookCTA from '$lib/components/molecules/GuestbookCTA.svelte';
	import MidiPlayer from '$lib/components/molecules/MidiPlayer.svelte';

	import type { Signal, CopePost, LeaderboardUser } from '$lib/types';

	const sampleSignal: Signal = {
		title: 'Amazon Cuts 16,000 Workers — Robots Win Again',
		slug: 'amazon-warehouse-2026',
		company: 'Amazon',
		role: 'Warehouse Operations',
		status: 'AUTOMATED',
		body_count: 16000,
		date: '2026-01-28',
		points: 85,
		tags: ['warehouse', 'robotics'],
		body: '<p>SIXTEEN THOUSAND HUMANS replaced by robots. Jeff would be proud if he wasn\'t too busy in space.</p>'
	};

	const sampleCope: CopePost = {
		title: 'I Was A Senior Dev For 12 Years And Now I Prompt',
		slug: 'senior-dev-now-prompting',
		author: 'deprecated_dev_2014',
		date: '2026-02-15',
		tags: ['developers', 'career', 'cope'],
		body: '<p>Twelve years of learning algorithms. TWELVE YEARS. And now my job is typing "please make this button blue" into a text box.</p>'
	};

	const sampleUser: LeaderboardUser = {
		rank: 1,
		username: 'neural_nihilist',
		points: 4850,
		accuracy: 78,
		predictions: 42
	};
</script>

<GeoHeading level={1}>🧬 MOLECULES</GeoHeading>

<!-- RoleCard -->
<GeoHeading level={3}>RoleCard</GeoHeading>
<div class="demo">
	<table>
		<thead>
			<tr><th>Role</th><th>Company</th><th>Status</th><th>Points</th><th>Dead</th><th>Date</th></tr>
		</thead>
		<tbody>
			<RoleCard signal={sampleSignal} />
			<RoleCard signal={{ ...sampleSignal, status: 'ON_NOTICE', role: 'Data Entry', company: 'Acme Corp', points: 45, body_count: 0 }} />
		</tbody>
	</table>
</div>
<RainbowHR />

<!-- RumorPost -->
<GeoHeading level={3}>RumorPost</GeoHeading>
<div class="demo">
	<RumorPost signal={sampleSignal} />
</div>
<RainbowHR />

<!-- ForumPost -->
<GeoHeading level={3}>ForumPost</GeoHeading>
<div class="demo">
	<ForumPost post={sampleCope} index={0} />
	<ForumPost post={{ ...sampleCope, author: 'angry_qe_2021', title: 'QA is Dead' }} index={1} />
</div>
<RainbowHR />

<!-- NavBar -->
<GeoHeading level={3}>NavBar</GeoHeading>
<div class="demo">
	<NavBar />
</div>
<RainbowHR />

<!-- LeaderboardRow -->
<GeoHeading level={3}>LeaderboardRow</GeoHeading>
<div class="demo">
	<table>
		<thead>
			<tr><th>Rank</th><th>Prophet</th><th>Points</th><th>Accuracy</th><th>Calls</th></tr>
		</thead>
		<tbody>
			<LeaderboardRow user={sampleUser} />
			<LeaderboardRow user={{ ...sampleUser, rank: 2, username: 'deprecated_dave', points: 4200 }} />
			<LeaderboardRow user={{ ...sampleUser, rank: 3, username: 'rm_-rf_career', points: 3900 }} />
		</tbody>
	</table>
</div>
<RainbowHR />

<!-- SearchBar -->
<GeoHeading level={3}>SearchBar</GeoHeading>
<div class="demo">
	<SearchBar />
</div>
<RainbowHR />

<!-- ThreadPreview -->
<GeoHeading level={3}>ThreadPreview</GeoHeading>
<div class="demo">
	<ThreadPreview post={sampleCope} />
</div>
<RainbowHR />

<!-- WebRing -->
<GeoHeading level={3}>WebRing</GeoHeading>
<div class="demo">
	<WebRing />
</div>
<RainbowHR />

<!-- GuestbookCTA -->
<GeoHeading level={3}>GuestbookCTA</GeoHeading>
<div class="demo">
	<GuestbookCTA />
</div>
<RainbowHR />

<!-- MidiPlayer -->
<GeoHeading level={3}>MidiPlayer</GeoHeading>
<div class="demo">
	<MidiPlayer />
</div>
<RainbowHR />

<style>
	.demo {
		padding: var(--space-4);
		border: 1px solid var(--color-border-table);
		background: var(--color-bg-panel);
		margin-bottom: var(--space-2);
	}
</style>
