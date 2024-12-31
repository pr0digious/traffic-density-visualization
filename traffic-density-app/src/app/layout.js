import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Separate metadata and viewport exports
export const metadata = {
  title: 'Bay Area Traffic Density Map',
  description: 'Real-time traffic density visualization for Bay Area counties',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}