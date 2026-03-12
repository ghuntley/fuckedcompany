<script lang="ts">
	import SignalFeed from '$lib/components/organisms/SignalFeed.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>☠ FuckedCompany.com — AI Dead Pool ☠</title>
</svelte:head>

<!-- GeoCities-authentic table-based 2-column layout -->
<table class="homepage-layout" role="presentation">
	<tbody><tr>
		<td class="main-column">
			<SignalFeed signals={data.signals} />
		</td>
		<td class="sidebar-column">
			<Sidebar signals={data.allSignals} users={data.topUsers} bodyCount={data.bodyCount} />
		</td>
	</tr></tbody>
</table>

<style>
	.homepage-layout {
		width: 100%;
		border: none;
		border-collapse: collapse;
	}
	.main-column {
		vertical-align: top;
		width: 65%;
		padding-right: var(--space-3);
	}
	.sidebar-column {
		vertical-align: top;
		width: 35%;
	}
	/* Override global table styles for layout table */
	.homepage-layout, .homepage-layout tr, .homepage-layout td {
		background: transparent;
		border: none;
	}
	.homepage-layout tr:hover {
		background: transparent;
	}
</style>
