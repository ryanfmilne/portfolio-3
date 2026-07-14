import type { Metadata } from 'next'
import { DeveloperPage } from '@/components/role-page/developer-page'

export const metadata: Metadata = {
  title: 'Web Developer Portfolio | Ryan Milne',
  description:
    'Ryan Milne is a web developer with experience in Next.js, React, TypeScript, Shopify, Supabase, e-commerce, and product-focused web applications.',
  openGraph: {
    title: 'Web Developer Portfolio | Ryan Milne',
    description:
      'Ryan Milne is a web developer with experience in Next.js, React, TypeScript, Shopify, Supabase, e-commerce, and product-focused web applications.',
    url: 'https://ryanmilne.com/dev',
    images: [
      {
        url: 'https://ryanmilne.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ryan Milne'
      }
    ]
  }
}

export default function DevPage() {
  return <DeveloperPage />
}
