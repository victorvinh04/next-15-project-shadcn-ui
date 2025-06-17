import React from 'react'
import { cn } from '@/lib/utils'

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
        'bg-background flex h-16 shrink-0 items-center gap-3 border-b transition-[width,height] ease-linear sm:gap-4',
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
