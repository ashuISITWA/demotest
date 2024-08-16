// components/RootLayoutWithoutApplication.tsx
import '@/styles/tailwind.css'
import Head from 'next/head'
import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Catalyst',
    default: 'Catalyst',
  },
  description: '',
}

export default function RootLayoutWithoutApplication({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
