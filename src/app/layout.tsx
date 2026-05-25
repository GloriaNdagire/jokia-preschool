import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Jokia Pre School – Play, Learn and Grow',
  description:
    'Jokia Pre School nurtures children from the roots — a place where play, learning, and growth come together in a warm, loving environment.',
  keywords: [
    'Jokia Pre School',
    'preschool Uganda',
    'nursery school',
    'early childhood education',
    'kindergarten',
  ],
  openGraph: {
    title: 'Jokia Pre School',
    description: 'Building a child from the roots.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
