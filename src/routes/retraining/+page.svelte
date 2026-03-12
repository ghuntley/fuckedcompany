<script lang="ts">
	import GeoHeading from '$lib/components/atoms/GeoHeading.svelte';
	import RainbowHR from '$lib/components/atoms/RainbowHR.svelte';
	import NeonLink from '$lib/components/atoms/NeonLink.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>📚 Retraining Board — FuckedCompany.com</title>
</svelte:head>

<GeoHeading level={2}>📚 RETRAINING BOARD 📚</GeoHeading>
<p class="subtitle">YOUR OLD JOB IS DEAD. HERE ARE YOUR OPTIONS.</p>
<RainbowHR />

<table>
	<thead>
		<tr>
			<th>💼 POSITION</th>
			<th>COMPANY</th>
			<th>LOCATION</th>
			<th>SALARY</th>
			<th>DATE</th>
		</tr>
	</thead>
	<tbody>
		{#each data.jobs as job}
			<tr>
				<td class="job-title">{job.title}</td>
				<td class="company">{job.company}</td>
				<td class="location">{job.location}</td>
				<td class="salary">{job.salary}</td>
				<td class="date">{job.date}</td>
			</tr>
		{/each}
	</tbody>
</table>

<RainbowHR />

{#each data.jobs as job}
	<div class="job-detail">
		<h3 class="job-heading">{job.title} — {job.company}</h3>
		<div class="job-meta">
			📍 {job.location} &nbsp;|&nbsp; 💰 {job.salary}
		</div>
		<div class="markdown-body">
			{@html job.body}
		</div>
		{#if job.tags.length > 0}
			<div class="tags">
				{#each job.tags as tag}
					<span class="tag">[{tag}]</span>
				{/each}
			</div>
		{/if}
		<RainbowHR />
	</div>
{/each}

<style>
	.subtitle {
		color: var(--color-text-hot);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		text-align: center;
		margin-bottom: var(--space-2);
	}
	.job-title {
		color: var(--color-text-heading);
		font-weight: var(--font-weight-bold);
	}
	.company {
		color: var(--color-text-hot);
	}
	.location {
		color: var(--color-text);
		font-size: var(--font-size-xs);
	}
	.salary {
		color: var(--color-text-warning);
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
	}
	.date {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}
	.job-detail {
		margin-top: var(--space-4);
		text-align: left;
	}
	.job-heading {
		font-family: var(--font-family-fun);
		color: var(--color-text-heading);
		font-size: var(--font-size-md);
		text-shadow: none;
		letter-spacing: 0;
		text-transform: none;
		margin-bottom: var(--space-2);
	}
	.job-meta {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
		margin-bottom: var(--space-3);
	}
	.tags {
		margin-top: var(--space-2);
	}
	.tag {
		color: var(--color-text-hot);
		font-size: var(--font-size-xs);
		margin-right: var(--space-1);
	}
</style>
