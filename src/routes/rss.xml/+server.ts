import { getSignals } from '$lib/content';

export const prerender = true;

function escapeXml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function toRFC822(dateStr: string): string {
	const d = new Date(dateStr);
	return d.toUTCString();
}

export async function GET() {
	const site = 'https://fuckedcompany.com';
	const signals = getSignals();
	const lastBuildDate = signals.length > 0 ? toRFC822(signals[0].date) : new Date().toUTCString();

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>☠ FuckedCompany.com — AI Dead Pool</title>
    <link>${site}</link>
    <description>Official Lubricant of the AI Economy. Tracking humans replaced by AI.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${signals
	.map(
		s => `    <item>
      <title>${escapeXml(s.title)}</title>
      <link>${site}/pool/${s.slug}</link>
      <description><![CDATA[${s.body}]]></description>
      <pubDate>${toRFC822(s.date)}</pubDate>
      <guid isPermaLink="true">${site}/pool/${s.slug}</guid>
      <category>${s.status}</category>
    </item>`
	)
	.join('\n')}
  </channel>
</rss>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/rss+xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
