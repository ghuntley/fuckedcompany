<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';
</script>

<GeoHeading level={1}>💀 FUCKEDCOMPANY DESIGN SYSTEM</GeoHeading>

<p class="tagline">☠ Official Lubricant of the AI Economy ☠</p>

<RainbowHR />

<div class="stats">
	<div class="stat">
		<span class="stat-number">14</span>
		<span class="stat-label">Atoms</span>
	</div>
	<div class="stat">
		<span class="stat-number">10</span>
		<span class="stat-label">Molecules</span>
	</div>
	<div class="stat">
		<span class="stat-number">9</span>
		<span class="stat-label">Organisms</span>
	</div>
	<div class="stat">
		<span class="stat-number">26+</span>
		<span class="stat-label">Design Tokens</span>
	</div>
</div>

<RainbowHR />

<div class="sections">
	<div class="section-card">
		<h3>🎨 <NeonLink href="/storybook/tokens">Design Tokens</NeonLink></h3>
		<p>Colors, typography, spacing, borders, effects, animations</p>
	</div>
	<div class="section-card">
		<h3>⚛️ <NeonLink href="/storybook/atoms">Atoms</NeonLink></h3>
		<p>NeonLink, GeoButton, StatusBadge, Logo, Badge88x31, and 9 more</p>
	</div>
	<div class="section-card">
		<h3>🧬 <NeonLink href="/storybook/molecules">Molecules</NeonLink></h3>
		<p>RoleCard, RumorPost, NavBar, WebRing, MidiPlayer, and 5 more</p>
	</div>
	<div class="section-card">
		<h3>🦠 <NeonLink href="/storybook/organisms">Organisms</NeonLink></h3>
		<p>SiteHeader, DeadPoolTable, Sidebar, SiteFooter, and 5 more</p>
	</div>
</div>

<style>
	.tagline {
		color: var(--color-text-hot);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-md);
		text-align: center;
		margin-bottom: var(--space-4);
	}
	.stats {
		display: flex;
		justify-content: center;
		gap: var(--space-6);
		margin: var(--space-4) 0;
	}
	.stat {
		text-align: center;
	}
	.stat-number {
		display: block;
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xxl);
		color: var(--color-text);
		text-shadow: var(--glow-green);
	}
	.stat-label {
		display: block;
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		text-transform: uppercase;
	}
	.sections {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4);
		margin-top: var(--space-4);
	}
	.section-card {
		border: var(--border-panel);
		background: var(--color-bg-panel);
		padding: var(--space-4);
		text-align: left;
	}
	.section-card h3 {
		font-family: var(--font-family-fun);
		font-size: var(--font-size-md);
		color: var(--color-text-heading);
		text-shadow: none;
		letter-spacing: 0;
		text-transform: none;
		margin-bottom: var(--space-2);
	}
	.section-card p {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
	}
</style>
