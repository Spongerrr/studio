'use client'

import { Container } from '@/helpers'
import { Statistic, ViewButton } from '@/ui'
import { motion } from 'framer-motion'
import { IProject } from '@/models'
import projects from '@/data/projects.json'

import s from './styles.module.scss'

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

export const Hero = () => {
  const text = 'Разработка решений любой сложности для Вашего бизнеса'
  
  return (
    <Container size='stretch'>
      <div className={s.hero}>
        <div className={s.content}>
          <motion.h1 variants={variants} initial='hidden' animate='visible'>
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <ViewButton />
          <Statistic team={25} projects={projects.length} experience={126} />
        </div>
      </div>
    </Container>
  )
}