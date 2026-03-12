<script lang="ts">
	import DeadPoolTable from '$lib/components/organisms/DeadPoolTable.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>💀 Dead Pool — FuckedCompany.com</title>
</svelte:head>

<DeadPoolTable signals={data.signals} />
