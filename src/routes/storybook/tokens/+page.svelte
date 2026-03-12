<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';

	const colors = [
		{ name: '--color-bg', value: '#000000', label: 'Background' },
		{ name: '--color-bg-panel', value: '#0A0A2A', label: 'Panel' },
		{ name: '--color-bg-panel-alt', value: '#1A0A2E', label: 'Panel Alt' },
		{ name: '--color-bg-table-header', value: '#330066', label: 'Table Header' },
		{ name: '--color-bg-table-row', value: '#0D0D3B', label: 'Table Row' },
		{ name: '--color-bg-table-row-alt', value: '#1A0A2E', label: 'Table Row Alt' },
		{ name: '--color-text', value: '#00FF00', label: 'Text (Neon Green)' },
		{ name: '--color-text-secondary', value: '#39FF14', label: 'Text Secondary (Lime)' },
		{ name: '--color-text-hot', value: '#FF00FF', label: 'Text Hot (Pink)' },
		{ name: '--color-text-warning', value: '#FFFF00', label: 'Text Warning (Yellow)' },
		{ name: '--color-text-heading', value: '#00FFFF', label: 'Text Heading (Cyan)' },
		{ name: '--color-text-muted', value: '#888888', label: 'Text Muted (Gray)' },
		{ name: '--color-link', value: '#00FFFF', label: 'Link' },
		{ name: '--color-link-visited', value: '#FFFF00', label: 'Link Visited' },
		{ name: '--color-link-hover', value: '#FF0000', label: 'Link Hover' },
		{ name: '--color-status-automated', value: '#FF0000', label: 'AUTOMATED' },
		{ name: '--color-status-downsized', value: '#FF6600', label: 'DOWNSIZED' },
		{ name: '--color-status-on-notice', value: '#FFD700', label: 'ON NOTICE' },
		{ name: '--color-status-rumor', value: '#888888', label: 'RUMOR' },
		{ name: '--color-status-safe', value: '#00FF00', label: 'SAFE' },
		{ name: '--color-border-table', value: '#6600CC', label: 'Border Table' },
		{ name: '--color-border-glow', value: '#00FFFF', label: 'Border Glow' }
	];

	const fonts = [
		{ family: '"Comic Sans MS", cursive', name: '--font-family-fun', label: 'Fun (Body)' },
		{ family: 'Impact, "Arial Black", sans-serif', name: '--font-family-heading', label: 'Heading' },
		{ family: '"Times New Roman", serif', name: '--font-family-body', label: 'Body Fallback' },
		{ family: '"Courier New", monospace', name: '--font-family-mono', label: 'Monospace' }
	];

	const sizes = [
		{ name: '--font-size-xs', value: '10px' },
		{ name: '--font-size-sm', value: '12px' },
		{ name: '--font-size-base', value: '14px' },
		{ name: '--font-size-md', value: '16px' },
		{ name: '--font-size-lg', value: '20px' },
		{ name: '--font-size-xl', value: '28px' },
		{ name: '--font-size-xxl', value: '36px' }
	];

	const spaces = [
		{ name: '--space-1', value: '4px' },
		{ name: '--space-2', value: '8px' },
		{ name: '--space-3', value: '12px' },
		{ name: '--space-4', value: '16px' },
		{ name: '--space-5', value: '24px' },
		{ name: '--space-6', value: '32px' },
		{ name: '--space-7', value: '48px' }
	];
</script>

<GeoHeading level={1}>🎨 DESIGN TOKENS</GeoHeading>

<!-- COLORS -->
<GeoHeading level={2}>Colors</GeoHeading>
<div class="swatch-grid">
	{#each colors as color}
		<div class="swatch-item">
			<div class="swatch-box" style="background: {color.value}; border: 1px solid #333;"></div>
			<div class="swatch-info">
				<span class="swatch-label">{color.label}</span>
				<code class="swatch-value">{color.value}</code>
				<code class="swatch-name">{color.name}</code>
			</div>
		</div>
	{/each}
</div>

<RainbowHR />

<!-- TYPOGRAPHY -->
<GeoHeading level={2}>Typography</GeoHeading>

<h3 class="section-sub">Font Families</h3>
{#each fonts as font}
	<div class="font-sample" style="font-family: {font.family};">
		<code class="font-token">{font.name}</code>
		<span class="font-label">{font.label}</span>
		<p>The quick brown fox jumps over the lazy dog. SCREAMING CAPITALS. 0123456789</p>
	</div>
{/each}

<RainbowHR />

<h3 class="section-sub">Font Sizes</h3>
{#each sizes as size}
	<div class="size-sample">
		<code class="size-token">{size.name}: {size.value}</code>
		<span style="font-size: {size.value};">Sample text at {size.value}</span>
	</div>
{/each}

<RainbowHR />

<!-- SPACING -->
<GeoHeading level={2}>Spacing</GeoHeading>
<div class="spacing-grid">
	{#each spaces as space}
		<div class="spacing-item">
			<div class="spacing-box" style="width: {space.value}; height: {space.value};"></div>
			<code>{space.name}: {space.value}</code>
		</div>
	{/each}
</div>

<RainbowHR />

<!-- BORDERS -->
<GeoHeading level={2}>Borders</GeoHeading>
<div class="border-demos">
	<div class="border-demo" style="border: 2px ridge #6600CC;">
		<code>--border-table</code>: 2px ridge #6600CC
	</div>
	<div class="border-demo" style="border: 2px solid #00FFFF;">
		<code>--border-panel</code>: 2px solid #00FFFF
	</div>
	<div class="border-demo" style="border: 1px solid #00FFFF;">
		<code>--border-glow</code>: 1px solid #00FFFF
	</div>
</div>

<RainbowHR />

<!-- EFFECTS -->
<GeoHeading level={2}>Effects</GeoHeading>
<div class="effects-demos">
	<p class="glow-demo" style="text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;">Cyan Glow (--glow-cyan)</p>
	<p class="glow-demo" style="text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;">Green Glow (--glow-green)</p>
	<p class="glow-demo" style="text-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF;">Pink Glow (--glow-pink)</p>
	<p class="glow-demo" style="text-shadow: 0 0 10px #FF0000, 0 0 20px #FF0000;">Red Glow (--glow-red)</p>
	<p class="blink-demo" style="animation: blink 1s step-end infinite; color: #FF0000;">Blink Animation</p>
</div>

<RainbowHR />

<style>
	.swatch-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: var(--space-3);
		margin: var(--space-4) 0;
	}
	.swatch-item {
		display: flex;
		gap: var(--space-2);
		align-items: center;
	}
	.swatch-box {
		width: 40px;
		height: 40px;
		flex-shrink: 0;
	}
	.swatch-info {
		display: flex;
		flex-direction: column;
	}
	.swatch-label {
		color: var(--color-text);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
	}
	.swatch-value {
		color: var(--color-text-muted);
		font-size: 9px;
	}
	.swatch-name {
		color: var(--color-text-heading);
		font-size: 8px;
	}
	.section-sub {
		font-family: var(--font-family-fun);
		color: var(--color-text-warning);
		font-size: var(--font-size-md);
		text-shadow: none;
		letter-spacing: 0;
		text-transform: none;
		margin: var(--space-4) 0 var(--space-2);
	}
	.font-sample {
		margin-bottom: var(--space-4);
		padding: var(--space-3);
		border: 1px solid var(--color-border-table);
	}
	.font-token {
		color: var(--color-text-heading);
		font-size: var(--font-size-xs);
		display: block;
		margin-bottom: var(--space-1);
	}
	.font-label {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
		display: block;
		margin-bottom: var(--space-2);
	}
	.size-sample {
		margin-bottom: var(--space-2);
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
	}
	.size-token {
		color: var(--color-text-heading);
		font-size: var(--font-size-xs);
		min-width: 200px;
	}
	.spacing-grid {
		display: flex;
		gap: var(--space-4);
		align-items: flex-end;
		flex-wrap: wrap;
		margin: var(--space-4) 0;
	}
	.spacing-item {
		text-align: center;
	}
	.spacing-box {
		background: var(--color-text-heading);
		opacity: 0.5;
		margin-bottom: var(--space-1);
	}
	.spacing-item code {
		color: var(--color-text-muted);
		font-size: 8px;
	}
	.border-demos {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		margin: var(--space-4) 0;
	}
	.border-demo {
		padding: var(--space-3);
		font-size: var(--font-size-sm);
	}
	.border-demo code {
		color: var(--color-text-heading);
	}
	.effects-demos {
		margin: var(--space-4) 0;
	}
	.glow-demo {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-bold);
		margin-bottom: var(--space-3);
	}
	.blink-demo {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-bold);
	}
</style>
