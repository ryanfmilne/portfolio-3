'use client'

import { usePagination } from '@/hook/use-pagination'
import { Button } from '../ui/button'
import { ProjectCard } from './card'
import { TerminalIcon } from 'lucide-react'
import { PROJECTS } from '@/data'
import type { ProjectProps } from '@/types'

export function Projects({
  title = 'Projects',
  projects = PROJECTS,
  emptyHref = '/projects'
}: {
  title?: string
  projects?: ProjectProps[]
  emptyHref?: string
}) {
  const { currentProjects, page, totalPages } = usePagination({
    projects
  })

  return (
    <>
      {currentProjects.length === 0 || page < 1 || page > totalPages ? (
        <Button variant='secondary' size='sm' asChild>
          <a href={emptyHref}>No projects found</a>
        </Button>
      ) : (
        <>
          <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
            <TerminalIcon className='size-6 animate-pulse stroke-[1.5]' />
            {title}
          </h2>

          <ProjectCard projects={currentProjects} />
          {/* <ProjectPagination
            page={page}
            totalPages={totalPages}
            updatePage={updatePage}
          /> */}
        </>
      )}
    </>
  )
}
