import { CareerItem } from './item'
import { FileTextIcon } from 'lucide-react'
import { CareerProps } from '@/types'

const companies: CareerProps[] = [
  {
    company: 'Golden West Digital',
    badges: ['July 2025 - Present'],
    jobs: [
      {
        title: 'Founder & Full-Stack Developer',
        start: 'July 2025',
        end: 'Present',
        description: [
          'Designed and built multi-tenant SaaS platform on Next.js, React, TypeScript, and Supabase with row-level security for tenant data isolation',
          'Built block-based site builder enabling rapid templated site delivery, custom domain provisioning via Vercel API, and Stripe billing integration',
          'Implemented authentication system with role-based access control and real-time data synchronization',
          'Solo developer shipping production features end-to-end with AI-assisted development workflow'
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
          'Launched two production Shopify storefronts: Artistry Hardwood Flooring (artistryflooring.com) and Lone Mountain Lighting (lonemountainlighting.com), an outdoor lighting brand with a B2B Pro program for contractors',
          'Customized Liquid themes and built product configurators for variant-heavy SKUs, improving customer conversion paths',
          'Set up B2B/wholesale account flow on Lone Mountain with gated contractor pricing tiers',
          'Designed user experiences in Figma and shipped responsive themes to production'
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
          'Resolved technical debt in Magento 2 platform, optimizing database queries and fixing broken plugin integrations',
          'Redesigned UI and restructured product catalog architecture, improving navigation and discoverability',
          'Designed email marketing campaigns and promotional materials'
        ]
      }
    ]
  },
  {
    company: 'Fashion E-commerce Business',
    badges: ['Nov 2011 - Sep 2022'],
    jobs: [
      {
        title: 'Founder & Lead Developer',
        start: 'Nov 2011',
        end: 'Sep 2022',
        description: [
          'Founded and operated independent online retailer for 11 years across shoes, lingerie, accessories, and costumes',
          'Built and maintained custom Magento platform managing 15,000+ SKUs with integrated payment, shipping, and inventory systems',
          'Built and ran live inventory sync between Magento storefront and eBay account',
          'Owned the full operational stack: development, design, SEO, paid advertising, photography, and customer experience'
        ]
      }
    ]
  },
  {
    company: 'ADL (now Luminance Lighting)',
    badges: ['Jan 2005 - Nov 2011'],
    jobs: [
      {
        title: 'Marketing: Graphic Design & Product Photography',
        start: 'Jan 2005',
        end: 'Nov 2011',
        description: [
          'Launched the company\'s first website. Early-career web development for a B2B lighting distributor',
          'Built and maintained 5 brand product catalogs in Adobe InDesign. Early experience managing large structured product datasets',
          'Produced product photography for catalog and trade publications',
          'Designed print advertising; ads published in hospitality lighting trade magazines'
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
