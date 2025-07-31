import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'あなたにぴったりの勉強法診断',
  description: '心理テスト風の勉強診断アプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-purple min-h-screen">
        {children}
      </body>
    </html>
  )
}