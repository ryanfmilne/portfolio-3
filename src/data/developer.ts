import type { RolePageData } from '@/types'

const developerResumePath = '/resumes/ryan-milne-developer-resume.pdf'

export const developerPageData: RolePageData = {
  hero: {
    eyebrow: 'Ryan Milne',
    title: 'Web Developer',
    summary:
      'I build practical web applications, e-commerce experiences, and internal tools using modern JavaScript technologies.',
    description:
      'My background combines web development, e-commerce operations, UX thinking, and hands-on business experience. I work primarily with Next.js, React, TypeScript, Shopify, Supabase, and modern front-end tooling to build maintainable interfaces, storefronts, and internal systems that support real business workflows.',
    primaryAction: {
      label: 'Download Developer Resume',
      href: developerResumePath,
      download: true
    },
    secondaryAction: {
      label: 'Contact Me',
      href: '/contact'
    },
    tertiaryAction: {
      label: 'View GitHub',
      href: 'https://github.com/ryanfmilne',
      external: true
    },
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Shopify Liquid',
      'Supabase',
      'PostgreSQL',
      'Authentication',
      'REST APIs',
      'Stripe',
      'Tailwind CSS',
      'Git',
      'Vercel',
      'AI-Assisted Development',
      'Prompt Engineering'
    ]
  },
  featuredProjects: {
    title: 'Featured Projects',
    description:
      'Selected work from production applications, SaaS products, and commercial e-commerce projects.',
    items: [
      {
        id: 'golden-west-digital',
        title: 'Golden West Digital',
        label: 'SaaS • In Development',
        overview:
          'A contractor-focused platform for building client websites, managing leads, and tracking QR campaigns.',
        role: 'Founder • Product Designer • Developer',
        contributions: [
          'Built a multi-tenant website builder',
          'Developed lead management and QR tracking',
          'Integrated authentication, billing, and custom domains'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
        mediaLabel: 'Golden West Digital product screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#golden-west-digital'
        }
      },
      {
        id: 'print-management-platform',
        title: 'Print Management Platform',
        label: 'Internal Tools • Private Project',
        overview:
          'A private operations platform for customer ordering, account management, and production workflow.',
        role: 'Product Designer • Full-Stack Developer',
        contributions: [
          'Designed customer onboarding workflows',
          'Built account and order management views',
          'Created production workflow concepts'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
        mediaLabel: 'Print management dashboard screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/dev/projects/print-management-platform'
        }
      },
      {
        id: 'ecommerce-storefronts',
        title: 'E-commerce Storefront Development',
        label: 'Shopify • Production Work',
        overview:
          'Production storefront work focused on Shopify customization, product experiences, and customer flows.',
        role: 'Web Developer',
        contributions: [
          'Customized Shopify and Liquid themes',
          'Built product-selection experiences',
          'Supported B2B customer-account flows'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
        mediaLabel: 'E-commerce storefront screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/'
        }
      }
    ]
  },
  capabilities: [
    {
      title: 'Web Application Development',
      items: [
        'Responsive React and Next.js interfaces',
        'Authentication and account workflows',
        'API and third-party integrations',
        'Data-driven dashboards and internal tools'
      ]
    },
    {
      title: 'E-commerce Development',
      items: [
        'Shopify theme customization',
        'Product and variant experiences',
        'Customer-account and B2B workflows',
        'Storefront updates and conversion-focused UX'
      ]
    },
    {
      title: 'Product and UX Implementation',
      items: [
        'Turning product requirements into usable interfaces',
        'Figma-to-production implementation',
        'Reusable component and design-system thinking',
        'Mobile-first responsive design'
      ]
    },
    {
      title: 'Deployment and Maintenance',
      items: [
        'Git-based workflows',
        'Vercel deployments',
        'Debugging and technical cleanup',
        'AI-assisted development with human review and testing'
      ]
    }
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Data and application services',
      items: ['Supabase', 'SQL', 'Authentication', 'REST APIs', 'Third-party integrations']
    },
    {
      title: 'Commerce and platforms',
      items: ['Shopify', 'Liquid', 'Magento', 'Stripe', 'HubSpot']
    },
    {
      title: 'Design and workflow',
      items: ['Figma', 'Adobe Creative Cloud', 'Git', 'GitHub', 'Vercel', 'VS Code', 'AI-assisted development']
    }
  ],
  process: [
    {
      title: 'Understand the problem',
      description: 'Clarify the user, business goal, constraints, and definition of success.'
    },
    {
      title: 'Design the experience',
      description: 'Map the workflow, organize the interface, and identify reusable patterns before overbuilding.'
    },
    {
      title: 'Build and integrate',
      description: 'Implement responsive interfaces, application logic, data connections, and external services.'
    },
    {
      title: 'Test and refine',
      description: 'Review real user paths, fix edge cases, improve clarity, and prepare the work for production.'
    }
  ],
  background: {
    title: 'Relevant Background',
    description:
      'My path into modern development is supported by years of hands-on e-commerce, website management, design, production, and business experience. That background helps me understand not only how to build a feature, but how it affects customers, staff, marketing, and day-to-day operations.',
    entries: [
      {
        title: 'Golden West Digital',
        role: 'Founder and Developer',
        date: '2025-Present',
        summary: 'Building a SaaS platform and website system for contractor-focused digital services.'
      },
      {
        title: 'Catalina Home',
        role: 'Web Developer',
        date: '2023-2025',
        summary:
          'Worked on Shopify storefronts, product experiences, B2B customer flows, Figma designs, and production website updates.'
      },
      {
        title: 'Pro Audio Land',
        role: 'Web Developer',
        date: '2022-2023',
        summary:
          'Supported and improved a large e-commerce platform, including front-end work, technical maintenance, and customer-facing site functionality.'
      }
    ],
    action: {
      label: 'Read more about my background',
      href: '/'
    }
  },
  cta: {
    title: 'Looking for a practical developer who understands both technology and business?',
    body:
      'I am currently exploring web development, front-end, e-commerce, Shopify, and product-focused technical roles.',
    primaryAction: {
      label: 'Download Developer Resume',
      href: developerResumePath,
      download: true
    },
    secondaryAction: {
      label: 'Contact Me',
      href: '/contact'
    },
    note: 'Based in Southern California · Open to local, hybrid, and remote opportunities'
  }
}
