import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { data } from '@/constants'
import clsx from 'clsx'

export function Hero({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
  const { avatar } = data
  const isDark = variant === 'dark'

  return (
    <>
      <div className='flex flex-row'>
        <Avatar className={clsx('size-28 border shadow', isDark && 'border-neutral-300 dark:border-neutral-700')}>
          <AvatarImage alt={avatar.name} src={'/assets/avatar.webp'} />
          <AvatarFallback className={clsx('font-mono font-bold', isDark && 'bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-100')}>
            {avatar.initials}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className='flex items-center flex-row gap-4'>
        <div className='flex flex-col gap-1'>
          <h1
            className={clsx(
              'flex text-4xl font-bold text-balance md:text-5xl',
              isDark ? 'text-neutral-950 dark:text-neutral-50' : 'text-neutral-900 dark:text-neutral-100'
            )}
          >
            {avatar.name}
          </h1>
          <p
            className={clsx(
              'font-mono text-sm font-medium uppercase tracking-wide',
              isDark ? 'text-neutral-500 dark:text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'
            )}
          >
            Developer • UX/UI • Prepress
          </p>
        </div>
      </div>

      <div
        className={clsx(
          'flex max-w-3xl flex-col gap-4 font-mono leading-relaxed text-pretty',
          isDark ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-800 dark:text-neutral-200'
        )}
      >
        <p>
          My background spans web development, UX, commercial print, and e-commerce. After building and running an e-commerce business for over a decade, I now create SaaS platforms, Shopify storefronts, and digital experiences that combine technical expertise with practical business insight.
        </p>
      </div>
    </>
  )
}
