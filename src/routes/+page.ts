import { getSignals, getBodyCount } from '$lib/content';
import { leaderboard } from '$lib/data/leaderboard';

export function load() {
	return {
		signals: getSignals().slice(0, 10),
		allSignals: getSignals().slice(0, 5),
		bodyCount: getBodyCount(),
		topUsers: leaderboard.slice(0, 5)
	};
}
