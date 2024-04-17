import { Footer, Header } from '@/components'
import { montserrat, unbounded } from '../fonts'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.scss'

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  keywords: 'Penguin Studio, веб-разработка, мобильные приложения, дизайн сайтов, фирменный стиль, IT-решения, разработка ПО, технологическое партнерство, инновации в бизнесе',
  description: 'Penguin Studio, веб-разработка, мобильные приложения, дизайн сайтов, фирменный стиль, IT-решения, разработка ПО, технологическое партнерство, инновации в бизнесе',
  icons: {
    icon: '/icon.png',
  }
}

const root = 'root'

const RootLayout = (({ children }: { children: React.ReactNode }) => {

  return (
    <html
      className={`${root} ${montserrat.variable} ${unbounded.variable}`}
      lang='ru'
    >
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
})

export default RootLayout