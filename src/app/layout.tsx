import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactQueryProvider } from './ReactQueryProvider'
import { AuthProvider } from './auth/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `R'flex Hospital EHR`,
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={inter.className}>
            <AuthProvider>{children}</AuthProvider>
          </body>
        </ThemeProvider>
      </html>
    </ReactQueryProvider>
  )
}
