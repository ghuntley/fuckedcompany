import { getCopeBySlug, getCopeSlugs } from '$lib/content';
import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
	const post = getCopeBySlug(params.slug);
	if (!post) throw error(404, 'Post not found');
	return { post };
}

export function entries() {
	return getCopeSlugs().map(slug => ({ slug }));
}
