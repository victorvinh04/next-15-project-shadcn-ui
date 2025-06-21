import { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  Outlet,
  Link,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { notFound } from 'next/navigation'
import { Toaster } from '@/components/ui/sonner'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <Link to='/' className='sr-only'>
        Home
      </Link>
      <div className='flex min-h-screen flex-col'>
        <Outlet />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        <TanStackRouterDevtools position='bottom-right' />
      </div>
    </>
  ),
  errorComponent: () => {
    notFound()
  },
})
