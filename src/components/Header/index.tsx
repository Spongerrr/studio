'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '@/ui'
import { Container, Svg } from '@/helpers'
import { usePath } from '@/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import s from './styles.module.scss'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const path = usePathname()
  const title = usePath(path)

  return (
    <header className={s.header}>
      <Container size='full'>
        <div className={s.content}>
          <div className={s.left}>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <Logo type={showMenu ? 'brand' : 'default'} />
            </Link>
            <strong className={s.dividor}>/</strong>
            <motion.p
              key={title}
              initial={{
                x: -500,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
            >
              {title}
            </motion.p>
          </div>
          <nav className={s.desktop}>
            <ul>
              <li>
                <Link href={'/projects'}>Проекты</Link>
              </li>
              <li>
                <Link href={'/contacts'}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <nav className={s.mobile}>
            <button
              className={showMenu ? s.burgerWhite : s.burger}
              onClick={() => setShowMenu(!showMenu)}
            >
              <Svg type='burger' />
            </button>
            <AnimatePresence>
              {showMenu && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <li>
                    <Link href='/projects' onClick={() => setShowMenu(false)}>
                      Проекты
                    </Link>
                  </li>
                  <li>
                    <Link href='/contacts' onClick={() => setShowMenu(false)}>
                      Контакты
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </Container>
    </header>
  )
}