import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from './components/cursor/CustomCursor'
 
export const metadata: Metadata = {
  title: 'Eugen14 Portfolio',
  description: 'Personal portfolio showcasing projects and skills.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}