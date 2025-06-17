'use client'

import { ReactNode } from 'react'
import { IconChevronRight } from '@tabler/icons-react'
import {
  NavCollapsible,
  NavItem,
  NavLink,
  type NavGroup,
} from '@/types/data-sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown/dropdown-menu'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar'

export function NavGroup({ title, items }: NavGroup) {
  const { state } = useSidebar()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const key = `${item.title}-${item.href ?? ''}`

          if (!item.items)
            return <SidebarMenuLink key={key} item={item} href={item.href} />

          if (state === 'collapsed')
            return (
              <SidebarMenuCollapsedDropdown
                key={key}
                item={item}
                href={item.href ?? ''}
              />
            )

          return (
            <SidebarMenuCollapsible
              key={key}
              item={item}
              href={item.href ?? ''}
            />
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

const SidebarMenuLink = ({ item, href }: { item: NavLink; href: string }) => {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
      >
        <Link
          href={item.href}
          onClick={() => setOpenMobile(false)}
          className='menu-item group menu-item-active'
        >
          {item.icon && <item.icon className='menu-item-icon-active' />}
          <span className='text-primary'>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

const NavBadge = ({ children }: { children: ReactNode }) => (
  <Badge className='menu-dropdown-badge ml-auto rounded-full px-1 py-0 text-xs'>
    {children}
  </Badge>
)

const SidebarMenuCollapsible = ({
  item,
  href,
}: {
  item: NavCollapsible
  href: string
}) => {
  const { setOpenMobile } = useSidebar()
  const pathname = usePathname()
  return (
    <Collapsible
      asChild
      defaultOpen={checkIsActive(href, item, true)}
      className={cn('group/collapsible')}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
          >
            <Link
              className={cn('menu-item group flex flex-row gap-4')}
              href={item?.href ?? pathname}
            >
              {item.icon && (
                <item.icon className='tabler-icon tabler-icon-users' />
              )}
              <span className='text-primary dark:text-gray-400'>
                {item.title}
              </span>
              {item.badge && <NavBadge>{item.badge}</NavBadge>}
            </Link>
            <IconChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 dark:text-gray-400' />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className='CollapsibleContent'>
          <SidebarMenuSub className='mt-2 ml-9 space-y-1'>
            {item.items.map((subItem) => (
              <SidebarMenuSubItem
                key={subItem.title}
                className='text-foreground hover:bg-secondary hover:text-primary'
              >
                <SidebarMenuSubButton
                  className='text-foreground hover:bg-secondary hover:text-primary'
                  asChild
                  isActive={checkIsActive(href, subItem, true)}
                >
                  <Link
                    href={subItem?.href ?? pathname}
                    onClick={() => setOpenMobile(false)}
                    className={cn(
                      checkIsActive(href, subItem)
                        ? 'menu-item-active'
                        : 'menu-item-inactive'
                    )}
                  >
                    {subItem.icon && (
                      <subItem.icon className='tabler-icon tabler-icon-users' />
                    )}
                    <span className='text-foreground hover:bg-secondary hover:text-primary'>
                      {subItem.title}
                    </span>
                    {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

const SidebarMenuCollapsedDropdown = ({
  item,
  href,
}: {
  item: NavCollapsible
  href: string
}) => {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
            className='text-foreground'
          >
            {item.icon && (
              <item.icon className='tabler-icon tabler-icon-users' />
            )}
            <span className='text-foreground hover:bg-secondary hover:text-primary'>
              {item.title}
            </span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <IconChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 dark:text-gray-400' />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='right' align='start' sideOffset={4}>
          <DropdownMenuLabel className='menu-item group menu-item-active'>
            {item.title} {item.badge ? `${item.badge}` : ''}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.items.map((sub) => (
            <DropdownMenuItem key={`${sub.title}-${sub?.href}`} asChild>
              <Link
                href={sub?.href}
                className={`menu-item group menu-item-active ${checkIsActive(href, sub) ? 'bg-secondary' : ''}`}
              >
                {sub.icon && (
                  <sub.icon className='tabler-icon tabler-icon-users' />
                )}
                <span
                  className={`${
                    checkIsActive(href, sub)
                      ? 'menu-item-icon-active'
                      : 'menu-item-icon-inactive'
                  }`}
                >
                  {sub.title}
                </span>
                {sub.badge && (
                  <span className='text-foreground hover:bg-secondary hover:text-primary ml-auto text-xs'>
                    {sub.badge}
                  </span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  )
}

function checkIsActive(href: string, item: NavItem, mainNav = false): boolean {
  return !!(
    href === item?.href || // /endpint?search=param
    href?.split('?')[0] === item?.href || // endpoint
    !!item?.items?.filter((i) => i?.href === href).length || // if child nav is active
    (mainNav &&
      href.split('/')[1] !== '' &&
      href.split('/')[1] === item?.href?.split('/')[1])
  )
}
