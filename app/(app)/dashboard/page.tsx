'use client'

import Cookies from 'js-cookie'
import { AppSidebar } from '@/app/(app)/dashboard/components/app-sidebar'
import SiteHeader from '@/app/(app)/dashboard/components/site-header'
import { SearchProvider } from '@/context/search-context'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ChartAreaInteractive } from '@/components/ui/chart/chart-area-interactive'
import { ProfileDropdown } from '@/components/ui/profile-dropdown'
import { SearchComponent } from '@/components/ui/search/search'
import SectionCards from '@/components/ui/section/section-card'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { DataTable } from '@/components/ui/table/data-table'
import { Main } from '@/components/layout/main'
import { ThemeSwitch } from '@/components/themes/theme-switch'
import dataTable from './data.json'

export default function Page() {
  const defaultOpen = Cookies.get('sidebar:state') !== 'false'
  return (
    <SearchProvider>
      <SidebarProvider
        defaultOpen={defaultOpen}
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset className='*:dark:bg-primary-foreground'>
          <SiteHeader>
            <SidebarTrigger
              variant='outline'
              className='scale-125 sm:scale-100'
            />
            <Separator orientation='vertical' className='h-6' />
            <SearchComponent />
            <div className='ml-auto flex items-center gap-4'>
              <ThemeSwitch />
              <ProfileDropdown />
            </div>
          </SiteHeader>
          <div className='flex flex-col items-center gap-2 lg:px-6'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink
                    className='text-title-sm font-medium'
                    href='#'
                  >
                    Dashboard Page
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className='text-title-sm font-medium'
                    href='/dashboard'
                  >
                    <span className='text-title-sm font-medium'>Page</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Separator className='my-4' />
          </div>
          <div className='flex min-h-screen flex-1 flex-col'>
            <Main fixed>
              <div className='@container/main flex flex-1 flex-col gap-2'>
                <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
                  <SectionCards />
                  <DataTable data={dataTable} />
                  <div className='px-4 lg:px-6'>
                    <ChartAreaInteractive />
                  </div>
                </div>
              </div>
            </Main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  )
}
