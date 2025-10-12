import { CareerItem } from './item'
import { FileTextIcon } from 'lucide-react'
import { CareerProps } from '@/types'

const companies: CareerProps[] = [
  {
    company: 'Print Shop SaaS Platform',
    badges: ['July 2025 - Present'],
    jobs: [
      {
        title: 'Freelance Full-Stack Developer',
        start: 'July 2025',
        end: 'Present',
        description: [
          'Architected multi-tenant SaaS platform managing end-to-end business workflow from lead generation to order fulfillment for print shop operations',
          'Built full-stack application using Next.js, React, TypeScript, and Supabase with PostgreSQL database and row-level security for tenant data isolation',
          'Designed responsive UI with Tailwind CSS and shadcn/ui, delivering intuitive user experience across customer intake, quoting, and order management workflows',
          'Implemented authentication system with role-based access control and real-time data synchronization',
          'Utilized modern development practices including component-driven architecture, Git version control, and AI-assisted development tools'
        ]
      }
    ]
  },
  {
    company: 'Catalina Home',
    badges: ['Oct 2023 - May 2025'],
    jobs: [
      {
        title: 'Web Developer',
        start: 'Oct 2023',
        end: 'May 2025',
        description: [
          'Launched two brand websites on Shopify, managing complete development lifecycle from architecture and design through deployment and launch',
          'Designed user experiences in Figma and translated mockups into production-ready custom Shopify themes using Liquid templating',
          'Built custom product configurators enabling dynamic product customization, improving conversion rates and reducing customer support inquiries'
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
          'Resolved critical technical debt in Magento 2 platform, optimizing database queries and fixing broken plugin integrations to improve site performance',
          'Redesigned UI and restructured product catalog architecture, significantly improving site navigation and user experience',
          'Designed email marketing campaigns and promotional materials, increasing customer engagement and retention'
        ]
      }
    ]
  },
  {
    company: 'Fashion E-commerce Business',
    badges: ['Nov 2011 - Sept 2022'],
    jobs: [
      {
        title: 'Owner & Lead Developer',
        start: 'Nov 2011',
        end: 'Sept 2022',
        description: [
          'Founded and scaled online fashion retail business specializing in shoes, lingerie, accessories, and costumes to profitable 11-year operation',
          'Managed all technical operations including full-stack development, design, SEO, digital marketing, and customer experience',
          'Built and maintained custom Magento platform managing 15,000+ SKUs and processing daily orders with integrated payment and shipping systems',
          'Designed responsive storefront and optimized conversion funnels, driving consistent revenue growth'
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
