import { AVATAR, LINKS } from '@/data'
import type { AvatarProps, LinksProps } from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  links: LINKS as LinksProps[]
}

export const navItems = [
  {
    title: 'About',
    label: 'about',
    url: '/'
  },
  {
    title: 'Career',
    label: 'career',
    url: '/career'
  },
  {
    title: 'Projects',
    label: 'projects',
    url: '/projects'
  },
  {
    title: 'Contact',
    label: 'contact',
    url: '/contact'
  }
]
