import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
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
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ryanfmilne/',
    icon: LinkedInIcon
  },
  {
    title: 'Email',
    url: 'mailto:ryan@ryanmilne.com',
    icon: MailIcon
  },
  {
    title: 'CV App',
    url: 'https://cv.ryanmilne.com',
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

export const PROJECTS: ProjectProps[] = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and TypeScript, featuring advanced product management, payment processing, and admin dashboard.',
    tags: [
      { name: 'Next.js', icon: NextJSIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'Tailwind CSS', icon: TailwindCSSIcon }
    ],
    link: {
      github: 'https://github.com/ryanfmilne/ecommerce-platform',
      preview: 'https://ecommerce-demo.ryanmilne.com'
    }
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio website showcasing my work and skills, built with Next.js, TypeScript, and Tailwind CSS.',
    tags: [
      { name: 'Next.js', icon: NextJSIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Tailwind CSS', icon: TailwindCSSIcon },
      { name: 'Vercel', icon: VercelIcon }
    ],
    link: {
      github: 'https://github.com/ryanfmilne/portfolio',
      preview: 'https://ryanmilne.com'
    }
  },
  {
    title: 'Task Management App',
    description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
    tags: [
      { name: 'React', icon: ReactIcon },
      { name: 'Node.js', icon: NodeJSIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'Supabase', icon: SupabaseIcon }
    ],
    link: {
      github: 'https://github.com/ryanfmilne/task-manager',
      preview: 'https://tasks.ryanmilne.com'
    }
  }
]
