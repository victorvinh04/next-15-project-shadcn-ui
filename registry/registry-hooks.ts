import { Registry } from './schema'

export const hooks: Registry['items'] = [
  {
    name: 'use-mobile',
    type: 'registry:hook',
    files: [
      {
        path: 'hooks/use-mobile.ts',
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'use-config',
    type: 'registry:hook',
    files: [
      {
        path: 'hooks/use-config.ts',
        type: 'registry:hook',
      },
    ],
  },
]
