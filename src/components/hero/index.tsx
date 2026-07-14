import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { data } from '@/constants'

export function Hero() {
  const { avatar } = data

  return (
    <>
      <div className='flex flex-row'>
        <a
          href='https://github.com/ryanfmilne'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full'
        >
          <Avatar className='size-28 shadow border'>
            <AvatarImage alt={avatar.name} src={'/assets/avatar.webp'} />
            <AvatarFallback className='font-mono font-bold'>
              {avatar.initials}
            </AvatarFallback>
          </Avatar>
        </a>
      </div>

      <div className='flex items-center flex-row gap-4'>
        <div className='flex flex-col gap-1'>
          <h1 className='flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance'>
            {avatar.name}
          </h1>
          <p className='font-mono text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400'>
            Developer • UX/UI • Prepress
          </p>
        </div>
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <p>
          I&apos;m a web developer with a background that spans software development, UX, commercial print, and e-commerce. Over the past two decades I&apos;ve built websites, online stores, internal business tools, and most recently modern SaaS applications using React, Next.js, and TypeScript. My experience combines technical development with real-world business operations, giving me a practical approach to building products that are both useful and maintainable.
        </p>
      </div>

    </>
  )
}
