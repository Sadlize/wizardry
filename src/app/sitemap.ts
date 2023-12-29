import type { MetadataRoute } from 'next';

import { siteUrl } from '@/config/env';

import { methods as sitemapApi } from './model/services/fetchSitemap';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data, errorCode } = await sitemapApi.get();

  if (errorCode && errorCode !== 404) {
    throw new Error(errorCode.toString());
  }

  return data.map(({ url, lastModified, priority }) => ({
    url: siteUrl + url,
    lastModified,
    priority,
  }));
}
