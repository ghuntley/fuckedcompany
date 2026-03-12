import { leaderboard } from '$lib/data/leaderboard';

export function load() {
	return { users: leaderboard };
}
