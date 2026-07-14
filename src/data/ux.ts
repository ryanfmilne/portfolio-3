import type { RolePageData } from '@/types'

const uxResumePath = '/api/cv_ux'

export const uxPageData: RolePageData = {
  hero: {
    eyebrow: 'Ryan Milne',
    title: 'UX Designer',
    summary:
      'I design practical web experiences, e-commerce flows, and product interfaces with a strong implementation mindset.',
    description:
      'My UX work is shaped by hands-on experience in web development, e-commerce operations, production design, and customer-facing business workflows. I focus on clear structure, responsive interfaces, and practical design decisions that can move cleanly from Figma into production.',
    primaryAction: {
      label: 'Download UX Resume',
      href: uxResumePath,
      download: true
    },
    secondaryAction: {
      label: 'View UX Work',
      href: '#featured-projects'
    },
    technologies: [
      'Figma',
      'UI Design',
      'Responsive Design',
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Design Systems',
      'Accessibility',
      'Interaction Design',
      'Information Architecture',
      'Usability Testing',
      'UX Writing'
    ]
  },
  featuredProjects: {
    title: 'Featured Projects',
    description:
      'Selected work from interface design, product workflows, and commercial e-commerce experiences.',
    items: [
      {
        id: 'contractor-website-ux-system',
        title: 'Contractor Website UX System',
        label: 'UX • Website Systems',
        overview:
          'A UX direction for contractor-focused websites built around clear service paths, lead capture, and reusable page patterns.',
        role: 'Product Designer • UX Designer',
        contributions: [
          'Mapped reusable service-page patterns',
          'Organized lead-focused page flows',
          'Designed responsive content structures'
        ],
        technologies: ['Figma', 'Responsive Design', 'Wireframes', 'Prototyping'],
        mediaLabel: 'Contractor website UX screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#contractor-website-ux-system'
        }
      },
      {
        id: 'ecommerce-product-experience',
        title: 'E-commerce Product Experience',
        label: 'E-commerce • UX',
        overview:
          'Storefront UX work focused on product selection, responsive layouts, and clearer purchasing paths.',
        role: 'UX Designer • Web Developer',
        contributions: [
          'Improved product-selection flows',
          'Structured responsive storefront layouts',
          'Supported customer account experiences'
        ],
        technologies: ['Figma', 'Shopify', 'Responsive Design', 'HTML'],
        mediaLabel: 'E-commerce UX screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#ecommerce-product-experience'
        }
      },
      {
        id: 'internal-tool-interface-concepts',
        title: 'Internal Tool Interface Concepts',
        label: 'Internal Tools • Workflow Design',
        overview:
          'Workflow concepts for account, approval, and production views in a responsive web application.',
        role: 'Product Designer • Interface Designer',
        contributions: [
          'Defined approval workflow screens',
          'Planned dashboard information hierarchy',
          'Designed mobile-friendly tool views'
        ],
        technologies: ['Figma', 'User Flows', 'Wireframes', 'React'],
        mediaLabel: 'Internal tool UX screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#internal-tool-interface-concepts'
        }
      }
    ]
  },
  capabilities: [],
  skills: [
    {
      title: 'Research and planning',
      items: ['User flows', 'Requirements review', 'Information architecture', 'Content structure']
    },
    {
      title: 'Interface design',
      items: ['Responsive layouts', 'Wireframes', 'High-fidelity mockups', 'UX writing']
    },
    {
      title: 'Prototyping and systems',
      items: ['Figma', 'Reusable components', 'Design-system thinking', 'Interactive prototypes']
    },
    {
      title: 'Implementation workflow',
      items: ['Developer handoff', 'HTML', 'CSS', 'React', 'Shopify', 'Accessibility review']
    }
  ],
  process: [],
  background: {
    title: 'Relevant Background',
    description: '',
    entries: [],
    action: {
      label: 'Read more about my background',
      href: '/'
    }
  },
  cta: {
    title: 'Need a UX designer who understands how interfaces actually get built?',
    body:
      'I am currently exploring UX, product design, e-commerce, and front-end-adjacent roles where practical design and implementation overlap.',
    primaryAction: {
      label: 'Download UX Resume',
      href: uxResumePath,
      download: true
    },
    secondaryAction: {
      label: 'Contact Me',
      href: '/contact'
    },
    note: 'Based in Southern California · Open to local, hybrid, and remote opportunities'
  }
}
