import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ActionLink } from './action-link'
import type { RoleHeroProps } from '@/types'

export function RoleHero({
  hero,
  variant = 'default',
  showSecondaryAction = true
}: {
  hero: RoleHeroProps
  variant?: 'default' | 'dark'
  showSecondaryAction?: boolean
}) {
  const isDark = variant === 'dark'

  return (
    <Card className={isDark ? 'border-0 bg-transparent text-neutral-950 shadow-none dark:text-white' : 'border shadow'}>
      <CardContent className={isDark ? 'flex flex-col gap-y-6 p-0' : 'flex flex-col gap-y-6 p-5 md:p-6'}>
        <div className='flex flex-col gap-y-3'>
          <p className={isDark
            ? 'font-mono text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'
            : 'font-mono text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'
          }>
            {hero.eyebrow}
          </p>
          <div className='flex flex-col gap-y-3'>
            <h1 className={isDark
              ? 'text-4xl font-bold text-neutral-950 text-balance dark:text-neutral-50 md:text-5xl'
              : 'dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance md:text-5xl'
            }>
              {hero.title}
            </h1>
            <p className={isDark
              ? 'max-w-2xl font-mono leading-relaxed text-neutral-700 text-pretty dark:text-neutral-300'
              : 'max-w-2xl font-mono leading-relaxed text-neutral-700 dark:text-neutral-300 text-pretty'
            }>
              {hero.description}
            </p>
          </div>
        </div>

        <div className='flex flex-wrap gap-2'>
          <ActionLink
            action={hero.primaryAction}
            className={isDark
              ? 'bg-neutral-950 p-2 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200'
              : undefined
            }
          />
          {showSecondaryAction && (
            <ActionLink action={hero.secondaryAction} variant='ghost' />
          )}
          {hero.tertiaryAction && (
            <ActionLink action={hero.tertiaryAction} variant='ghost' />
          )}
        </div>

        <div className={isDark
          ? 'flex flex-wrap gap-2 border-t border-neutral-200 pt-4 dark:border-neutral-800'
          : 'flex flex-wrap gap-2 border-t pt-4 dark:border-neutral-800'
        }>
          {hero.technologies.map((technology) => (
            <Badge
              key={technology}
              variant='secondary'
              className={isDark
                ? 'rounded-md border border-neutral-300 bg-neutral-100 text-neutral-950 shadow dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100'
                : 'rounded-md shadow'
              }
            >
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
