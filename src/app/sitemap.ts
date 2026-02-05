import { MetadataRoute } from 'next';
import { getBlogPages, getBlogPosts } from '@/services/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devlizer.com';
  const currentDate = new Date().toISOString();

  // Fetch blog data
  const [blogPages, blogPosts] = await Promise.all([
    getBlogPages(),
    getBlogPosts()
  ]);

  // Generate blog pages sitemap entries
  const blogPagesEntries: MetadataRoute.Sitemap = blogPages.map((page: any) => ({
    url: `${baseUrl}/blog/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/en/blog/${page.slug}`,
      },
    },
  }));

  // Generate blog posts sitemap entries
  const blogPostsEntries: MetadataRoute.Sitemap = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.page?.slug || 'general'}/${post.slug}`,
    lastModified: post.publishedAt || currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
    alternates: {
      languages: {
        en: `${baseUrl}/en/blog/${post.page?.slug || 'general'}/${post.slug}`,
      },
    },
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          ar: `${baseUrl}/ar/blog`,
        },
      },
    },
    ...blogPagesEntries,
    ...blogPostsEntries,
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    //   alternates: {
    //     languages: {
    //       en: `${baseUrl}/en/about`,
    //     },
    //   },
    // },
    // {
    //   url: `${baseUrl}/services`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    //   alternates: {
    //     languages: {
    //       en: `${baseUrl}/en/services`,
    //     },
    //   },
    // },
    // {
    //   url: `${baseUrl}/portfolio`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    //   alternates: {
    //     languages: {
    //       en: `${baseUrl}/en/portfolio`,
    //     },
    //   },
    // },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          ar: `${baseUrl}/ar/contact`,
        },
      },
    },
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: currentDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    //   alternates: {
    //     languages: {
    //       en: `${baseUrl}/en/privacy`,
    //     },
    //   },
    // },
    // {
    //   url: `${baseUrl}/terms`,
    //   lastModified: currentDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    //   alternates: {
    //     languages: {
    //       en: `${baseUrl}/en/terms`,
    //     },
    //   },
    // },
  ];
}
