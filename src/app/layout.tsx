import './styles/app.scss';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getMetadata } from 'shared/lib/metadata';

import { inter } from './fonts';

export async function generateMetadata(): Promise<Metadata> {
  // const globals = await globalsApi.get();
  // return getMetadata(globals.data.meta);
  return getMetadata();
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
