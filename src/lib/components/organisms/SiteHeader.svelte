<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import NavBar from '$lib/components/molecules/NavBar.svelte';
	import BodyCountTicker from './BodyCountTicker.svelte';

	interface Props {
		bodyCount: number;
	}

	let { bodyCount }: Props = $props();
</script>

<header class="site-header">
	<Logo />
	<BodyCountTicker count={bodyCount} />
	<NavBar />
</header>

<style>
	.site-header {
		background: var(--color-bg);
		border-bottom: var(--border-panel);
		padding: var(--space-4);
		text-align: center;
	}
</style>
