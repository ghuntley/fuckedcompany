import { getRetrainingJobs } from '$lib/content';

export function load() {
	return { jobs: getRetrainingJobs() };
}
