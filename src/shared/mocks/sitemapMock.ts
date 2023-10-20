import { getPath } from 'shared/constants/routes';

export const sitemapMock = [
  {
    url: getPath('homepage'),
    lastModified: new Date(),
    priority: 1,
  },
];
