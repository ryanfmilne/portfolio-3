import { developerPageData } from '@/data/developer'
import { RoleLandingPage } from './role-landing-page'

export function DeveloperPage() {
  return (
    <RoleLandingPage
      data={developerPageData}
      heroId='developer-hero'
      contentId='developer-content'
    />
  )
}
