import React from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

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

  return (
    <header
      className={cn(
        'flex h-16 bg-background shrink-0 items-center gap-3 sm:gap-4 border-b transition-[width,height] ease-linear',
        'group-has-data-[collapsible=icon]/sidebar-wrapper:h-12',
        fixed && 'header-fixed peer/header fixed z-50 w-[inherit] rounded-md',
        offset > 10 && fixed ? 'shadow-sm' : 'shadow-none',
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
}

export default SiteHeader
