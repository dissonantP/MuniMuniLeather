import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Muni Muni Leather CMS',
  description: 'Content management for Muni Muni Leather.',
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#f4f0e8', color: '#201b16', margin: 0 }}>{children}</body>
    </html>
  )
}
