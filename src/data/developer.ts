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
          'A contractor-focused SaaS platform for creating client websites, managing leads, tracking QR campaigns, and supporting ongoing digital services.',
        role: 'Founder • Product Designer • Developer',
        contributions: [
          'Designed contractor-focused website and lead workflows',
          'Built QR campaign tracking and client site management',
          'Developed ongoing digital service support features'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
        mediaLabel: 'Golden West Digital platform screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/dev/projects/golden-west-digital'
        }
      },
      {
        id: 'timely-envelopes',
        title: 'Timely Envelopes',
        label: 'Print Operations • Private Prototype',
        overview:
          'A custom print-management platform designed to bring customer accounts, ordering, production tracking, and internal workflows into one responsive application.',
        role: 'Product Designer • Full-Stack Developer',
        contributions: [
          'Designed customer account and ordering workflows',
          'Built responsive production tracking concepts',
          'Organized internal print operations into one application'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        mediaLabel: 'Timely Envelopes workflow dashboard screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/dev/projects/timely-envelopes'
        }
      },
      {
        id: 'landscaping-contractor-demo',
        title: 'Landscaping Contractor Demo',
        label: 'Lead Generation Website • Live Demo',
        overview:
          'A conversion-focused landscaping website designed to help a local contractor present services, build credibility, showcase completed work, and generate quote requests through a clear mobile-first experience.',
        role: 'Designer • Front-End Developer',
        contributions: [
          'Designed a mobile-first lead generation flow',
          'Created prominent quote-request calls to action',
          'Structured reviews, services, galleries, and before-and-after work'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        mediaLabel: 'Landscaping contractor lead-generation website screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/dev/projects/landscaping-contractor-demo'
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
    title: 'Looking for a developer who understands technology and business?',
    body:
      'I’m open to web development, front-end, e-commerce, Shopify, and product-focused roles.',
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
