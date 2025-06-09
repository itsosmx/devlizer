import { generateMetadata, generateStructuredData } from '@/lib/seo';

export function generatePageMetadata(params: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
  noIndex?: boolean;
}) {
  return generateMetadata(params);
}

export function generateArticleMetadata(params: {
  title: string;
  description: string;
  image?: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  locale?: string;
}) {
  return generateMetadata({
    ...params,
    type: 'article',
  });
}

export const aboutPageMetadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about Devlizer\'s mission to empower developers with modern tools and solutions. Discover our team, values, and commitment to excellence.',
  keywords: [
    'about devlizer',
    'development team',
    'company mission',
    'software development company',
    'development expertise',
    'technology solutions',
    'development consulting'
  ],
  url: '/about',
});

export const servicesPageMetadata = generateMetadata({
  title: 'Services',
  description: 'Explore Devlizer\'s comprehensive development services including web development, mobile apps, UI/UX design, and consulting.',
  keywords: [
    'development services',
    'web development services',
    'mobile app development',
    'ui ux design services',
    'software consulting',
    'custom development',
    'enterprise solutions',
    'api development services',
    'database design services',
    'cloud solutions'
  ],
  url: '/services',
});

export const contactPageMetadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Devlizer for your development needs. Contact our team for consultations, project discussions, and support.',
  keywords: [
    'contact devlizer',
    'development consultation',
    'project inquiry',
    'development support',
    'get quote',
    'hire developers',
    'software development inquiry'
  ],
  url: '/contact',
});

export const blogPageMetadata = generateMetadata({
  title: 'Blog',
  description: 'Stay updated with the latest in development trends, tutorials, and insights from the Devlizer team. Learn about modern web and mobile development.',
  keywords: [
    'development blog',
    'programming tutorials',
    'web development tips',
    'mobile development guides',
    'react tutorials',
    'next.js guides',
    'typescript tips',
    'development best practices',
    'coding tutorials',
    'software engineering blog'
  ],
  url: '/blog',
});

export const portfolioPageMetadata = generateMetadata({
  title: 'Portfolio',
  description: 'Explore Devlizer\'s portfolio of successful projects. See our work in web development, mobile apps, and enterprise solutions.',
  keywords: [
    'devlizer portfolio',
    'development projects',
    'web app showcase',
    'mobile app portfolio',
    'project case studies',
    'development work samples',
    'client projects',
    'enterprise solutions showcase'
  ],
  url: '/portfolio',
});

// Homepage structured data
export const homeStructuredData = generateStructuredData({
  title: 'Devlizer - Your One-Stop Solution for Development',
  description: 'Accelerate your development journey with Devlizer. From mobile apps to web applications, we provide cutting-edge solutions for modern developers.',
  url: '/',
});

// Service structured data
export function generateServiceStructuredData(service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Devlizer',
      url: 'https://devlizer.com',
    },
    url: `https://devlizer.com${service.url}`,
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD',
      },
    }),
    ...(service.duration && {
      estimatedDuration: service.duration,
    }),
  };
}

// Article structured data
export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `https://devlizer.com${article.url}`,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.author || 'Devlizer Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devlizer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://devlizer.com/logo.png',
      },
    },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image.startsWith('http') ? article.image : `https://devlizer.com${article.image}`,
      },
    }),
  };
}
