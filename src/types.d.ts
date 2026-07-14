export interface AvatarProps {
  name: string
  initials: string
}

export interface LinksProps {
  title: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface ContactEmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  message: string
}

export interface JobsProps {
  title: string
  start: string
  end: string
  description: string[]
}

export interface CareerProps {
  company: string
  link?: string
  badges: string[]
  jobs: JobsProps[]
}

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

export interface TagsProps {
  name: string
  icon: IconComponent
}

export interface ProjectLinkProps {
  github?: string
  preview?: string
}

export interface ProjectProps {
  title: string
  tags: TagsProps[]
  description: string
  link: ProjectLinkProps
  image?: string
  video?: string
}

export interface TrackProfile {
  slug: 'dev' | 'ux' | 'prepress'
  title: string
  label: string
  summary: string
  resumeUrl: string
  projects: ProjectProps[]
}

export interface RoleAction {
  label: string
  href: string
  external?: boolean
  download?: boolean
}

export interface RoleHeroProps {
  eyebrow: string
  title: string
  summary: string
  description: string
  primaryAction: RoleAction
  secondaryAction: RoleAction
  tertiaryAction?: RoleAction
  technologies: string[]
}

export interface FeaturedRoleProject {
  id: string
  title: string
  label: string
  overview: string
  role: string
  contributions: string[]
  technologies: string[]
  mediaLabel: string
  mediaAlt?: string
  image?: string
  primaryAction: RoleAction
}

export interface RoleListSection {
  title: string
  items: string[]
}

export interface RoleProcessStep {
  title: string
  description: string
}

export interface RoleBackgroundEntry {
  title: string
  role: string
  date: string
  summary: string
}

export interface RoleCtaProps {
  title: string
  body: string
  primaryAction: RoleAction
  secondaryAction: RoleAction
  note?: string
}

export interface RolePageData {
  hero: RoleHeroProps
  featuredProjects: {
    title: string
    description: string
    items: FeaturedRoleProject[]
  }
  capabilities: RoleListSection[]
  skills: RoleListSection[]
  process: RoleProcessStep[]
  background: {
    title: string
    description: string
    entries: RoleBackgroundEntry[]
    action: RoleAction
  }
  cta: RoleCtaProps
}

export type DeveloperPageData = RolePageData

export interface TranslationTag {
  name: string
  icon: string
}

export interface TranslationProject {
  title: string
  tags: TranslationTag[]
  description: string
  link: ProjectLinkProps
  image?: string
  video?: string
}

export interface TranslationMessages {
  projects: {
    title: string
    'not-found': string
    preview: string
    github: string
    items: TranslationProject[]
  }
  [key: string]: unknown
}

export type TranslateProps = (key: string) => string

export interface SkillsProps {
  languages: string[]
  frontend: string[]
  backend: string[]
  databases: string[]
  platforms: string[]
  tools: string[]
  ecommerce: string[]
  other: string[]
}

export interface EducationProps {
  degree: string
  school: string
  year: string
  additional?: string[]
}
