import Link from 'next/link'
import { CardsDemo } from '@/components/ui/cards'
import { ThemeCustomizer } from '@/components/layout/theme-customizer'

export const dynamic = 'force-static'
export const revalidate = false

export default function ThemesPage() {
  return (
    <>
      <div id='themes' className='container-wrapper scroll-mt-20'>
        <div className='container flex items-center justify-between gap-8 px-6 py-4 md:px-8'>
          <ThemeCustomizer />
        </div>
      </div>
      <div className='container-wrapper section-soft flex flex-1 flex-col pb-6'>
        <div className='theme-container container flex flex-1 flex-col'>
          <CardsDemo />
        </div>
      </div>
      <footer className='group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent dark:bg-transparent'>
        <div className='container-wrapper px-4 xl:px-6'>
          <div className='flex h-(--footer-height) items-center justify-between'>
            <div className='text-muted-foreground w-full text-center text-xs leading-loose sm:text-sm'>
              Built by{` `}
              <Link
                href='https://twitter.com/shadcn'
                className='font-medium underline underline-offset-4'
              >
                shadcn
              </Link>{' '}
              at{' '}
              <Link
                href='https://vercel.com/new?utm_source=shadcn_site&amp;utm_medium=web&amp;utm_campaign=docs_cta_deploy_now_callout'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
              >
                Vercel
              </Link>
              . The source code is available on{` `}
              <Link
                href='https://github.com/shadcn-ui/ui'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
              >
                GitHub
              </Link>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
