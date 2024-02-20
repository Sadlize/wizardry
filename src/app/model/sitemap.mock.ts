import { getPath } from 'shared/routing/paths';

export const sitemapMock = [
  {
    url: getPath('homepage'),
    lastModified: new Date(),
    priority: 1,
  },
];
