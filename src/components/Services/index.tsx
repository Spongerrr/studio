'use client'

import { useContext, useState } from 'react'
import { Container, Context, Svg } from '@/helpers'
import { Button, Logo } from '@/ui'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/hooks'
import { observer } from 'mobx-react-lite'

import s from './styles.module.scss'

const titleAnimation = {
  hidden: {
    x: -500,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}


export const Services = observer(() => {
  const { store } = useContext(Context)

  const data = useLang()?.services

  const initialState = data?.items.map((item) => ({
    ...item,
    isOpen: false
  }))

  // @ts-ignore
  const [items, setItems] = useState(data.items)

  const toggleCategory = (index: number) => {
    const updatedItems = [...items]
    updatedItems[index].isOpen = !updatedItems[index].isOpen
    setItems(updatedItems)
  }

  return (
    <Container size='default' >
      <motion.div
        className={s.services}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2 }}
      >
        <motion.h2 variants={titleAnimation}>{data?.title}</motion.h2>
        <div className={s.content}>
          <div className={s.desktop}>
            {data?.items.map((item) => (
              <div key={item.title} className={s.items}>
                <div className={s.title}>
                  <Svg type='menu' />
                  <strong>{item.title}</strong>
                </div>
                <div className={s.blocks}>
                  {item.list.map((category) => (
                    <button key={category}>{category}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={s.mobile}>
            {data?.items.map((item, index) => (
              <div key={item.title} className={s.items}>
                <div className={!item.isOpen ? s.title : s.titleActive} onClick={() => toggleCategory(index)}>
                  <Svg type='menu' />
                  <strong>{item.title}</strong>
                </div>
                <AnimatePresence>
                  {item.isOpen &&
                    <motion.div
                      className={s.blocks}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {item.list.map((category) => (
                        <button key={category}>{category}</button>
                      ))}
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className={s.info}>
            <p>{data?.text.t_1}</p>
            <p>{data?.text.t_2}</p>
            <Logo type='default' />
            <p>{data?.text.t_3}</p>
            <Button
              href='/projects'
              color='primary'
              br='soft'
            >
              {data?.text.button}
            </Button>
          </div>
        </div>
      </motion.div>
    </Container>
  )
})