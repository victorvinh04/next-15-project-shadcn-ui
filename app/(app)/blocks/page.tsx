import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-static'
export const revalidate = false

const FEATURED_BLOCKS = [
  'dashboard-01',
  'sidebar-07',
  'sidebar-03',
  'login-03',
  'login-04',
]
export default async function BlocksPage() {
  return (
    <div className='flex flex-col gap-12 md:gap-24'>
      {FEATURED_BLOCKS.map((name) => (
        <div key={name} />
      ))}
      <div className='container-wrapper'>
        <div className='container flex justify-center py-6'>
          <Button asChild variant='outline'>
            <Link href='/blocks/sidebar'>Browse more blocks</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
