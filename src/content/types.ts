export type NavItem = {
  id: string
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type SkillCategory = {
  title: string
  description: string
  items: string[]
}

export type Project = {
  title: string
  summary: string
  tags: string[]
  /** Optional link when the project is public */
  href?: string
}

export type SocialLink = {
  label: string
  href: string
  kind: 'email' | 'github' | 'linkedin' | 'phone' | 'cv'
}
