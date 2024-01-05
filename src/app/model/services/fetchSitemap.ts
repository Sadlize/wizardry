import { requestHandler } from 'shared/lib/fetch/requestHandler';
import { sitemapMock } from 'shared/mocks/sitemapMock';

import { schemaSitemap, type SitemapProps } from '../types/sitemapType';
// import fetch from "shared/lib/fetch";

const get = async () => {
  const { data = [], errorCode } = await requestHandler<SitemapProps>(
    // Fetch - Choose your favourite or try our
    // async () => {
    //     const response = await fetch.get(
    //       'https://jsonplaceholder.typicode.com/posts',
    //       {
    //         headers: {Authorization: ''},
    //         json: true,
    //         // data: {
    //         //   query: '',
    //         //   variables: {},
    //         //   operationName: "getSitemap",
    //         // },
    //       },
    //     );
    //   return schemaSitemap.parse(response);
    //   },

    // Mock
    () => schemaSitemap.parse(sitemapMock),
    'sitemap',
  );

  // Here you can modify data

  return { data, errorCode };
};

export const methods = {
  get,
};
