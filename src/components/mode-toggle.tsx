'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const getIcon = () => {
    if (!mounted) {
      return <Sun className='h-[1.2rem] w-[1.2rem] stroke-[1.5]' />
    }

    return theme === 'dark'
      ? <Moon className='h-[1.2rem] w-[1.2rem] stroke-[1.5]' />
      : <Sun className='h-[1.2rem] w-[1.2rem] stroke-[1.5]' />
  }

  const getThemeLabel = () => {
    if (!mounted) {
      return 'Toggle theme'
    }

    return theme === 'dark' ? 'Dark theme' : 'Light theme'
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      aria-label={`${getThemeLabel()} - Click to toggle`}
      className='relative size-9 transition-transform duration-300 hover:scale-105'
    >
      {getIcon()}
      <span className='sr-only'>{getThemeLabel()}</span>
    </Button>
  )
}
