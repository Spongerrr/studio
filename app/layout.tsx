import { Header } from '@/components'
import { montserrat, unbounded } from './fonts'

import '@/styles/globals.scss'

const root = 'root'

const RootLayout = (({ children }: { children: React.ReactNode }) => {

  return (
    <html
      className={`${root} ${montserrat.variable} ${unbounded.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
})

export default RootLayout