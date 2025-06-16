import { DropdownMenu } from '@/components/ui/dropdown/dropdown-menu';
import React from 'react';


interface NavTopProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
}

const NavTop = ({ className, links, ...props }: NavTopProps) => {
  return (
    <>
        <div className="md:hidden">
            <DropdownMenu></DropdownMenu>
        </div>
    </>
  )
}

export default NavTop