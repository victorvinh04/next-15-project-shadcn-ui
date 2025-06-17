import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
  IconGrid4x4,
  IconBook2,
  IconSettings2,
  IconSandbox,
  IconCommand,
  IconDotsVertical,
  IconUserX,
  IconUser,
  IconPassword,
  IconPhoneCall,
  IconAlertCircle,
  IconImageInPicture,
  IconBadge,
  IconBread,
  IconCards,
  IconCarouselVertical,
  IconDropletDown,
  IconPhotoAi,
  IconSlash,
  IconList,
  IconTools,
  IconVideo,
  IconClipboard,
  IconDatabase,
  IconFile,
  IconAdjustments,
  IconPlaystationTriangle,
  IconAuth2fa,
  IconFileTextSpark,
} from '@tabler/icons-react'
import { SidebarData } from '@/types/data-sidebar'

export const sidebarData: SidebarData = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/assets/images/user/owner.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: IconDotsVertical,
      plan: 'Enterprise',
    },
    {
      name: 'Shadcn Admin',
      logo: IconCommand,
      plan: 'Next + ShadcnUI',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      icon: IconGrid4x4,
      isActive: true,
      items: [
        {
          title: 'Calendar',
          href: '/calendar',
        },
        {
          title: 'User Profile',
          href: '/profile',
        },
        {
          title: 'Forms',
          href: '/form',
        },
        {
          title: 'Chat Page',
          href: '/chats',
        },
      ],
    },
    {
      title: 'Documentation',
      icon: IconBook2,
      items: [
        {
          title: 'Introduction',
          href: '#',
        },
        {
          title: 'Get Started',
          href: '#',
        },
        {
          title: 'Tutorials',
          href: '#',
        },
        {
          title: 'Changelog',
          href: '#',
        },
      ],
    },
    {
      title: 'Settings',
      icon: IconSettings2,
      items: [
        {
          title: 'General',
          href: '#',
        },
        {
          title: 'Team',
          href: '#',
        },
        {
          title: 'Billing',
          href: '#',
        },
        {
          title: 'Limits',
          href: '#',
        },
      ],
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          href: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Tasks',
          href: '/tasks',
          icon: IconChecklist,
        },
        {
          title: 'Apps',
          href: '/apps',
          icon: IconPackages,
        },
        {
          title: 'Chats',
          href: '/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'Users',
          href: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              href: '/sign-in',
              icon: IconUserX,
            },
            {
              title: 'Sign In (2 Col)',
              href: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              href: '/sign-up',
              icon: IconUser,
            },
            {
              title: 'Forgot Password',
              href: '/forgot-password',
              icon: IconPassword,
            },
            {
              title: 'OTP',
              href: '/otp',
              icon: IconPhoneCall,
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              href: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              href: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found',
              href: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              href: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              href: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
        {
          title: 'UI-Elements',
          icon: IconSandbox,
          items: [
            {
              title: 'Alerts',
              href: '/alerts',
              icon: IconAlertCircle,
            },
            {
              title: 'avatar',
              href: '/avatars',
              icon: IconImageInPicture,
            },
            {
              title: 'Badge',
              href: '/badge',
              icon: IconBadge,
            },
            {
              title: 'Breadcrumb',
              href: '/breadcrumb',
              icon: IconBread,
            },
            {
              title: 'Cards',
              href: '/cards',
              icon: IconCards,
            },
            {
              title: 'Carousel',
              href: '/carousel',
              icon: IconCarouselVertical,
            },
            {
              title: 'Dropdowns',
              href: '/dropdowns',
              icon: IconDropletDown,
            },
            {
              title: 'Images',
              href: '/images',
              icon: IconPhotoAi,
            },
            {
              title: 'Links',
              href: '/links',
              icon: IconSlash,
            },
            {
              title: 'list',
              href: '/list',
              icon: IconList,
            },
            {
              title: 'Modals',
              href: '/modals',
            },
            {
              title: 'Notification',
              href: '/notification',
              icon: IconMessages,
            },
            {
              title: 'Pagination',
              href: '/pagination',
            },
            {
              title: 'Popovers',
              href: '/popovers',
            },
            {
              title: 'Progressbar',
              href: '/progressbar',
              icon: IconClipboard,
            },
            {
              title: 'Tooltips',
              href: '/tooltips',
              icon: IconTools,
            },
            {
              title: 'Videos',
              href: '/videos',
              icon: IconVideo,
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              href: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              href: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              href: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              href: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              href: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
      ],
    },
    {
      title: 'Examples',
      items: [
        {
          title: 'Theme',
          href: '/themes',
          icon: IconAdjustments,
        },
        {
          title: 'Playground',
          href: 'examples/playground',
          icon: IconPlaystationTriangle,
        },
        {
          title: 'Authentication',
          href: 'examples/authentication',
          icon: IconAuth2fa,
        },
        {
          title: 'Task',
          href: 'examples/task',
          icon: IconFileTextSpark,
        },
      ],
    },
  ],
  Documents: [
    {
      title: 'Data Library',
      href: '#',
      icon: IconDatabase,
    },
    {
      title: 'Reports',
      href: '#',
      icon: IconClipboard,
    },
    {
      title: 'Word Assistant',
      href: '#',
      icon: IconFile,
    },
  ],
}
