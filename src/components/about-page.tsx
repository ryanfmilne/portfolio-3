import { Hero } from '@/components/hero'
import { Hub } from '@/components/hub'
import { Section } from '@/components/ui/section'

export function AboutPageContent() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='about' className='pb-24'>
        <Hero />
        <Hub />
      </Section>
    </div>
  )
}
