<script lang="ts">
	interface Props {
		text: string;
		href?: string;
		bgColor?: string;
		textColor?: string;
		borderColor?: string;
	}

	let {
		text,
		href = '#',
		bgColor = '#333399',
		textColor = '#FFFFFF',
		borderColor = '#888888'
	}: Props = $props();
</script>

<a {href} class="badge-88x31" style="background:{bgColor}; color:{textColor}; border-color:{borderColor};">
	{text}
</a>

<style>
	.badge-88x31 {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 88px;
		height: 31px;
		font-family: var(--font-family-mono);
		font-size: 8px;
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
		text-decoration: none;
		border: 1px solid;
		border-radius: 0;
		overflow: hidden;
		text-align: center;
		line-height: 1.1;
		padding: 2px;
		letter-spacing: 0.5px;
	}
	.badge-88x31:hover {
		opacity: 0.8;
	}
</style>
