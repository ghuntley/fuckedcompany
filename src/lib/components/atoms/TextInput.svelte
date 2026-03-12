<script lang="ts">
	interface Props {
		name: string;
		placeholder?: string;
		type?: string;
		value?: string;
	}

	let { name, placeholder = '', type = 'text', value = $bindable('') }: Props = $props();
</script>

<input {type} {name} {placeholder} bind:value class="text-input" />

<style>
	.text-input {
		background: var(--color-bg-input);
		color: var(--color-text);
		border: var(--border-input);
		border-radius: var(--radius);
		font-family: var(--font-family-fun);
		font-size: var(--font-size-sm);
		padding: var(--space-1) var(--space-2);
	}
	.text-input::placeholder {
		color: var(--color-text-muted);
	}
	.text-input:focus {
		outline: none;
		border-color: var(--color-text-heading);
		box-shadow: 0 0 5px var(--color-border-glow);
	}
</style>
