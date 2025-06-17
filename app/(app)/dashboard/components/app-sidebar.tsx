'use client'

import * as React from 'react'
import { NavDocuments } from '@/app/(app)/dashboard/components/nav/nav-documents'
import { NavGroup } from '@/app/(app)/dashboard/components/nav/nav-group'
import { NavSecondary } from '@/app/(app)/dashboard/components/nav/nav-secondary'
import { NavUser } from '@/app/(app)/dashboard/components/nav/nav-user'
import {
  BarChartIcon,
  CameraIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react'
import { ClipboardIcon, FileIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { sidebarData } from './data/sidebar-data'
import { TeamSwitcher } from './team-switcher'

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: LayoutDashboardIcon,
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: ListIcon,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: BarChartIcon,
    },
    {
      title: 'Projects',
      url: '#',
      icon: FolderIcon,
    },
    {
      title: 'Team',
      url: '#',
      icon: UsersIcon,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: CameraIcon,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: FileTextIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: FileCodeIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      href: '#',
      icon: SettingsIcon,
    },
    {
      title: 'Get Help',
      href: '#',
      icon: HelpCircleIcon,
    },
    {
      title: 'Search',
      href: '#',
      icon: SearchIcon,
    },
  ],
  Documents: [
    {
      title: 'Reports',
      href: '#',
      icon: ClipboardIcon,
    },
    {
      title: 'Word Assistant',
      href: '#',
      icon: FileIcon,
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible='icon'
      className='h-auto border-r'
      variant='floating'
      {...props}
    >
      <SidebarHeader className='border-b'>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
        <NavDocuments items={data.Documents} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter className='pb-4'>
        <div className='flex items-center justify-center'>
          <NavUser user={sidebarData.user} />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
