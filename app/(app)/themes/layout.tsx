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

const title = 'Pick a Color. Make it yours.'
const description =
  'Try our hand-picked themes. Copy and paste them into your project. New theme editor coming soon.'

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

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-background relative z-10 flex min-h-svh flex-col'>
      <header className='bg-background sticky top-0 z-50 w-full'>
        <div className='container-wrapper 3xl:fixed:px-0 px-6'>
          <div className='3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4'>
            <Link href='/' className='flex items-center gap-2'>
              <span className='text-xl font-semibold'>Themes</span>
            </Link>
            <div className='flex-1' />
            <nav className='flex items-center gap-4'>
              <Link href='/docs/theming' className='text-sm'>
                Documentation
              </Link>
              <Link href='/themes' className='text-sm'>
                Browse Themes
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className='bg-background relative flex min-h-svh flex-1 flex-col'>
        <div className='mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6'>
          <PageHeader>
            <Announcement />
            <PageHeaderHeading>{title}</PageHeaderHeading>
            <PageHeaderDescription>{description}</PageHeaderDescription>
            <PageActions>
              <Button asChild size='sm'>
                <a href='#themes'>Browse Themes</a>
              </Button>
              <Button asChild variant='ghost' size='sm'>
                <Link href='/docs/theming'>Documentation</Link>
              </Button>
            </PageActions>
          </PageHeader>
          {children}
        </div>
      </main>
    </div>
  )
}
