import { getSignalsByStatus, getBodyCount } from '$lib/content';

export function load() {
	return {
		signals: getSignalsByStatus('AUTOMATED'),
		totalBodyCount: getBodyCount()
	};
}
