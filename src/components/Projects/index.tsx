'use client'

import { Container } from '@/helpers'
import { Project } from '@/ui'
import { motion } from 'framer-motion'
import locales from '@public/locales/ru.json'

import s from './styles.module.scss'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}


export const Projects = () => {
  return (
    <Container size='stretch'>
      <motion.div className={s.projects} variants={container} initial='hidden' animate='visible'>
        <h2>Проекты</h2>
        <div className={s.content}>
          {locales.projects.items.map((project) => (
            <Project key={project.id} project={project} type='default' />
          ))}
        </div>
      </motion.div>
    </Container>
  )
}