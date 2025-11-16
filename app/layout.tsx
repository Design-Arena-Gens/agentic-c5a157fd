import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Build Your Own Jarvis AI Assistant',
  description: 'Comprehensive guide and interactive demo for building a personal AI assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-jarvis-darker text-white antialiased">{children}</body>
    </html>
  )
}
