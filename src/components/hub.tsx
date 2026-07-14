import { ArrowRightIcon, Code2Icon, PenToolIcon, PrinterIcon } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { TRACKS } from '@/data'

const iconMap = {
  dev: Code2Icon,
  ux: PenToolIcon,
  prepress: PrinterIcon
}

export function Hub() {
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      {TRACKS.map((track) => {
        const Icon = iconMap[track.slug]

        return (
          <Link key={track.slug} href={`/${track.slug}`} className='group'>
            <Card className='h-full border shadow transition-all hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-md dark:hover:bg-neutral-900'>
              <CardHeader className='p-4'>
                <div className='flex items-center justify-between gap-3'>
                  <span className='flex size-10 items-center justify-center rounded-md border bg-white shadow-sm dark:bg-black'>
                    <Icon className='size-5 stroke-[1.5]' />
                  </span>
                  <ArrowRightIcon className='size-4 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-neutral-900 dark:group-hover:text-neutral-100' />
                </div>
                <CardTitle className='text-xl dark:text-neutral-100 text-neutral-900'>
                  {track.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='p-4 pt-0'>
                <p className='font-mono text-sm leading-relaxed dark:text-neutral-400 text-neutral-600'>
                  {track.label}
                </p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
