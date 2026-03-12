<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		variant?: 'skull' | 'crossbones';
	}

	let { size = 'md', variant = 'skull' }: Props = $props();

	const emoji = variant === 'crossbones' ? '☠' : '💀';

	const sizeMap = {
		sm: 'var(--font-size-base)',
		md: 'var(--font-size-lg)',
		lg: 'var(--font-size-xxl)'
	};
</script>

<span class="skull-icon" style="font-size: {sizeMap[size]}">{emoji}</span>

<style>
	.skull-icon {
		display: inline;
	}
</style>
