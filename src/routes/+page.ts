import { getSignals, getBodyCount } from '$lib/content';

export function load() {
	const signals = getSignals();
	const bodyCount = getBodyCount();
	return {
		signalCount: signals.length,
		bodyCount
	};
}
