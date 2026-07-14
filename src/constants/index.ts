import { AVATAR, LINKS } from '@/data'
import type { AvatarProps, LinksProps } from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  links: LINKS as LinksProps[]
}

export const navItems = [
  {
    title: 'Ryan F. Milne',
    label: 'home',
    url: '/'
  },
  {
    title: 'Dev',
    label: 'dev',
    url: '/dev'
  },
  {
    title: 'UX',
    label: 'ux',
    url: '/ux'
  },
  {
    title: 'Prepress',
    label: 'prepress',
    url: '/prepress'
  },
  {
    title: 'Contact',
    label: 'contact',
    url: '/contact'
  }
]
