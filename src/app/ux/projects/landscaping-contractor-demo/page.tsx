import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

export const metadata: Metadata = {
  title: 'Landscaping Contractor Demo UX | Ryan Milne',
  description:
    'Landscaping Contractor Demo UX case study placeholder for Ryan Milne portfolio.'
}

export default function LandscapingContractorDemoUxPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='landscaping-contractor-demo-ux' className='pb-24'>
        <Card className='border shadow'>
          <CardContent className='flex flex-col gap-y-4 p-5 md:p-6'>
            <Link
              href='/ux'
              className='inline-flex w-fit items-center gap-2 font-medium hover:underline hover:underline-offset-4'
            >
              <ArrowLeftIcon className='size-4' aria-hidden='true' />
              Back to UX portfolio
            </Link>
            <div className='flex flex-col gap-y-3'>
              <p className='font-mono text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
                Lead Generation UX • Live Demo
              </p>
              <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-100 text-balance'>
                Landscaping Contractor Demo
              </h1>
              <p className='font-mono text-neutral-700 dark:text-neutral-300 text-pretty'>
                UX case study details for this conversion-focused contractor website demo will be added here.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
