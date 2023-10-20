import type { MetadataRoute } from 'next';
import translations from 'shared/constants/translations';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: translations.common.siteURL,
    sitemap: `${translations.common.siteURL}/sitemap.xml`,
  };
}
