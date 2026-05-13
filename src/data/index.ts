import { GitHubIcon } from '@/components/icons/github'
// import { LinkedInIcon } from '@/components/icons/linkedin'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, MailIcon } from 'lucide-react'
import type { IconComponent, ProjectProps } from '@/types'

export const AVATAR = {
  name: 'Ryan Milne',
  initials: 'RM'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/ryanfmilne',
    icon: GitHubIcon
  },
  // {
  //   title: 'LinkedIn',
  //   url: 'https://www.linkedin.com/in/ryanfmilne/',
  //   icon: LinkedInIcon
  // },
  {
    title: 'Email',
    url: 'mailto:ryanfmilne@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Download CV',
    url: '/api/cv_general',
    icon: FileTextIcon
  }
]

export const iconMap: Record<string, IconComponent> = {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  OpenAIIcon,
  ReactIcon,
  SWCIcon,
  TypeScriptIcon,
  ViteIcon,
  ShadcnIcon,
  TailwindCSSIcon,
  AstroIcon,
  SvelteIcon,
  NodeJSIcon,
  VitestIcon,
  BootstrapIcon,
  SupabaseIcon,
  ReduxIcon,
  PNPMIcon,
  VercelIcon,
  BasehubIcon,
  GraphQLIcon
}

export const SKILLS = {
  languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Shadcn/ui', 'Responsive Design'],
  backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  databases: ['PostgreSQL', 'MySQL', 'Supabase', 'MongoDB'],
  platforms: ['Shopify', 'Magento', 'WordPress', 'Vercel', 'Netlify'],
  tools: ['Git', 'GitHub', 'Figma', 'VS Code', 'Docker', 'Webpack', 'Vite'],
  ecommerce: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Product Catalogs'],
  other: ['SEO', 'Digital Marketing', 'UI/UX Design', 'Agile', 'Performance Optimization']
}

export const EDUCATION = {
  degree: 'Self-Taught Developer',
  school: 'Continuous Learning',
  year: '2010 - Present',
  additional: [
    '14+ years of professional web development experience',
    'Specialized in e-commerce and modern JavaScript frameworks'
  ]
}

export const PROJECTS: ProjectProps[] = [
  {
    title: 'Golden West Digital',
    description: 'Digital agency with full-featured SaaS platform. Includes client portal with analytics dashboard, QR code print integration, block-based site builder, custom domain provisioning, and Stripe billing.',
    tags: [
      { name: 'Next.js', icon: NextJSIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Supabase', icon: SupabaseIcon },
      { name: 'Tailwind CSS', icon: TailwindCSSIcon },
      { name: 'Vercel', icon: VercelIcon }
    ],
    link: {
      github: '#',
      preview: 'https://goldenwestdigital.com/'
    }
  }
]
