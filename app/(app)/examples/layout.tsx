import { PageNav } from '@/app/(app)/dashboard/components/page-nav'
import { Metadata } from 'next'
import Link from 'next/link'
import { Announcement } from '@/components/ui/announcement'
import { Button } from '@/components/ui/button'
import { ExamplesNav } from '@/components/ui/examples/examples-nav'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/layout/page-header'
import StarOnGithub from '@/components/mvpblocks/star-on-github'
import { ThemeSelector } from '@/components/themes/theme-selector'
import { SiteFooter } from '../../../components/layout/site-footer'
import SiteHeader from '../../../components/layout/site-header'

export const dynamic = 'force-static'
export const revalidate = false

const title = 'Examples'
const description = 'Check out some examples app built using the components.'

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

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-background relative z-10 flex min-h-svh flex-col'>
      <SiteHeader></SiteHeader>
      <main className='flex flex-1 flex-col items-center p-4'>
        <div className='flex flex-1 flex-col'>
          <PageHeader>
            <Announcement />
            <PageHeaderHeading>Build your Component Library</PageHeaderHeading>
            <PageHeaderDescription>
              A set of beautifully-designed, accessible components and a code
              distribution platform. Works with your favorite frameworks. Open
              Source. Open Code.
            </PageHeaderDescription>
            <PageActions>
              <Button asChild size='sm'>
                <Link href='/docs'>Get Started</Link>
              </Button>
              <Button asChild size='sm' variant='ghost'>
                <Link href='/blocks'>Browse Blocks</Link>
              </Button>
            </PageActions>
          </PageHeader>
        </div>
        <PageNav id='examples' className='container-wrapper scroll-mt-24'>
          <ExamplesNav className='[&>a:first-child]:text-primary flex-1 overflow-hidden' />
          <ThemeSelector className='mr-4 hidden md:block' />
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
