import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Newgen Lanka | Pioneering Healthcare Innovation',
  description: 'Advancing global health through innovative research, zero-defect manufacturing, and delivering superior pharmaceutical solutions globally.',
  keywords: ['Healthcare', 'Pharmaceuticals', 'Newgen Lanka', 'GMP Standards', 'Medical Solutions', 'Global Health'],
  authors: [{ name: 'Newgen Lanka' }],
  icons: {
    icon: '/Newgen-Lanka-Health-Care-favicon.png',
  },
  openGraph: {
    title: 'Newgen Lanka | Pioneering Healthcare Innovation',
    description: 'Advancing global health through innovative research and superior pharmaceutical solutions.',
    siteName: 'Newgen Lanka Healthcare',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Newgen-Lanka-Health-Care-favicon.png',
        width: 1200,
        height: 630,
        alt: 'Newgen Lanka Healthcare Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newgen Lanka | Healthcare Innovation',
    description: 'Delivering superior pharmaceutical solutions globally.',
    images: ['/Newgen-Lanka-Health-Care-favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
