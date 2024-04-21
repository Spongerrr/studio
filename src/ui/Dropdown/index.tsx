'use client'

import { useState } from 'react'
import { Svg } from '@/helpers'
import { AnimatePresence, motion } from 'framer-motion'
import locales from '@public/locales/ru.json'

import s from './styles.module.scss'

interface DropdownProps {
  select: string | null
  setSelect: (e: string) => void
  label: string | undefined
}

export const Dropdown: React.FC<DropdownProps> = ({ select, setSelect, label }) => {
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
        {label}
        <p>*</p>
      </label>
      <div className={s.dropdown}>
        <input
          type='text'
          value={select || ''}
          onClick={toggleDropdown}
          readOnly
        />
        <AnimatePresence>
          {isOpen &&
            <motion.div
              className={s.wrapper}
              initial={{ opacity: 0, y: '-10px' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-10px' }}
            >
              {items.map((item, index) => (
                <div key={item.id} className={s.item}>
                  <div onClick={() => toggleCategory(index)} className={s.title}>
                    <Svg type='menu' />
                    <strong>{item.title}</strong>
                  </div>
                  <AnimatePresence>
                    {item.isOpen &&
                      <motion.div
                        initial={{ opacity: 0, y: '-10px' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10px' }}
                      >
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
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}
