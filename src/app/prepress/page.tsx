import type { Metadata } from 'next'
import { RoleLandingPage } from '@/components/role-page/role-landing-page'
import { prepressPageData } from '@/data/prepress'

export const metadata: Metadata = {
  title: 'Prepress Portfolio | Ryan Milne',
  description:
    'Ryan Milne has prepress and production experience across catalog workflows, product photography, image preparation, structured product data, and web support.',
  openGraph: {
    title: 'Prepress Portfolio | Ryan Milne',
    description:
      'Ryan Milne has prepress and production experience across catalog workflows, product photography, image preparation, structured product data, and web support.',
    url: 'https://ryanmilne.com/prepress',
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

export default function PrepressPage() {
  return (
    <RoleLandingPage
      data={prepressPageData}
      heroId='prepress-hero'
      contentId='prepress-content'
      showHeroSecondaryAction
    />
  )
}
