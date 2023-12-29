import type { MetadataRoute } from 'next';

import { siteUrl } from '@/config/env';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
