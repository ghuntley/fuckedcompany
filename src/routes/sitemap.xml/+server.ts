import { getSignals, getCopePosts } from '$lib/content';

export const prerender = true;

function escapeXml(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function GET() {
	const site = 'https://fuckedcompany.com';
	const signals = getSignals();
	const copePosts = getCopePosts();

	const staticRoutes = [
		{ path: '/', priority: '1.0', changefreq: 'daily' },
		{ path: '/pool', priority: '0.8', changefreq: 'weekly' },
		{ path: '/killist', priority: '0.8', changefreq: 'weekly' },
		{ path: '/cope', priority: '0.7', changefreq: 'weekly' },
		{ path: '/leaderboard', priority: '0.6', changefreq: 'weekly' },
		{ path: '/retraining', priority: '0.6', changefreq: 'monthly' },
		{ path: '/about', priority: '0.5', changefreq: 'monthly' }
	];

	const signalRoutes = signals.map(s => ({
		path: `/pool/${s.slug}`,
		priority: '0.6',
		changefreq: 'monthly',
		lastmod: s.date
	}));

	const copeRoutes = copePosts.map(p => ({
		path: `/cope/${p.slug}`,
		priority: '0.5',
		changefreq: 'monthly',
		lastmod: p.date
	}));

	const allRoutes = [...staticRoutes, ...signalRoutes, ...copeRoutes];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
	.map(
		r => `  <url>
    <loc>${escapeXml(site + r.path)}</loc>
    ${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : ''}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
