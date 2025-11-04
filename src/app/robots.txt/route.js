export function GET() {
  const content = `User-agent: *
Disallow:

Sitemap: https://zemalt.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}