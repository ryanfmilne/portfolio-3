'use client'

import { Suspense } from 'react'
import { DownloadIcon, FileTextIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Loader } from './ui/loader'
import { Projects } from './projects'
import { Section } from './ui/section'
import { TRACKS } from '@/data'

export function TrackPage({ slug }: { slug: 'dev' | 'ux' | 'prepress' }) {
  const track = TRACKS.find((item) => item.slug === slug)

  if (!track) return null

  return (
    <div className='flex flex-col flex-1'>
      <Section id={track.slug} className='pb-24'>
        <Card className='border shadow'>
          <CardHeader className='p-4'>
            <CardTitle className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
              <FileTextIcon className='size-6 animate-pulse stroke-[1.5]' />
              {track.title}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-y-4 p-4 pt-0'>
            <p className='font-mono dark:text-neutral-300 text-neutral-700 text-pretty'>
              {track.summary}
            </p>
            <Button variant='default' size={null} className='shadow p-2 w-fit' asChild>
              <a href={track.resumeUrl} className='flex items-center gap-2'>
                <DownloadIcon className='size-4' />
                <span>Download resume</span>
              </a>
            </Button>
          </CardContent>
        </Card>

        <Suspense fallback={<Loader />}>
          <Projects
            title={`${track.title} Projects`}
            projects={track.projects}
            emptyHref={`/${track.slug}`}
          />
        </Suspense>
      </Section>
    </div>
  )
}
