<script lang="ts">
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import Badge88x31 from '$lib/components/atoms/Badge88x31.svelte';
	import BlinkText from '$lib/components/atoms/BlinkText.svelte';
	import WebRing from '$lib/components/molecules/WebRing.svelte';
</script>

<footer class="site-footer">
	<RainbowHR />

	<div class="badge-row">
		<Badge88x31 text="NETSCAPE NOW!" bgColor="#006600" textColor="#FFFFFF" borderColor="#00FF00" />
		<Badge88x31 text="HTML 4.01" bgColor="#333399" textColor="#FFFFFF" borderColor="#6666CC" />
		<Badge88x31 text="RSS XML" href="/rss.xml" bgColor="#FF6600" textColor="#FFFFFF" borderColor="#CC5500" />
		<Badge88x31 text="MADE WITH NOTEPAD" bgColor="#000066" textColor="#00FFFF" borderColor="#0000FF" />
	</div>

	<WebRing />

	<div class="footer-text">
		<p class="copyright">© 2026 FUCKEDCOMPANY.COM</p>
		<p class="rip"><BlinkText><span class="rip-text">R.I.P. HUMAN LABOR, 2024–????</span></BlinkText></p>
		<p class="made-with">Made with 💀 and SvelteKit</p>
	</div>

	<div class="netscape-notice">
		Best viewed in NETSCAPE NAVIGATOR 4.0 at 800x600
	</div>

	<div class="visitor-counter">
		YOU ARE VISITOR #<span class="counter-number">048,291</span>
	</div>

	<pre class="ascii-skull">{`
      ___
     /   \\
    | x x |
    |  ^  |
     \\___/
    /|   |\\
   / |   | \\
  HUMANS ARE
   TEMPORARY
`}</pre>
</footer>

<style>
	.site-footer {
		background: var(--color-bg);
		border-top: var(--border-panel);
		padding: var(--space-6);
		text-align: center;
		margin-top: var(--space-6);
	}
	.badge-row {
		display: flex;
		justify-content: center;
		gap: var(--space-2);
		flex-wrap: wrap;
		margin-bottom: var(--space-4);
	}
	.footer-text {
		margin: var(--space-4) 0;
	}
	.copyright {
		color: var(--color-text);
		font-size: var(--font-size-xs);
		margin-bottom: var(--space-2);
	}
	.rip-text {
		color: var(--color-status-automated);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
	}
	.made-with {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
		margin-top: var(--space-2);
	}
	.netscape-notice {
		color: var(--color-text-muted);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-xs);
		margin: var(--space-4) 0;
	}
	.visitor-counter {
		font-family: var(--font-family-mono);
		color: var(--color-text-warning);
		font-size: var(--font-size-sm);
		margin: var(--space-3) 0;
	}
	.counter-number {
		font-weight: var(--font-weight-bold);
		color: var(--color-text-warning);
		text-shadow: var(--glow-green);
	}
	.ascii-skull {
		font-family: var(--font-family-mono);
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
		line-height: 1.2;
		margin: var(--space-4) auto;
		display: inline-block;
		text-align: center;
	}
</style>
