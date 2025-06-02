export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devlizer.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/.next/',
          '/private/',
          '/dashboard/',
          '/auth/',
        ],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
