import { isNil } from 'lodash';
import omitBy from 'lodash/omitBy';
import { type Metadata } from 'next';
import { getPath, type RoutePaths } from 'shared/constants/routes';
import translations from 'shared/constants/translations';
import { z } from 'zod';

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

export const getMetadata = (
  meta: z.infer<typeof schemaPageMetadata> | undefined,
  path: RoutePaths = 'homepage',
  slug?: string,
) => {
  if (!meta) {
    return {};
  }

  const title = meta.title || translations.common.seoTitle;
  const description = meta.description || translations.common.seoDescription;
  const images = meta.image ? { images: meta.image } : {};
  const url = translations.common.siteURL + getPath(path, slug);

  return omitBy<Metadata>(
    {
      metadataBase: new URL(url),
      title,
      applicationName: title,
      description,
      alternates: {
        canonical: url,
      },
      other: {
        url,
      },
      openGraph: {
        title,
        siteName: title,
        url,
        description,
        ...images,
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        ...images,
      },
    },
    isNil,
  );
};
