import React from 'react'
import '@/styles/globals.css'
import type { Metadata } from 'next'
// @/lib
import { META_THEME_COLORS, siteConfig } from '@/lib/config'
import { fontVariables } from '@/lib/fonts'
import { cn } from '@/lib/utils'
// @/context
import { ActiveThemeProvider } from '@/context/active-theme'
import { QueryClientProviders } from '@/context/query-client-providers'
// @/components
import { ThemeProvider } from '@/context/theme-provider'
import { LayoutProvider } from '@/hooks/use-layout'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Components', 'shadcn'],
  authors: [
    {
      name: 'victorvinh',
      url: 'https://shadcn.com',
    },
  ],
  creator: 'victorvinh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name='theme-color' content={META_THEME_COLORS.light} />
        ent={META_THEME_COLORS.light}
      </head>
      <body
        className={cn(
          'text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]',
          fontVariables
        )}
        data-new-gr-c-s-check-loaded='14.1107.0'
        data-gr-ext-installed=''
      >
        <QueryClientProviders>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <LayoutProvider>
              <ActiveThemeProvider>
                {children}
                {/* Sonner Toast Notifications */}
                <Toaster position='top-center' />
              </ActiveThemeProvider>
            </LayoutProvider>
          </ThemeProvider>
        </QueryClientProviders>
      </body>
    </html>
  )
}
