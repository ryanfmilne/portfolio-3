import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { DeveloperPageData } from '@/types'

export function RelevantBackground({
  background
}: {
  background: DeveloperPageData['background']
}) {
  return (
    <div className='flex flex-col gap-y-4'>
      <p className='font-mono text-neutral-700 dark:text-neutral-300 text-pretty'>
        {background.description}
      </p>
      <div className='grid gap-4 md:grid-cols-3'>
        {background.entries.map((entry) => (
          <Card key={entry.title} className='border shadow'>
            <CardContent className='flex h-full flex-col gap-y-2 p-4'>
              <div>
                <h3 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                  {entry.title}
                </h3>
                <p className='font-mono text-sm text-neutral-500 dark:text-neutral-400'>
                  {entry.role} · {entry.date}
                </p>
              </div>
              <p className='font-mono text-sm text-neutral-700 dark:text-neutral-300'>
                {entry.summary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link
        href={background.action.href}
        className='inline-flex w-fit items-center gap-2 font-medium hover:underline hover:underline-offset-4'
      >
        {background.action.label}
        <ArrowRightIcon className='size-4' aria-hidden='true' />
      </Link>
    </div>
  )
}
