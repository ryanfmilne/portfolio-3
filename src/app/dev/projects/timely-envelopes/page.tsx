import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

export const metadata: Metadata = {
  title: 'Timely Envelopes | Ryan Milne',
  description:
    'Timely Envelopes private print-management prototype case study placeholder for Ryan Milne developer portfolio.'
}

export default function TimelyEnvelopesPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='timely-envelopes' className='pb-24'>
        <Card className='border shadow'>
          <CardContent className='flex flex-col gap-y-4 p-5 md:p-6'>
            <Link
              href='/dev'
              className='inline-flex w-fit items-center gap-2 font-medium hover:underline hover:underline-offset-4'
            >
              <ArrowLeftIcon className='size-4' aria-hidden='true' />
              Back to developer portfolio
            </Link>
            <div className='flex flex-col gap-y-3'>
              <p className='font-mono text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
                Print Operations • Private Prototype
              </p>
              <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-100 text-balance'>
                Timely Envelopes
              </h1>
              <p className='font-mono text-neutral-700 dark:text-neutral-300 text-pretty'>
                Case study details for this private print-management prototype will be added here.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
