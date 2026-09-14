import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site, url }) => {
  const origin = site ?? url;
  const sitemap = new URL('/sitemap.xml', origin).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
