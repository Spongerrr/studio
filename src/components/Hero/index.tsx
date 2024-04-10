'use client'

import { Container } from '@/helpers'
import s from './styles.module.scss'
import { Statistic, ViewButton } from '@/ui'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <Container size='stretch'>
      <div className={s.hero}>
        <div className={s.content}>
          <motion.h1>
            Разработка решений любой сложности для Вашего бизнеса
          </motion.h1>
          <ViewButton />
          <Statistic team={77} projects={30} experience={2} />
        </div>
      </div>
    </Container>
  )
}