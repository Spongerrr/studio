'use client'

import { Container, Svg } from '@/helpers'
import { color, motion } from 'framer-motion'

import s from './styles.module.scss'
import { useLang } from '@/hooks'

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

const animateItem = {
  hidden: {
    y: 20,
    opacity: 0,
    color: '#252525'
  },
  visible: {
    y: 0,
    opacity: 1,
    color: "#ffffff"
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

const stackAnimation = {
  hidden: {
    color: '#252525',
  },
  whileInView: {
    color: '#fff',
  }
}

export const Skills = () => {
  const data = useLang()?.stack

  return (
    <motion.div
      className={s.skills}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    >
      <Container size='default'>
        <motion.h2 variants={titleAnimation}>{data?.title}</motion.h2>
        <div className={s.wrapper}>
          {data?.items.map((item) => (
            <div key={item.title}>
              <div className={s.title}>
                <Svg type='menu' />
                <strong>{item.title}</strong>
              </div>
              <motion.div
                className={s.items}
                initial='hidden'
                whileInView='visible'
                variants={container}
              >
                {item.items.map((skill) => (
                  <div key={skill}>
                    <motion.p variants={animateItem}>{skill}</motion.p>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  )
}