import AppHeader from "@/components/layout/app-header"
import { Main } from "@/components/layout/main"
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/layout/page-header"
import { PageNav } from "@/components/layout/page-nav"
import SiteHeader from "@/components/layout/site-header"
import { ThemeSelector } from "@/components/layout/theme-selector"
import { Announcement } from "@/components/ui/announcement"
import { Button } from "@/components/ui/button"
import { ProfileDropdown } from "@/components/ui/profile-dropdown"
import { SearchForm } from "@/components/ui/search-form"
import { ThemeSwitch } from "@/components/layout/theme-switch"
import { Metadata } from "next"
import Link from "next/link"
import StarOnGithub from "@/components/mvpblocks/star-on-github"


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
    <AppHeader>
    <Link href='/' className='flex items-center gap-2'>
              <span className='text-xl font-semibold'>Themes</span>
            </Link>
            <div className='flex-1' />
            <nav className='flex items-center gap-4'>
              <Link href='https://github.com/victorvinh04' className='text-sm'>
                <StarOnGithub/>
              </Link>
              <ThemeSwitch />
            </nav>
    </AppHeader>
        <Main>
            <PageHeader>
                <Announcement />
                <PageHeaderHeading>Build your Component Library</PageHeaderHeading>
                <PageHeaderDescription>
                A set of beautifully-designed, accessible components and a code
                distribution platform. Works with your favorite frameworks. Open
                Source. Open Code.
                </PageHeaderDescription>
                <PageActions>
                <Button asChild size="sm">
                    <Link href="/docs">Get Started</Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                    <Link href="/blocks">Browse Blocks</Link>
                </Button>
                </PageActions>
            </PageHeader>
            <PageNav id="examples">
                {/* <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" /> */}
                <ThemeSelector className="mr-4 hidden md:block" />
            </PageNav>
            <div className="container-wrapper section-soft flex flex-1 flex-col pb-6">
                <div className="theme-container container flex flex-1 scroll-mt-20 flex-col">
                <div className="bg-background flex flex-col overflow-hidden rounded-lg border bg-clip-padding md:flex-1 xl:rounded-xl">
                    {children}
                </div>
                </div>
            </div>
        </Main>
    </div>
  )
}
