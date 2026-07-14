import { BackgroundPaths } from '@/components/ui/background-paths'
import { Hero } from '@/components/hero'
import { Hub } from '@/components/hub'
import { Section } from '@/components/ui/section'

export function AboutPageContent() {
  return (
    <div className='flex w-full flex-col flex-1 items-center'>
      <section
        id='about-hero'
        className='relative mt-[-6rem] w-full overflow-hidden border-b border-neutral-800 bg-neutral-950'
      >
        <BackgroundPaths />
        <div className='relative z-10 mx-auto flex w-full flex-col gap-y-6 px-4 pb-12 pt-28 md:max-w-5xl md:px-6 md:pb-16 md:pt-32'>
          <Hero variant='dark' />
        </div>
      </section>

      <Section id='home' className='pb-24 pt-14'>
        <Hub />
      </Section>
    </div>
  )
}
