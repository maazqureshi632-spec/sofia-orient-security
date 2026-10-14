import type { APIRoute } from 'astro';
import { nav } from '../data/site';

// All public pages are listed in the main navigation; the 404 page is deliberately excluded.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://sofiaorientsecurity.com');
  const urls = nav
    .map((n) => `  <url>\n    <loc>${new URL(n.href, base).href}</loc>\n  </url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
