<script lang="ts">
	import CopeCornerList from '$lib/components/organisms/CopeCornerList.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>😤 Cope Corner — FuckedCompany.com</title>
</svelte:head>

<CopeCornerList posts={data.posts} />
