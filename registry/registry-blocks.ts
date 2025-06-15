import * as React from 'react'
import type { Registry } from '@/registry/schema'

export const blocks: Registry = [
  {
    name: 'button-star-on-github',
    description:
      'A button component that encourages users to star your project on GitHub with a stylish animation and Lucide icons.',
    author: 'subhadeeproy3902', // Your GitHub username
    type: 'registry:block',
    dependencies: ['lucide-react'], // List of dependencies to install
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/star-on-github.tsx', // Path to your block file
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('@/components/mvpblocks/star-on-github') // Lazy path to your block component
    ),
  },
]
