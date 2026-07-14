import { Card, CardContent } from '@/components/ui/card'
import { ActionLink } from './action-link'
import type { RoleCtaProps } from '@/types'

export function RoleCTA({ cta }: { cta: RoleCtaProps }) {
  return (
    <Card className='border shadow'>
      <CardContent className='flex flex-col gap-y-4 p-5 md:p-6'>
        <h2 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100 text-balance'>
          {cta.title}
        </h2>
        <p className='max-w-2xl font-mono text-neutral-700 dark:text-neutral-300 text-pretty'>
          {cta.body}
        </p>
        <div className='flex flex-wrap gap-2'>
          <ActionLink action={cta.primaryAction} />
          <ActionLink action={cta.secondaryAction} variant='outline' />
        </div>
        {cta.note && (
          <p className='border-t pt-4 font-mono text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400'>
            {cta.note}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
