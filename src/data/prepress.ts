import type { RolePageData } from '@/types'

const prepressResumePath = '/api/cv_prepress'

export const prepressPageData: RolePageData = {
  hero: {
    eyebrow: 'Ryan Milne',
    title: 'Prepress Production',
    summary:
      'I support print, catalog, product-content, and production workflows with a practical technical background.',
    description:
      'My prepress background combines catalog production, product photography, image preparation, structured product data, and website support. I bring a detail-focused production mindset to teams that need clean files, reliable workflows, and strong coordination between print and digital work.',
    primaryAction: {
      label: 'Download Prepress Resume',
      href: prepressResumePath,
      download: true
    },
    secondaryAction: {
      label: 'View Prepress Work',
      href: '#featured-projects'
    },
    technologies: [
      'Adobe InDesign',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Acrobat',
      'CorelDRAW',
      'RIP Workflows',
      'Preflight',
      'Color Management',
      'Color Calibration',
      'Imposition'
    ]
  },
  featuredProjects: {
    title: 'Featured Projects',
    description:
      'Selected work from catalog production, image preparation, product content, and print-to-web workflows.',
    items: [
      {
        id: 'product-catalog-production',
        title: 'Product Catalog Production',
        label: 'Catalogs • Production',
        overview:
          'Catalog production work combining product layout, image preparation, and structured content management.',
        role: 'Prepress Production • Designer',
        contributions: [
          'Prepared catalog-ready product layouts',
          'Managed image and content updates',
          'Supported print production cleanup'
        ],
        technologies: ['InDesign', 'Photoshop', 'Product Data', 'Print Prep'],
        mediaLabel: 'Product catalog production screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#product-catalog-production'
        }
      },
      {
        id: 'product-photography-workflow',
        title: 'Product Photography Workflow',
        label: 'Photography • Product Content',
        overview:
          'Product photography and image-preparation workflows for catalog and commercial publication use.',
        role: 'Product Photographer • Production Designer',
        contributions: [
          'Captured product photography assets',
          'Prepared images for print and web',
          'Maintained consistent visual standards'
        ],
        technologies: ['Photography', 'Photoshop', 'Color Correction', 'File Prep'],
        mediaLabel: 'Product photography workflow screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#product-photography-workflow'
        }
      },
      {
        id: 'print-and-web-production-support',
        title: 'Print and Web Production Support',
        label: 'Production • Web Support',
        overview:
          'Production support across print materials, website updates, product content, and technical cleanup.',
        role: 'Production Designer • Web Developer',
        contributions: [
          'Updated product content across channels',
          'Prepared production-ready assets',
          'Supported website and catalog workflows'
        ],
        technologies: ['HTML', 'CSS', 'Adobe Creative Cloud', 'Product Content'],
        mediaLabel: 'Print and web production screenshot',
        primaryAction: {
          label: 'View Case Study',
          href: '#print-and-web-production-support'
        }
      }
    ]
  },
  capabilities: [],
  skills: [
    {
      title: 'Print production',
      items: ['Catalog layout', 'Print-ready files', 'Preflight review', 'Production cleanup']
    },
    {
      title: 'Catalog systems',
      items: ['Product content', 'Structured data', 'SKU organization', 'Layout consistency']
    },
    {
      title: 'Image and asset prep',
      items: ['Product photography', 'Photoshop', 'Color correction', 'File organization']
    },
    {
      title: 'Technical support',
      items: ['HTML', 'CSS', 'Website updates', 'Adobe Creative Cloud', 'Cross-channel production']
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
    title: 'Need a prepress professional who understands both print and digital production?',
    body:
      'I’m open to prepress, graphic production, catalog production, and print-focused roles.',
    primaryAction: {
      label: 'Download Prepress Resume',
      href: prepressResumePath,
      download: true
    },
    secondaryAction: {
      label: 'Contact Me',
      href: '/contact'
    },
    note: 'Based in Southern California · Open to local, hybrid, and remote opportunities'
  }
}
