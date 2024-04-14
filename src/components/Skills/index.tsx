'use client'

import { Container, Svg } from '@/helpers'
import { motion } from 'framer-motion'
import locales from '@public/locales/ru.json'

import s from './styles.module.scss'

const blocksAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const titleAnimation = {
  hidden: {
    x: 500,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export const Skills = () => {
  return (
    <motion.div
      className={s.skills}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    >
      <Container size='default'>
        <motion.h2 variants={titleAnimation}>{locales.skills.title}</motion.h2>
        <div className={s.wrapper}>
          {locales.skills.items.map((item) => (
            <div key={item.id}>
              <div className={s.title}>
                <Svg type='menu' />
                <strong>{item.title}</strong>
              </div>
              <div className={s.items}>
                {item.skills.map((skill) => (
                  <div key={skill}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  )
}