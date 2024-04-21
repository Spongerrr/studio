'use client'

import { Container } from '@/helpers'
import { Statistic, ViewButton } from '@/ui'
import { motion } from 'framer-motion'

import s from './styles.module.scss'
import { useLang } from '@/hooks'
import { observer } from 'mobx-react-lite'

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.03
    }
  }
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export const Hero = observer(() => {

  const data = useLang()?.hero

  return (
    <Container size='stretch'>
      <div className={s.hero}>
        <div className={s.content}>
          <motion.h1 variants={variants} initial='hidden' animate='visible'>
            {data?.title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <ViewButton />
          <Statistic team={25} projects={34} experience={126} />
        </div>
      </div>
    </Container>
  )
})