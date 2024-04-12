'use client'

import { Container, Svg } from '@/helpers'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import s from './styles.module.scss'
import Link from 'next/link'

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={s.wrapper}>
      <AnimatePresence>
        {!isVisible &&
          <motion.button
            className={s.button}
            onClick={() => setIsVisible(!isVisible)}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
          >
            <Svg type='email' />
          </motion.button>}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible &&
          <motion.footer
            className={s.footer}
            initial={{ opacity: 0, left: '100vw' }}
            animate={{ opacity: 1, left: 0 }}
            exit={{ opacity: 0, left: '100vw' }}
          >
            <Container size='stretch'>
              <div className={s.content}>
                <div>
                  <Link href='mailto:hello@penguinstudio.com'>hello@penguinstudio.com</Link>
                </div>
                <div>
                  <Link href='tel:+41798272164'>+4-(179)-827-21-64</Link>
                </div>
              </div>
            </Container>
          </motion.footer>
        }
      </AnimatePresence>
    </div>
  )
}