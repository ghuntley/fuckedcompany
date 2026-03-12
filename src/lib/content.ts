import matter from 'gray-matter';
import { marked } from 'marked';
import type { Signal, CopePost, RetrainingJob, SignalStatus } from './types';

// Load all markdown files at build time
const signalFiles = import.meta.glob('/src/content/signals/*.md', { query: '?raw', eager: true, import: 'default' }) as Record<string, string>;
const copeFiles = import.meta.glob('/src/content/cope/*.md', { query: '?raw', eager: true, import: 'default' }) as Record<string, string>;
const retrainingFiles = import.meta.glob('/src/content/retraining/*.md', { query: '?raw', eager: true, import: 'default' }) as Record<string, string>;
const pageFiles = import.meta.glob('/src/content/pages/*.md', { query: '?raw', eager: true, import: 'default' }) as Record<string, string>;

function parseSignal(raw: string): Signal {
	const { data, content } = matter(raw);
	return {
		title: data.title ?? '',
		slug: data.slug ?? '',
		company: data.company ?? '',
		role: data.role ?? '',
		status: (data.status ?? 'RUMOR') as SignalStatus,
		body_count: data.body_count ?? 0,
		date: data.date ?? '',
		points: data.points ?? 0,
		tags: data.tags ?? [],
		body: marked.parse(content, { async: false }) as string
	};
}

function parseCope(raw: string): CopePost {
	const { data, content } = matter(raw);
	return {
		title: data.title ?? '',
		slug: data.slug ?? '',
		author: data.author ?? 'anonymous',
		date: data.date ?? '',
		tags: data.tags ?? [],
		body: marked.parse(content, { async: false }) as string
	};
}

function parseRetraining(raw: string): RetrainingJob {
	const { data, content } = matter(raw);
	return {
		title: data.title ?? '',
		slug: data.slug ?? '',
		company: data.company ?? '',
		location: data.location ?? '',
		salary: data.salary ?? '',
		date: data.date ?? '',
		tags: data.tags ?? [],
		body: marked.parse(content, { async: false }) as string
	};
}

// === SIGNALS ===

export function getSignals(): Signal[] {
	return Object.values(signalFiles)
		.map(parseSignal)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getSignalBySlug(slug: string): Signal | undefined {
	return getSignals().find(s => s.slug === slug);
}

export function getSignalsByStatus(status: SignalStatus): Signal[] {
	return getSignals().filter(s => s.status === status);
}

export function getSignalSlugs(): string[] {
	return getSignals().map(s => s.slug);
}

// === COPE POSTS ===

export function getCopePosts(): CopePost[] {
	return Object.values(copeFiles)
		.map(parseCope)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCopeBySlug(slug: string): CopePost | undefined {
	return getCopePosts().find(p => p.slug === slug);
}

export function getCopeSlugs(): string[] {
	return getCopePosts().map(p => p.slug);
}

// === RETRAINING JOBS ===

export function getRetrainingJobs(): RetrainingJob[] {
	return Object.values(retrainingFiles)
		.map(parseRetraining)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// === PAGES ===

export function getPageContent(slug: string): string {
	const key = Object.keys(pageFiles).find(k => k.includes(`/${slug}.md`));
	if (!key) return '';
	const { content } = matter(pageFiles[key]);
	return marked.parse(content, { async: false }) as string;
}

// === DERIVED DATA ===

export function getBodyCount(): number {
	return getSignals().reduce((sum, s) => sum + s.body_count, 0);
}

export function getCompanies(): { name: string; count: number }[] {
	const signals = getSignals();
	const counts = new Map<string, number>();
	for (const s of signals) {
		counts.set(s.company, (counts.get(s.company) ?? 0) + 1);
	}
	return Array.from(counts.entries())
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count);
}
