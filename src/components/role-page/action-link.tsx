'use client'

import { ArrowDownIcon, ArrowUpRightIcon, DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { MouseEvent } from 'react'
import type { RoleAction } from '@/types'

export function ActionLink({
  action,
  variant = 'default',
  className,
  icon: iconOverride
}: {
  action: RoleAction
  variant?: 'default' | 'outline' | 'ghost'
  className?: string
  icon?: 'up-right' | 'down'
}) {
  const linkClassName = 'flex items-center gap-2'
  const isHashLink = action.href.startsWith('#')
  const icon = iconOverride === 'up-right'
    ? <ArrowUpRightIcon className='size-4' aria-hidden='true' />
    : iconOverride === 'down'
      ? <ArrowDownIcon className='size-4' aria-hidden='true' />
      : action.download
    ? <DownloadIcon className='size-4' aria-hidden='true' />
    : action.external
      ? <ArrowUpRightIcon className='size-4' aria-hidden='true' />
      : isHashLink
        ? <ArrowDownIcon className='size-4' aria-hidden='true' />
      : null

  function handleHashClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHashLink) return

    const target = document.getElementById(action.href.slice(1))
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.pushState(null, '', action.href)
  }

  if (action.external || action.download) {
    return (
      <Button variant={variant} size={null} className={className ?? 'p-2 shadow'} asChild>
        <a
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noreferrer' : undefined}
          download={action.download ? true : undefined}
          className={linkClassName}
        >
          {icon}
          <span>{action.label}</span>
        </a>
      </Button>
    )
  }

  return (
    <Button variant={variant} size={null} className={className ?? 'p-2 shadow'} asChild>
      {isHashLink ? (
        <a href={action.href} className={linkClassName} onClick={handleHashClick}>
          {icon}
          <span>{action.label}</span>
        </a>
      ) : (
        <Link href={action.href} className={linkClassName}>
          {icon}
          <span>{action.label}</span>
        </Link>
      )}
    </Button>
  )
}
