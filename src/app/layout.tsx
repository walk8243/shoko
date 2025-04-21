import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '将皇',
  description: '将棋アプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
