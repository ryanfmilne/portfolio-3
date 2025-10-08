import { ContactForm } from '@/components/contact/form'
import { MailIcon } from 'lucide-react'

export function Contact() {
  return (
    <>
      <h2 className='flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <MailIcon className='size-6 animate-pulse stroke-[1.5]' />
        Contact
      </h2>
      <div className='flex flex-col gap-4'>
        <p className='font-mono mx-auto max-w-3xl mb-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
          Let's get in touch! Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <ContactForm />
      </div>
    </>
  )
}
