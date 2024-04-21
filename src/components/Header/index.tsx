'use client'

import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import { Logo } from '@/ui'
import { Container, Svg } from '@/helpers'
import { useLang, usePath } from '@/hooks'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { LangSwitch } from '@/ui/LangSwitch'
import { observer } from 'mobx-react-lite'

import s from './styles.module.scss'

export const Header = observer(() => {
  const [showMenu, setShowMenu] = useState(false)

  const path = usePathname()
  const title = usePath(path)
  const data = useLang()?.header

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
                <Link href={'/projects'}>{data?.projects}</Link>
              </li>
              <li>
                <Link href={'/contacts'}>{data?.contacts}</Link>
              </li>
              <li>
                <LangSwitch setShowMenu={setShowMenu} />
              </li>
            </ul>
          </nav>
          <nav className={s.mobile}>
            <button
              className={showMenu ? s.burgerWhite : s.burger}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <Svg type='close' /> : <Svg type='burger' />}
            </button>
            <CSSTransition
              in={showMenu}
              timeout={500}
              mountOnEnter
              unmountOnExit
              classNames={{
                enterActive: s.enter,
                exit: s.exit
              }}
            >
              <ul>
                <li>
                  <Link href='/projects' onClick={() => setShowMenu(false)}>
                    {data?.projects}
                  </Link>
                </li>
                <li>
                  <Link href='/contacts' onClick={() => setShowMenu(false)}>
                    {data?.contacts}
                  </Link>
                </li>
                <li className={s.switcher}>
                  <LangSwitch setShowMenu={setShowMenu} />
                </li>
              </ul>
            </CSSTransition>
          </nav>
        </div>
      </Container>
    </header>
  )
})