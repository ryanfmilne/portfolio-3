export function SectionHeading({
  id,
  title,
  description
}: {
  id: string
  title: string
  description?: string
}) {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 id={id} className='scroll-mt-28 dark:text-neutral-100 text-neutral-800 text-3xl font-bold text-balance md:scroll-mt-32'>
        {title}
      </h2>
      {description && (
        <p className='font-mono dark:text-neutral-400 text-neutral-600 text-pretty'>
          {description}
        </p>
      )}
    </div>
  )
}
