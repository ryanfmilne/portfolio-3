import type { Metadata } from 'next'
import { RoleLandingPage } from '@/components/role-page/role-landing-page'
import { uxPageData } from '@/data/ux'

export const metadata: Metadata = {
  title: 'UX Portfolio | Ryan Milne',
  description:
    'Ryan Milne is a UX designer focused on practical web interfaces, e-commerce workflows, responsive design, Figma, and product-focused user experiences.',
  openGraph: {
    title: 'UX Portfolio | Ryan Milne',
    description:
      'Ryan Milne is a UX designer focused on practical web interfaces, e-commerce workflows, responsive design, Figma, and product-focused user experiences.',
    url: 'https://ryanmilne.com/ux',
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

export default function UXPage() {
  return (
    <RoleLandingPage
      data={uxPageData}
      heroId='ux-hero'
      contentId='ux-content'
      showHeroSecondaryAction
    />
  )
}
