import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Akshat Kumar',
  description:
    'Building Intelligent Tech, and Occasionally, Why It All Matters.',
  href: 'https://akshatcse.com',
  author: 'Akshat Kumar',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://twitter.com/akshatcse',
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/akshatcse',
    label: 'LinkedIn',
  },
  // {
  //   href: 'mailto:akshat@akshatcse.com',
  //   label: 'Email',
  // },
  {
    href: 'https://github.com/akshatcs',
    label: 'GitHub',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}