export type SignalStatus = 'AUTOMATED' | 'DOWNSIZED' | 'ON_NOTICE' | 'RUMOR';

export interface Signal {
	title: string;
	slug: string;
	company: string;
	role: string;
	status: SignalStatus;
	body_count: number;
	date: string;
	points: number;
	tags: string[];
	body: string;
}

export interface CopePost {
	title: string;
	slug: string;
	author: string;
	date: string;
	tags: string[];
	body: string;
}

export interface RetrainingJob {
	title: string;
	slug: string;
	company: string;
	location: string;
	salary: string;
	date: string;
	tags: string[];
	body: string;
}

export interface LeaderboardUser {
	rank: number;
	username: string;
	points: number;
	accuracy: number;
	predictions: number;
}
