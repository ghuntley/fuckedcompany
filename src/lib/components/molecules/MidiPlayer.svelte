<script lang="ts">
	import GeoButton from '$lib/components/atoms/GeoButton.svelte';
</script>

<div class="midi-player">
	<span class="midi-icon">🔊</span>
	<span class="midi-text">NOW PLAYING: funeral_march.mid</span>
	<GeoButton onclick={() => alert('THE MUSIC NEVER STOPS. LIKE THE LAYOFFS.')}>STOP</GeoButton>
</div>

<style>
	.midi-player {
		background: var(--color-bg-panel);
		border: var(--border-glow);
		padding: var(--space-2);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.midi-icon {
		font-size: var(--font-size-base);
	}
	.midi-text {
		color: var(--color-text-muted);
		flex: 1;
	}
</style>
