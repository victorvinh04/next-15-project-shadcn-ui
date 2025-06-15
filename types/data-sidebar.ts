// import { LinkProps } from '@tanstack/react-router'
import type LinkProps from 'next/link'

interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  name: string
  logo: React.ElementType
  plan: string
}

interface Project {
  title: string
  href: string
  items: NavItem[]
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
}

type NavLink = BaseNavItem & {
  href: string
  items?: never
}

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { href: string })[]
  href?: never
}

type NavItem = NavCollapsible | NavLink
interface NavMain {
  title: string
  icon?: React.ElementType
  isActive?: boolean
  href?: never
  items: NavItem[]
}

type otherNavItem = {
  name: string
  icon?: React.ElementType
  href?: never
  subItems?: { title: string; href: never; pro?: boolean; new?: boolean }[]
}

interface NavGroup {
  title: string
  items: NavItem[]
}

interface Documents {
  title: string
  href?: never | string
  icon?: React.ElementType
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
  navMain: NavMain[]
  Documents: Documents[]
}

export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink }
