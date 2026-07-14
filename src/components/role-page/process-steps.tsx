import { Card, CardContent } from '@/components/ui/card'
import type { RoleProcessStep } from '@/types'

export function ProcessSteps({ steps }: { steps: RoleProcessStep[] }) {
  return (
    <div className='grid gap-4 md:grid-cols-4'>
      {steps.map((step, index) => (
        <Card key={step.title} className='border shadow'>
          <CardContent className='flex h-full flex-col gap-y-3 p-4'>
            <span className='font-mono text-sm font-semibold text-neutral-500 dark:text-neutral-400'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
              {step.title}
            </h3>
            <p className='font-mono text-sm text-neutral-700 dark:text-neutral-300'>
              {step.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
