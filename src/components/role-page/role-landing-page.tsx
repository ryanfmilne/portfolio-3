import { BackgroundPaths } from '@/components/ui/background-paths'
import { Section } from '@/components/ui/section'
import type { RolePageData } from '@/types'
import { FeaturedProjectCard } from './featured-project-card'
import { RoleCTA } from './role-cta'
import { RoleHero } from './role-hero'
import { SectionHeading } from './section-heading'
import { SkillGroups } from './skill-groups'

export function RoleLandingPage({
  data,
  heroId,
  contentId
}: {
  data: RolePageData
  heroId: string
  contentId: string
}) {
  return (
    <div className='flex w-full flex-col flex-1 items-center'>
      <section
        id={heroId}
        className='relative mt-[-6rem] w-full overflow-hidden border-b border-neutral-800 bg-neutral-950'
      >
        <BackgroundPaths />
        <div className='relative z-10 mx-auto w-full px-4 pb-12 pt-28 md:max-w-5xl md:px-6 md:pb-16 md:pt-32'>
          <RoleHero hero={data.hero} variant='dark' showSecondaryAction={false} />
        </div>
      </section>

      <Section id={contentId} className='gap-y-14 pb-24 pt-14'>
        <section aria-labelledby='featured-projects' className='flex flex-col gap-y-4'>
          <SectionHeading
            id='featured-projects'
            title={data.featuredProjects.title}
            description={data.featuredProjects.description}
          />
          <div className='flex flex-col gap-5'>
            {data.featuredProjects.items.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby='technical-skills' className='flex flex-col gap-y-4'>
          <SectionHeading id='technical-skills' title='Technical Skills' />
          <SkillGroups groups={data.skills} />
        </section>

        <RoleCTA cta={data.cta} />
      </Section>
    </div>
  )
}
