<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>About — FuckedCompany.com</title>
</svelte:head>

<GeoHeading level={1}>ABOUT FUCKEDCOMPANY.COM</GeoHeading>

<div class="about-content markdown-body">
	{@html data.content}
</div>

<style>
	.about-content {
		text-align: left;
		max-width: 600px;
		margin: 0 auto;
	}
</style>
