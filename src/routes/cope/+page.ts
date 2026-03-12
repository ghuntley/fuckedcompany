import { getCopePosts } from '$lib/content';

export function load() {
	return { posts: getCopePosts() };
}
