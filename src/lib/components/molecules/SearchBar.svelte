<script lang="ts">
	import TextInput from '$lib/components/atoms/TextInput.svelte';
	import GeoButton from '$lib/components/atoms/GeoButton.svelte';

	let query = $state('');

	function handleSearch() {
		alert('SEARCH IS FUCKED. Try again when humans still have jobs to search for.');
	}
</script>

<form class="search-bar" onsubmit={(e) => { e.preventDefault(); handleSearch(); }}>
	<TextInput name="q" placeholder="search the dead..." bind:value={query} />
	<GeoButton type="submit">SEARCH</GeoButton>
</form>

<style>
	.search-bar {
		display: inline-flex;
		gap: var(--space-2);
		align-items: center;
	}
</style>
