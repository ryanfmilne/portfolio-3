import { CareerItem } from './item'
import { FileTextIcon } from 'lucide-react'
import { CareerProps } from '@/types'

const companies: CareerProps[] = [
  {
    company: 'Catalina Home',
    badges: ['Oct 2023 - May 2025'],
    jobs: [
      {
        title: 'Web Developer',
        start: 'Oct 2023',
        end: 'May 2025',
        description: [
          'Launched two brand websites on Shopify, handling complete development lifecycle from architecture planning through deployment',
          'Designed and prototyped user experiences in Figma, translating mockups into production-ready Shopify themes',
          'Built custom Shopify product configurators enabling dynamic product customization and improving conversion rates',
          'Launched two distinct brand storefronts, handling full development lifecycle from design through deployment'
        ]
      }
    ]
  },
  {
    company: 'Pro Audio Land',
    badges: ['Jul 2022 - Oct 2023'],
    jobs: [
      {
        title: 'Web Developer',
        start: 'Jul 2022',
        end: 'Oct 2023',
        description: [
          'Performed technical debt cleanup on Magento 2 platform, resolving database inefficiencies and broken plugin integrations',
          'Redesigned UI and restructured disorganized product catalog, improving site navigation and user experience',
          'Enhanced email marketing campaigns with professional ad design, increasing engagement and customer retention',
          'Debugged and optimized existing codebase, improving site stability and performance'
        ]
      }
    ]
  },
  {
    company: 'Women\'s Fashion E-commerce Business',
    badges: ['Nov 2011 - Sept 2022'],
    jobs: [
      {
        title: 'Owner & Lead Developer',
        start: 'Nov 2011',
        end: 'Sept 2022',
        description: [
          'Founded and scaled online fashion retail business specializing in shoes, lingerie, accessories, and costumes',
          'Single-handedly managed all technical operations including full-stack development, design, SEO, and digital marketing',
          'Built and maintained custom Magento platform handling thousands of SKUs and processing orders daily',
          'Designed responsive storefront, optimized conversion funnels, and implemented payment/shipping integrations',
          'Grew business from launch to sustainable operation over 11 years through technical excellence and market understanding'
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
