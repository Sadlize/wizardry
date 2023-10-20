import { sitemapMock } from 'shared/mocks/sitemapMock';
import { ZodError } from 'zod';

import { schemaSitemap, type SitemapProps } from '../types/sitemapType';

const get = async () => {
  let fetchData: SitemapProps = [];
  let errorCode: undefined | number;
  try {
    // Request - Choose your favourite
    // const response = await fetch();
    // fetchData = schemaSitemap.parse(response);

    // Mock
    fetchData = schemaSitemap.parse(sitemapMock);
  } catch (error) {
    console.error('sitemap', error);

    if (error) {
      // errorCode = error.status;
    } else if (error instanceof ZodError) {
      errorCode = 422;
    }
  }

  return {
    data: fetchData,
    errorCode,
  };
};

export const methods = {
  get,
};
