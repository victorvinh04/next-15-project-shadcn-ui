'use client'

import { Row } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { labels } from '../data/data'
import { taskSchema } from '../data/schema'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({row}: DataTableRowActionsProps<TData>){

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                          variant="ghost"
                          size="icon"
                          className="data-[state=open]:bg-muted size-8"
                >
                    <MoreHorizontal/>
                    <span className='sr-only'>Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            
        </DropdownMenu>
    )
}