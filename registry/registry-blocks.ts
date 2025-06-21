import * as React from 'react'
import type { Registry } from '@/registry/schema'

export const blocks: Registry['items'] = [
  // {
  //   name: 'button-star-on-github',
  //   type: 'registry:block',
  //   description:
  //     'A button component that encourages users to star your project on GitHub with a stylish animation and Lucide icons.',
  //   dependencies: ['lucide-react'], // List of dependencies to install
  //   registryDependencies: [],
  //   files: [
  //     {
  //       path: '@/components/mvpblocks/star-on-github.tsx', // Path to your block file
  //       type: 'registry:block',
  //     },
  //   ],
  //   component: React.lazy(
  //     () => import('@/components/mvpblocks/star-on-github') // Lazy path to your block component
  //   ),
  // },
  {
    name: 'dashboard-01',
    type: 'registry:block',
    description: 'A dashboard with sidebar, charts and data table.',
    dependencies: [
      '@dnd-kit/core',
      '@dnd-kit/modifiers',
      '@dnd-kit/sortable',
      '@dnd-kit/utilities',
      '@tanstack/react-table',
      'zod',
    ],
    registryDependencies: [
      'sidebar',
      'breadcrumb',
      'separator',
      'label',
      'chart',
      'card',
      'select',
      'tabs',
      'table',
      'toggle-group',
      'badge',
      'button',
      'checkbox',
      'dropdown-menu',
      'drawer',
      'input',
      'avatar',
      'sheet',
      'sonner',
    ],
    files: [
      {
        path: 'blocks/dashboard-01/page.tsx',
        type: 'registry:page',
        target: 'app/dashboard/page.tsx',
      },
      {
        path: 'blocks/dashboard-01/data.json',
        type: 'registry:file',
        target: 'app/dashboard/data.json',
      },
      {
        path: 'blocks/dashboard-01/components/app-sidebar.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/chart-area-interactive.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/data-table.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/nav-documents.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/nav-main.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/nav-secondary.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/nav-user.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/section-cards.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/site-header.tsx',
        type: 'registry:component',
      },
    ],
    categories: ['dashboard'],
    meta: {
      iframeHeight: '1000px',
    },
  },
]
