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
        id: 'golden-west-digital',
        title: 'Golden West Digital',
        label: 'SaaS UX • In Development',
        overview:
          'A contractor-focused SaaS platform designed around clear onboarding, reusable interface patterns, lead-management workflows, and practical dashboard experiences.',
        role: 'Product Designer • UX/UI Designer • Developer',
        contributions: [
          'Structured dashboard navigation and onboarding flows',
          'Designed lead-management workflow patterns',
          'Translated product requirements into production UI'
        ],
        technologies: ['Figma', 'User Flows', 'Design Systems', 'Responsive Design'],
        mediaLabel: 'Golden West Digital dashboard and onboarding UX screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/ux/projects/golden-west-digital'
        }
      },
      {
        id: 'timely-envelopes',
        title: 'Timely Envelopes',
        label: 'Workflow UX • Private Prototype',
        overview:
          'A print-management application designed to simplify customer approvals, account management, ordering, production status, and staff workflows across multiple user roles.',
        role: 'Product Designer • UX Designer',
        contributions: [
          'Mapped customer onboarding and approval flows',
          'Organized account and order management screens',
          'Designed role-based production status visibility'
        ],
        technologies: ['Figma', 'User Flows', 'Wireframing', 'Information Architecture'],
        mediaLabel: 'Timely Envelopes workflow and production interface screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/ux/projects/timely-envelopes'
        }
      },
      {
        id: 'landscaping-contractor-demo',
        title: 'Landscaping Contractor Demo',
        label: 'Lead Generation UX • Live Demo',
        overview:
          'A conversion-focused contractor website designed around clear service discovery, mobile navigation, trust signals, and a simple path to requesting a quote.',
        role: 'UX/UI Designer • Front-End Developer',
        contributions: [
          'Planned conversion-focused information architecture',
          'Designed mobile-first navigation and quote-request flows',
          'Structured reviews, galleries, services, and trust content'
        ],
        technologies: ['Figma', 'Responsive Design', 'Information Architecture', 'Accessibility'],
        mediaLabel: 'Landscaping contractor website UX screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '/ux/projects/landscaping-contractor-demo'
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
      'I’m open to UX/UI, product design, e-commerce, and design-focused roles where strategy and implementation overlap.',
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
