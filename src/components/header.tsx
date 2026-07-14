'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { navItems } from '@/constants'
import clsx from 'clsx'

export function Header() {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 z-50 flex items-center justify-center w-full mx-auto bg-white/95 dark:bg-black/95 border-b py-2 backdrop-blur'>
      <div className='flex items-center justify-between gap-2 w-full md:max-w-5xl mx-4 md:mx-6'>
        <nav className='flex min-w-0 items-center overflow-x-auto'>
          {navItems.map((link) => (
            <Button asChild variant='ghost' size={null} key={link.label}>
              <Link
                key={link.label}
                aria-label={link.label}
                href={link.url}
                className={clsx(
                  'relative block me-1 rounded-md px-2 py-2 text-sm font-semibold md:me-2 md:px-3',
                  {
                    'bg-neutral-100 dark:bg-neutral-800': pathname === link.url,
                    'hover:bg-neutral-100 dark:hover:bg-neutral-800':
                      pathname !== link.url
                  }
                )}
              >
                {link.title}
              </Link>
            </Button>
          ))}
        </nav>

        <div className='shrink-0'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
