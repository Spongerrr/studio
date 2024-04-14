'use client'

import { Container, Svg } from '@/helpers'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import s from './styles.module.scss'

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={s.wrapper}>
      <button
        className={s.button}
        onClick={() => setIsVisible(!isVisible)}
      >
        <Svg type='email' />
      </button>
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
                  <Link href='tel:+41798272164'>+41 (79) 827-21-64</Link>
                </div>
              </div>
            </Container>
          </motion.footer>
        }
      </AnimatePresence>
    </div >
  )
}