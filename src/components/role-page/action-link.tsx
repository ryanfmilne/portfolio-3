import { ArrowUpRightIcon, DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { RoleAction } from '@/types'

export function ActionLink({
  action,
  variant = 'default',
  className
}: {
  action: RoleAction
  variant?: 'default' | 'outline' | 'ghost'
  className?: string
}) {
  const linkClassName = 'flex items-center gap-2'
  const icon = action.download
    ? <DownloadIcon className='size-4' aria-hidden='true' />
    : action.external
      ? <ArrowUpRightIcon className='size-4' aria-hidden='true' />
      : null

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
      <Link href={action.href} className={linkClassName}>
        <span>{action.label}</span>
      </Link>
    </Button>
  )
}
