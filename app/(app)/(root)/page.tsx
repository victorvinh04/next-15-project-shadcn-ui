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
import { ThemeSelector } from '@/components/themes/theme-selector'
import { ThemeSwitch } from '@/components/themes/theme-switch'

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

export default function IndexPage() {
  return (
    <div className='bg-background relative z-10 flex min-h-svh flex-col'>
      <header className='bg-background sticky top-0 z-50 w-full'>
        <div className='container-wrapper 3xl:fixed:px-0 px-6'>
          <div className='3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/assets/images/logo/logo.svg'
                alt='Logo'
                width={32}
                height={32}
                className='h-8 w-8'
              />
              <span className='text-lg font-semibold'>shadcn/ui</span>
            </Link>
            <nav className='flex items-center gap-4'>
              <ThemeSelector className='hidden md:flex' />
              <ThemeSwitch />
            </nav>
          </div>
        </div>
      </header>
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
    </div>
  )
}
