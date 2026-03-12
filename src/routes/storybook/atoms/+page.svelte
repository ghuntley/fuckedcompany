<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';
	import GeoButton from '$lib/components/atoms/GeoButton.svelte';
	import TextInput from '$lib/components/atoms/TextInput.svelte';
	import StatusBadge from '$lib/components/atoms/StatusBadge.svelte';
	import PointsDisplay from '$lib/components/atoms/PointsDisplay.svelte';
	import Counter from '$lib/components/atoms/Counter.svelte';
	import Badge88x31 from '$lib/components/atoms/Badge88x31.svelte';
	import BlinkText from '$lib/components/atoms/BlinkText.svelte';
	import MarqueeText from '$lib/components/atoms/MarqueeText.svelte';
	import UnderConstructionBanner from '$lib/components/atoms/UnderConstructionBanner.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import SkullIcon from '$lib/components/atoms/SkullIcon.svelte';

	const statuses = ['AUTOMATED', 'DOWNSIZED', 'ON_NOTICE', 'RUMOR'] as const;
</script>

<GeoHeading level={1}>⚛️ ATOMS</GeoHeading>

<!-- NeonLink -->
<GeoHeading level={3}>NeonLink</GeoHeading>
<div class="demo">
	<NeonLink href="#">Default Link</NeonLink> &nbsp;|&nbsp;
	<NeonLink href="#" external>External Link</NeonLink>
</div>
<RainbowHR />

<!-- GeoButton -->
<GeoHeading level={3}>GeoButton</GeoHeading>
<div class="demo">
	<GeoButton>CLICK ME</GeoButton> &nbsp;
	<GeoButton disabled>DISABLED</GeoButton> &nbsp;
	<GeoButton type="submit">SUBMIT</GeoButton>
</div>
<RainbowHR />

<!-- TextInput -->
<GeoHeading level={3}>TextInput</GeoHeading>
<div class="demo">
	<TextInput name="demo" placeholder="type here..." />
</div>
<RainbowHR />

<!-- StatusBadge -->
<GeoHeading level={3}>StatusBadge</GeoHeading>
<div class="demo">
	{#each statuses as status}
		<StatusBadge {status} /> &nbsp;&nbsp;
	{/each}
</div>
<RainbowHR />

<!-- PointsDisplay -->
<GeoHeading level={3}>PointsDisplay</GeoHeading>
<div class="demo">
	<PointsDisplay points={85} /> &nbsp;
	<PointsDisplay points={4200} /> &nbsp;
	<PointsDisplay points={0} />
</div>
<RainbowHR />

<!-- RainbowHR -->
<GeoHeading level={3}>RainbowHR</GeoHeading>
<div class="demo">
	<RainbowHR />
</div>

<!-- Counter -->
<GeoHeading level={3}>Counter</GeoHeading>
<div class="demo">
	<Counter count={42} /> &nbsp;
	<Counter count={16000} /> &nbsp;
	<Counter count={0} />
</div>
<RainbowHR />

<!-- Badge88x31 -->
<GeoHeading level={3}>Badge88x31</GeoHeading>
<div class="demo">
	<Badge88x31 text="NETSCAPE NOW!" bgColor="#006600" textColor="#FFFFFF" borderColor="#00FF00" />
	<Badge88x31 text="HTML 4.01" bgColor="#333399" />
	<Badge88x31 text="RSS XML" bgColor="#FF6600" />
	<Badge88x31 text="MADE WITH NOTEPAD" bgColor="#000066" textColor="#00FFFF" />
	<Badge88x31 text="NO AI WAS SPARED" bgColor="#CC0000" textColor="#FFFF00" />
</div>
<RainbowHR />

<!-- BlinkText -->
<GeoHeading level={3}>BlinkText</GeoHeading>
<div class="demo">
	<BlinkText><span style="color: #FF0000; font-weight: bold;">THIS TEXT BLINKS</span></BlinkText>
</div>
<RainbowHR />

<!-- MarqueeText -->
<GeoHeading level={3}>MarqueeText</GeoHeading>
<div class="demo">
	<MarqueeText>☠ SCROLLING TEXT BECAUSE IT'S 1997 ☠ &nbsp;&nbsp;&nbsp; 💀 DEAL WITH IT 💀</MarqueeText>
</div>
<RainbowHR />

<!-- GeoHeading -->
<GeoHeading level={3}>GeoHeading (levels 1-6)</GeoHeading>
<div class="demo">
	<GeoHeading level={1}>Heading 1</GeoHeading>
	<GeoHeading level={2}>Heading 2</GeoHeading>
	<GeoHeading level={3}>Heading 3</GeoHeading>
	<GeoHeading level={4}>Heading 4</GeoHeading>
	<GeoHeading level={5}>Heading 5</GeoHeading>
	<GeoHeading level={6}>Heading 6</GeoHeading>
</div>
<RainbowHR />

<!-- UnderConstructionBanner -->
<GeoHeading level={3}>UnderConstructionBanner</GeoHeading>
<div class="demo">
	<UnderConstructionBanner />
</div>
<RainbowHR />

<!-- Logo -->
<GeoHeading level={3}>Logo</GeoHeading>
<div class="demo">
	<Logo />
</div>
<RainbowHR />

<!-- SkullIcon -->
<GeoHeading level={3}>SkullIcon</GeoHeading>
<div class="demo">
	<SkullIcon size="sm" /> &nbsp;
	<SkullIcon size="md" /> &nbsp;
	<SkullIcon size="lg" /> &nbsp;
	<SkullIcon size="sm" variant="crossbones" /> &nbsp;
	<SkullIcon size="md" variant="crossbones" /> &nbsp;
	<SkullIcon size="lg" variant="crossbones" />
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
