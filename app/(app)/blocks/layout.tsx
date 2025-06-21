import { Metadata } from 'next'
import Link from 'next/link'
import { Announcement } from '@/components/ui/announcement'
import { Button } from '@/components/ui/button'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/layout/page-header'
import StarOnGithub from '@/components/mvpblocks/star-on-github'
import { PageNav } from '../dashboard/components/page-nav'
import { SiteFooter } from '../dashboard/components/site-footer'
import SiteHeader from '../dashboard/components/site-header'
import { BlocksNav } from '@/components/ui/blocks/blocks-nav'

const title = 'Building Blocks for the Web'
const description =
  'Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.'

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

export default function BlocksLayout({
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
                <a href='#blocks'>Browse Blocks</a>
              </Button>
              <Button asChild variant='ghost' size='sm'>
                <Link href='/docs/blocks'>Add a block</Link>
              </Button>
            </PageActions>
          </PageHeader>
        </div>
        <PageNav id='examples' className='container-wrapper scroll-mt-24'>
          <BlocksNav />
          <Button
            asChild
            variant='secondary'
            size='sm'
            className='mr-7 hidden shadow-none lg:flex'
          >
            <Link href='/blocks/sidebar'>Browse all blocks</Link>
          </Button>
        </PageNav>
        <div className='container-wrapper section-soft flex flex-1 flex-col pb-6'>
          <div className='theme-container container flex flex-1 scroll-mt-20 flex-col'>
            <div className='bg-background flex flex-col overflow-hidden rounded-lg border bg-clip-padding md:flex-1 xl:rounded-xl'>
              {children}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
