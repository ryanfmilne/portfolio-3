import { Section } from '@/components/ui/section'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { Contact } from '@/components/contact'
import { MailIcon } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className='flex w-full flex-col flex-1 items-center'>
      <section
        id='contact-hero'
        className='relative mt-[-6rem] w-full overflow-hidden border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950'
      >
        <BackgroundPaths />
        <div className='relative z-10 mx-auto flex w-full flex-col gap-y-3 px-4 pb-12 pt-28 md:max-w-5xl md:px-6 md:pb-16 md:pt-32'>
          <p className='font-mono text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
            Ryan Milne
          </p>
          <div className='flex flex-col gap-y-3'>
            <h1 className='flex items-center gap-x-4 text-4xl font-bold text-neutral-950 text-balance dark:text-neutral-50 md:text-5xl'>
              <MailIcon className='size-7 stroke-[1.5]' aria-hidden='true' />
              Contact
            </h1>
            <p className='max-w-2xl font-mono leading-relaxed text-neutral-700 text-pretty dark:text-neutral-300'>
              Let&apos;s get in touch. Feel free to reach out for collaborations,
              project questions, or role opportunities.
            </p>
          </div>
        </div>
      </section>

      <Section id='contact' className='pb-24 pt-14'>
        <Contact />
      </Section>
    </div>
  )
}
