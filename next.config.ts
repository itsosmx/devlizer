import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
        pathname: "/**"
      }
    ]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withPayload(nextConfig));