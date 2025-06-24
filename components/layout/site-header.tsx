'use client';

import React from 'react';
import Link from 'next/link';
import { getColors } from '@/lib/colors';
import { siteConfig } from '@/lib/config';
// import { source } from '@/lib/source'
import { cn } from '@/lib/utils';
// import blocks from "@/registry/__blocks__.json"
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Separator } from '@/components/ui/separator';
import { CommandMenuDashboard } from '@/components/layout/command-menu-dashboard';
import { GitHubLink } from '@/components/layout/github-link';
import { MainNav } from '@/components/layout/main-nav';
import { MobileNav } from '@/components/layout/mobile-nav';
import { ModeSwitcher } from '@/components/layout/mode-switcher';
import StarOnGithub from '@/components/mvpblocks/star-on-github'
import { SiteConfig } from './site-config'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  fixed?: boolean
}
const SiteHeader = ({ className, children, fixed, ...props }: HeaderProps) => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fixed])

  const colors = getColors()
  // const pageTree = source.pageTree

  return (
    <header
      className={cn('bg-background sticky top-0 z-50 w-full', className)}
      {...props}
    >
      <div className='container-wrapper 3xl:fixed:px-0 px-6'>
        <div className='3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4'>
          <MobileNav
            // tree={pageTree}
            items={siteConfig.navItems}
            className='flex lg:hidden'
          />
          <Button
            asChild
            variant='ghost'
            size='icon'
            className='hidden size-8 lg:flex'
          >
            <Link href='/' className='text-xl font-bold'>
              <Icons.logo className='size-5' />
              <span className='sr-only'>{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={siteConfig.navItems} className='hidden lg:flex' />
          <div className='ml-auto flex items-center gap-2 md:flex-1 md:justify-end'>
            <div className='hidden w-full flex-1 md:flex md:w-auto md:flex-none'>
              <CommandMenuDashboard colors={colors} />
            </div>
            <Separator
              orientation='vertical'
              className='ml-2 hidden lg:block'
            />
                    <nav className='flex items-center gap-4'>
                      <Link href='https://github.com/victorvinh04' className='text-sm'>
                        <StarOnGithub />
                      </Link>
                    </nav>
            <Separator orientation='vertical' className='3xl:flex hidden' />
            <SiteConfig className='3xl:flex hidden' />
            <Separator orientation='vertical' />
            <ModeSwitcher />
            {children}
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader