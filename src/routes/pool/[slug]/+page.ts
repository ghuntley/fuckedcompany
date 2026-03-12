import { getSignalBySlug, getSignalSlugs } from '$lib/content';
import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
	const signal = getSignalBySlug(params.slug);
	if (!signal) throw error(404, 'Signal not found');
	return { signal };
}

export function entries() {
	return getSignalSlugs().map(slug => ({ slug }));
}
