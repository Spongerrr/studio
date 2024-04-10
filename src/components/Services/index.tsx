'use client'

import { useState } from 'react'
import { Container, Svg } from '@/helpers'
import { Button, Logo } from '@/ui'
import { CSSTransition } from 'react-transition-group'
import locales from '@public/locales/ru.json'

import s from './styles.module.scss'

export const Services = () => {
  const [items, setItems] = useState(locales.services.items)

  const toggleCategory = (index: number) => {
    const updatedItems = [...items]
    updatedItems[index].isOpen = !updatedItems[index].isOpen
    setItems(updatedItems)
  }

  return (
    <Container size='default' >
      <div className={s.services}>
        <h2>{locales.services.title}</h2>
        <div className={s.content}>
          <div className={s.desktop}>
            {locales.services.items.map((item, index) => (
              <div key={item.id} className={s.items}>
                <div className={s.title}>
                  <Svg type='menu' />
                  <strong>{item.title}</strong>
                </div>
                <div className={s.blocks}>
                  {item.categories.map((category) => (
                    <button key={category}>{category}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={s.mobile}>
            {locales.services.items.map((item, index) => (
              <div key={item.id} className={s.items}>
                <div className={s.title} onClick={() => toggleCategory(index)}>
                  <Svg type='menu' />
                  <strong>{item.title}</strong>
                </div>
                <CSSTransition
                  in={item.isOpen}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                  classNames={{
                    enterActive: s.enter,
                    exitActive: s.exit
                  }}
                >
                  <div className={s.blocks}>
                    {item.categories.map((category) => (
                      <button key={category}>{category}</button>
                    ))}
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
          <div className={s.info}>
            <p>Благодаря большой команде мы можем создавать любой IT продукт от 0 до идеального финала</p>
            <p> Возможность отслеживать выполнение этапов проекта в реальном времени в Trello</p>
            <Logo type='default' />
            <p>Ознакомьтесь с нашим опытом</p>
            <Button
              href='/portfolio'
              color='primary'
              br='soft'
            >
              Портфолио
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}