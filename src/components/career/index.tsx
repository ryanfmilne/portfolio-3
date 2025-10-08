import { CareerItem } from './item'
import { FileTextIcon } from 'lucide-react'
import { CareerProps } from '@/types'

const companies: CareerProps[] = [
  {
    company: 'Golden West Marketing',
    badges: ['2018 - Present'],
    jobs: [
      {
        title: 'Senior Full-Stack Developer',
        start: '2018',
        end: 'Present',
        description: [
          'Lead development of e-commerce solutions for major retail clients',
          'Built scalable web applications using React, Next.js, and Node.js',
          'Implemented modern DevOps practices and CI/CD pipelines',
          'Mentored junior developers and established coding standards'
        ]
      }
    ]
  },
  {
    company: 'Freelance Development',
    badges: ['2010 - 2018'],
    jobs: [
      {
        title: 'Full-Stack Web Developer',
        start: '2010',
        end: '2018',
        description: [
          'Delivered custom web solutions for small to medium businesses',
          'Specialized in e-commerce platforms and content management systems',
          'Worked with various technologies including PHP, WordPress, and JavaScript',
          'Managed complete project lifecycle from design to deployment'
        ]
      }
    ]
  }
]

export function Career() {
  return (
    <>
      <h2 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance'>
        <FileTextIcon className='size-6 animate-pulse stroke-[1.5]' />
        Career
      </h2>

      <ol className='relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-y-8'>
        {companies.map((item, index) => (
          <li key={index} className='ms-[30px]'>
            <CareerItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}
