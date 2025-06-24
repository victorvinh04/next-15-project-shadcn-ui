import { Suspense } from 'react'
import { PageNav } from '@/app/(app)/dashboard/components/page-nav'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CardsDemo } from '@/components/ui/cards'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/layout/page-header'
import { SiteFooter } from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'

const title = 'Build your Component Library'
const description =
  'A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.'

export const dynamic = 'force-static'
export const revalidate = false

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

function LoadingPage() {
  return <h2>🌀 Loading...</h2>
}

export default function IndexPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className='bg-background relative z-10 flex min-h-svh flex-col'>
        <SiteHeader />
        <main className='flex flex-1 flex-col items-center justify-center'>
          <PageHeader>
            <PageHeaderHeading>{title}</PageHeaderHeading>
            <PageHeaderDescription>{description}</PageHeaderDescription>
            <PageActions>
              <Button asChild size='sm'>
                <Link href='/docs/installation'>Get Started</Link>
              </Button>
              <Button asChild size='sm' variant='ghost'>
                <Link href='/blocks'>Browse Blocks</Link>
              </Button>
            </PageActions>
          </PageHeader>
          <PageNav className='hidden md:flex'></PageNav>
          <div className='container-wrapper section-soft flex-1 pb-6'>
            <div className='container overflow-hidden'>
              <section className='border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]'>
                <Image
                  src='/r/styles/new-york-v4/dashboard-01-light.png'
                  width={1400}
                  height={875}
                  alt='Dashboard'
                  className='block dark:hidden'
                  priority
                />
                <Image
                  src='/r/styles/new-york-v4/dashboard-01-dark.png'
                  width={1400}
                  height={875}
                  alt='Dashboard'
                  className='hidden dark:block'
                  priority
                />
              </section>
              <section className='theme-container hidden md:block'>
                <CardsDemo />
              </section>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </Suspense>
  )
}
