import React from 'react'
import { cn } from '@/lib/utils'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  fixed?: boolean
}
const AppHeader = ({ className, children, fixed, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'bg-background',
        fixed && 'header-fixed peer/header fixed w-[inherit] rounded-md',
        className
      )}
      {...props}
    >
      <div className='container-wrapper 3xl:fixed:px-0 px-6'>
      <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          {children}
        </div>
      </div>
    </header>
  )
}

export default AppHeader
