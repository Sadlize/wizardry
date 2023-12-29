import { isNil } from 'lodash';
import omitBy from 'lodash/omitBy';
import { type Metadata } from 'next';
import { getPath, type RoutePaths } from 'shared/constants/routes';
import translations from 'shared/constants/translations';
import { z } from 'zod';

import { siteUrl } from '@/config/env';

export const schemaImage = z.object({
  width: z.number(),
  height: z.number(),
  blurHash: z.string().optional(),
  url: z.string(),
  alt: z.string().optional(),
});

export const schemaPageMetadata = z.object({
  image: schemaImage.optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

export const getMetadata = ({
  title = translations.common.seoTitle,
  description = translations.common.seoDescription,
  image: images = {
    url: `${siteUrl}/assets/images/starter-banner.png`,
    width: 1280,
    height: 720,
    alt: 'Wizardry social share image',
  },
  path = 'homepage',
  slug,
}: {
  path?: RoutePaths;
  slug?: string;
} & z.infer<typeof schemaPageMetadata> = {}) => {
  const url = getPath(path, { slug });

  return omitBy<Metadata>(
    {
      metadataBase: new URL(siteUrl),
      title,
      applicationName: title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        siteName: title,
        url,
        description,
        images,
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images,
      },
    },
    isNil,
  );
};
