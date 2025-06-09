import { Metadata } from 'next';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  locale?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  tags?: string[];
  noIndex?: boolean;
}

const defaultConfig = {
  siteName: 'Devlizer',
  defaultTitle: 'Your Partner for Digital Success',
  defaultDescription: 'Transform your business with Devlizer. From mobile apps to professional websites, we create digital solutions that help your business grow and succeed.',
  siteUrl: 'https://devlizer.com',
  defaultImage: '/logo.png',
  author: 'Devlizer Team',
  keywords: [
    'professional websites',
    'mobile apps',
    'business software',
    'website design',
    'mobile app creation',
    'digital solutions',
    'business technology',
    'user experience design',
    'responsive design',
    'business apps',
    'business consulting',
    'enterprise solutions',
    'custom business software',
    'digital transformation',
    'web development',
    'developer services',
    'software development',
    'devlizer',
    "website development",
    'mobile development',
    "systems integration",
    'cloud solutions',
    'e-commerce solutions',
    'SEO optimization',
  ],
};

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title,
    description = defaultConfig.defaultDescription,
    keywords = defaultConfig.keywords,
    image = defaultConfig.defaultImage,
    url,
    type = 'website',
    locale = 'en',
    siteName = defaultConfig.siteName,
    author = defaultConfig.author,
    publishedTime,
    modifiedTime,
    category,
    tags,
    noIndex = false,
  } = config;

  const metaTitle = title
    ? `${title} - ${defaultConfig.siteName}`
    : defaultConfig.defaultTitle;

  const metaImage = image.startsWith('http')
    ? image
    : `${defaultConfig.siteUrl}${image}`;

  const metaUrl = url
    ? `${defaultConfig.siteUrl}${url}`
    : defaultConfig.siteUrl;
  return {
    title: metaTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    applicationName: siteName,
    appleWebApp: {
      capable: true,
      title: siteName,
      statusBarStyle: 'black-translucent',
    },
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon.png', sizes: 'any' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: metaUrl,
      title: metaTitle,
      description,
      siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime,
        authors: [author],
        tags,
        section: category,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [metaImage],
      creator: '@devlizer',
      site: '@devlizer',
    },
    alternates: {
      canonical: metaUrl,
      languages: {
        'en': `${defaultConfig.siteUrl}/en`,
        'x-default': defaultConfig.siteUrl,
      },
    },
    // verification: {
    //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    //   yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    //   yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    //   other: {
    //     'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    //   },
    // },
    category,
    classification: 'Business',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultConfig.siteUrl),
    // other: {
    //   ...(process.env.NODE_ENV === 'production' && {
    //     'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    //   }),
    //   'geo.region': 'EG',
    //   'geo.placename': 'Egypt',
    //   'geo.position': '39.78373;-100.445882',
    //   'ICBM': '39.78373, -100.445882',
    //   'msapplication-TileColor': '#000000',
    //   'msapplication-config': '/browserconfig.xml',
    // },
  };
}

export function generateStructuredData(config: SEOConfig = {}) {
  const {
    title = defaultConfig.defaultTitle,
    description = defaultConfig.defaultDescription,
    image = defaultConfig.defaultImage,
    url,
    type = 'website',
    author = defaultConfig.author,
    publishedTime,
    modifiedTime,
  } = config;

  const baseUrl = defaultConfig.siteUrl;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: defaultConfig.siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: defaultConfig.defaultDescription,
    sameAs: [
      'https://twitter.com/devlizer',
      'https://linkedin.com/company/devlizer',
      'https://github.com/devlizer',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultConfig.siteName,
    url: baseUrl,
    description: defaultConfig.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: defaultConfig.siteName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: fullUrl,
    image: fullImage,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: defaultConfig.siteName,
      url: baseUrl,
    },
    author: {
      '@type': type === 'article' ? 'Person' : 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: defaultConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    ...(publishedTime && {
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
    }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ],
  };

  return {
    organization: organizationSchema,
    website: websiteSchema,
    webPage: webPageSchema,
    breadcrumb: breadcrumbSchema,
  };
}

export const defaultSEO = generateMetadata();
