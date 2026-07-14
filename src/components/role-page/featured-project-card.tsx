import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ActionLink } from './action-link'
import type { FeaturedRoleProject } from '@/types'

export function FeaturedProjectCard({
  project,
  index
}: {
  project: FeaturedRoleProject
  index: number
}) {
  const reverse = index % 2 === 1

  return (
    <Card id={project.id} className='scroll-mt-24 border shadow'>
      <CardContent
        className={[
          'grid items-start gap-5 p-4 md:p-5',
          reverse
            ? 'md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'
            : 'md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]',
          reverse ? 'md:[&>*:first-child]:order-2' : ''
        ].join(' ')}
      >
        <div
          className={[
            'flex aspect-square w-full max-w-sm items-center justify-center rounded-md border bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900',
            reverse ? 'md:ml-auto' : 'md:mr-auto'
          ].join(' ')}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.mediaAlt ?? project.title}
              width={960}
              height={640}
              className='h-full w-full rounded object-cover'
            />
          ) : (
            <p className='max-w-48 text-center font-mono text-sm text-neutral-500 dark:text-neutral-400'>
              {project.mediaLabel}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='secondary' className='rounded-md shadow'>
              {project.label}
            </Badge>
          </div>

          <div className='flex flex-col gap-y-2'>
            <h3 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
              {project.title}
            </h3>
            <p className='font-mono text-sm text-neutral-500 dark:text-neutral-400'>
              {project.role}
            </p>
            <p className='font-mono text-neutral-700 dark:text-neutral-300 text-pretty'>
              {project.overview}
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((technology) => (
              <Badge key={technology} variant='secondary' className='rounded-md shadow'>
                {technology}
              </Badge>
            ))}
          </div>

          <div className='flex flex-wrap gap-2 pt-1'>
            <ActionLink action={project.primaryAction} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
