<script lang="ts">
	import KillListArchive from '$lib/components/organisms/KillListArchive.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>☠ Kill List — FuckedCompany.com</title>
</svelte:head>

<KillListArchive signals={data.signals} totalBodyCount={data.totalBodyCount} />
