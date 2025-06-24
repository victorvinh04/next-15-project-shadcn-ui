'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const links = [
  {
    name: 'Area Charts',
    href: '/charts/area/area#charts',
  },
  {
    name: 'Bar Charts',
    href: '/charts/bar#charts',
  },
  {
    name: 'Line Charts',
    href: '/charts/line#charts',
  },
  {
    name: 'Pie Charts',
    href: '/charts/pie/pie#charts',
  },
  {
    name: 'Radar Charts',
    href: '/charts/radar/radar#charts',
  },
  {
    name: 'Radial Charts',
    href: '/charts/radial/radial#charts',
  },
  {
    name: 'Tooltips',
    href: '/charts/tooltips/tooltip#charts',
  },
]

export const ChartsNav = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  const pathname = usePathname()
  return (
    <div className='relative overflow-hidden'>
      <ScrollArea className='max-w-[600px] lg:max-w-none'>
        <div
          ref={ref}
          className={cn('flex items-center', className)}
          {...props}
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              data-active={link.href.startsWith(pathname)}
              className={cn(
                'text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 shrink-0 items-center justify-center px-4 text-center text-base font-medium transition-colors'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='invisible' />
      </ScrollArea>
    </div>
  )
})
ChartsNav.displayName = 'ChartsNav'