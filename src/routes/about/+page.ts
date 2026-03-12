import { getPageContent } from '$lib/content';

export function load() {
	return { content: getPageContent('about') };
}
