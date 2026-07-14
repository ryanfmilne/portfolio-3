'use client'

import { motion, useReducedMotion } from 'framer-motion'

function FloatingPaths({ position }: { position: number }) {
  const shouldReduceMotion = useReducedMotion()
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03
  }))

  return (
    <div className='absolute inset-0 pointer-events-none'>
      <svg
        className='h-full w-full text-neutral-950 dark:text-white'
        viewBox='0 0 696 316'
        fill='none'
        aria-hidden='true'
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke='currentColor'
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.008}
            initial={{ pathLength: shouldReduceMotion ? 1 : 0.35, opacity: 0.45 }}
            animate={shouldReduceMotion
              ? { pathLength: 1, opacity: 0.35 }
              : {
                  pathLength: 1,
                  opacity: [0.28, 0.48, 0.28],
                  pathOffset: [0, 1, 0]
                }
            }
            transition={{
              duration: 22 + path.id * 0.2,
              repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
              ease: 'linear'
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden opacity-70'>
      <div className='absolute inset-0 -translate-y-16 scale-[1.6] md:translate-y-0 md:scale-100'>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  )
}
