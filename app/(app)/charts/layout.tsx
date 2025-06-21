import { Metadata } from 'next'
import Link from 'next/link'
import { Announcement } from '@/components/ui/announcement'
import { Button } from '@/components/ui/button'
import { ChartsNav } from '@/components/ui/charts/charts-nav'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/layout/page-header'
import StarOnGithub from '@/components/mvpblocks/star-on-github'
import { ThemeSelector } from '@/components/themes/theme-selector'
import { PageNav } from '../dashboard/components/page-nav'
import { SiteFooter } from '../dashboard/components/site-footer'
import SiteHeader from '../dashboard/components/site-header'

const title = 'Beautiful Charts & Graphs'
const description =
  'A collection of ready-to-use chart components built with Recharts. From basic charts to rich data displays, copy and paste into your apps.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-background relative z-10 flex min-h-svh flex-col'>
      <SiteHeader>
        <nav className='flex items-center gap-4'>
          <Link href='https://github.com/victorvinh04' className='text-sm'>
            <StarOnGithub />
          </Link>
        </nav>
      </SiteHeader>
      <main className='flex flex-1 flex-col items-center p-4'>
        <div className='flex flex-1 flex-col'>
          <PageHeader>
            <Announcement />
            <PageHeaderHeading>{title}</PageHeaderHeading>
            <PageHeaderDescription>{description}</PageHeaderDescription>
            <PageActions>
              <Button asChild size='sm'>
                <a href='#charts'>Browse Charts</a>
              </Button>
              <Button asChild variant='ghost' size='sm'>
                <Link href='/docs/components/chart'>Documentation</Link>
              </Button>
            </PageActions>
          </PageHeader>
        </div>
        <PageNav id='charts'>
          <ChartsNav />
          <ThemeSelector className='mr-4 hidden md:block' />
        </PageNav>
        <div className='container-wrapper section-soft flex-1'>
          <div className='container pb-6'>
            <section className='theme-container'>{children}</section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
