import { CheckCircle2Icon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { RoleListSection } from '@/types'

export function CapabilityGrid({ items }: { items: RoleListSection[] }) {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {items.map((capability) => (
        <Card key={capability.title} className='border shadow'>
          <CardHeader className='p-4'>
            <CardTitle className='flex items-center gap-2 text-xl text-neutral-900 dark:text-neutral-100'>
              <CheckCircle2Icon className='size-5 stroke-[1.5]' aria-hidden='true' />
              {capability.title}
            </CardTitle>
          </CardHeader>
          <CardContent className='p-4 pt-0'>
            <ul className='flex flex-col gap-y-1 font-mono text-sm text-neutral-700 dark:text-neutral-300'>
              {capability.items.map((item) => (
                <li key={item} className='relative pl-4 before:absolute before:left-0 before:content-["-"]'>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
