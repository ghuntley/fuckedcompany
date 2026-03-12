import { getSignals } from '$lib/content';

export function load() {
	return { signals: getSignals() };
}
