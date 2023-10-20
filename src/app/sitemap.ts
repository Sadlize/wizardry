import type { MetadataRoute } from 'next';
import translations from 'shared/constants/translations';

import { methods as sitemapApi } from './model/services/fetchSitemap';

const URL = translations.common.siteURL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data, errorCode } = await sitemapApi.get();

  if (errorCode && errorCode !== 404) {
    throw new Error(errorCode.toString());
  }

  return data.map(({ url, lastModified, priority }) => ({
    url: URL + url,
    lastModified,
    priority,
  }));
}
