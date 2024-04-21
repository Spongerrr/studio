import { StoreContext } from '@/helpers'
import { Footer, Header } from '@/components'
import { montserrat, unbounded } from './fonts'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.scss'

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  keywords: 'Penguin Studio, веб-разработка, мобильные приложения, дизайн сайтов, фирменный стиль, IT-решения, разработка ПО, технологическое партнерство, инновации в бизнесе',
  description: 'Penguin Studio, веб-разработка, мобильные приложения, дизайн сайтов, фирменный стиль, IT-решения, разработка ПО, технологическое партнерство, инновации в бизнесе'
}

const root = 'root'

interface Props {
  children: React.ReactNode
}

const RootLayout = (({ children }: Props) => {

  return (
    <StoreContext>
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
    </StoreContext>
  )
})

export default RootLayout