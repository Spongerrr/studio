'use client'

import { useState } from 'react'
import { Svg } from '@/helpers'
import { CSSTransition } from 'react-transition-group'
import locales from '@public/locales/ru.json'

import s from './styles.module.scss'

interface DropdownProps {
  select: string | null
  setSelect: (e: string) => void
}

export const Dropdown: React.FC<DropdownProps> = ({ select, setSelect }) => {
  const [items, setItems] = useState(locales.services.items)
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const toggleDropdown = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      closeAll()
    }
  }

  const closeAll = () => {
    const updatedItems = items.map(item => ({ ...item, isOpen: false }))
    setItems(updatedItems)
  }

  const handleCategorySelect = (category: string) => {
    setSelect(category)
    setIsOpen(false)
  }

  const toggleCategory = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setItems(updatedItems);
  };

  return (
    <div>
      <label className={s.label}>
        Выберите категорию
        <p>*</p>
      </label>
      <div className={s.dropdown}>
        <input
          type='text'
          value={select || ''}
          onClick={toggleDropdown}
          readOnly
        />
        <CSSTransition
          in={isOpen}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames={{
            enterActive: s.enter,
            exitActive: s.exit
          }}
        >
          <div className={s.wrapper}>
            {items.map((item, index) => (
              <div key={item.id} className={s.item}>
                <div onClick={() => toggleCategory(index)} className={s.title}>
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
                  <div>
                    {item.categories.map((subItem, subIndex) => (
                      <div
                        key={subItem}
                        onClick={() => handleCategorySelect(subItem)}
                        className={`
                      ${s.subItem}
                      ${index === items.length - 1 && subIndex === item.categories.length - 1 ? s.lastSubItem : ''}`}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}
