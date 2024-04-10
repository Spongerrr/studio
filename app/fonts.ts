import { Montserrat, Unbounded } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const unbounded = Unbounded({
  subsets: ['cyrillic'],
  variable: '--font-unbounded',
  display: 'swap'
})