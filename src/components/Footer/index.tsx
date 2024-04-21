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
      <div className={s.socials}>
        <Link href='#'>
          <img src='/socials/be.png' alt='behance' />
        </Link>
        <Link href='https://www.linkedin.com/company/penguin-studio-development/'>
          <img src='/socials/in.png' alt='linkedin' />
        </Link>
        <Link href='https://www.instagram.com/penguin_studio_development?igsh=YWNsNjY1bGNtMDl1&utm_source=qr'>
          <img src='/socials/ig.png' alt='instagram' />
        </Link>
      </div>
      <AnimatePresence>
        {isVisible &&
          <motion.div
            className={s.socialsActive}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <Link href='#'>
              <img src='/socials/be.png' alt='behance' />
            </Link>
            <Link href='https://www.linkedin.com/company/penguin-studio-development/'>
              <img src='/socials/in.png' alt='linkedin' />
            </Link>
            <Link href='https://www.instagram.com/penguin_studio_development?igsh=YWNsNjY1bGNtMDl1&utm_source=qr'>
              <img src='/socials/ig.png' alt='instagram' />
            </Link>
          </motion.div>
        }
      </AnimatePresence>
      <button
        className={isVisible ? s.buttonActive : s.button}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <Svg type='close' /> : <Svg type='email' />}
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
                  <Link href='mailto:corp@penguin-studio.tech.com'>corp@penguin-studio.tech</Link>
                </div>
                <div>
                  <Link href='tel:+41798272164'>+41 79 827 21 64</Link>
                </div>
              </div>
            </Container>
          </motion.footer>
        }
      </AnimatePresence>
    </div >
  )
}