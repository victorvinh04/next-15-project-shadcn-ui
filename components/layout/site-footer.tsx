import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export function SiteFooter() {
  return (
    <footer className='group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent dark:bg-transparent'>
      <div className='container-wrapper px-4 xl:px-6'>
        <div className='flex h-(--footer-height) items-center justify-between'>
          <div className='text-muted-foreground w-full text-center text-xs leading-loose sm:text-sm'>
            Built by{' '}
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer noopener'
              className='font-medium underline underline-offset-4'
            >
              shadcn
            </Link>{' '}
            at{' '}
            <a
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
