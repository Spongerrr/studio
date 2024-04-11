'use client'

import { useState } from 'react'
import { Container, Svg } from '@/helpers'
import { Project } from '@/ui'
import { motion, AnimatePresence } from 'framer-motion'
import data from '@/helpers/data.json'
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
  const [filter, setFilter] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [itemVisibility, setItemVisibility] = useState<{ [key: string]: boolean }>(
    locales.services.items.reduce((acc: any, item: any) => {
      acc[item.id] = false;
      return acc;
    }, {})
  )

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    if (checked) {
      setFilter((prevFilter) => [...prevFilter, value])
      setSelectedCategories((prevCategories) => [...prevCategories, value])
    } else {
      setFilter((prevFilter) => prevFilter.filter((item) => item !== value))
      setSelectedCategories((prevCategories) => prevCategories.filter((item) => item !== value))
    }
  }

  const handleFilterClear = () => {
    setFilter([])
    setSelectedCategories([])
  }

  const toggleItemVisibility = (itemId: string) => {
    setItemVisibility((prevVisibility) => ({
      ...prevVisibility,
      [itemId]: !prevVisibility[itemId]
    }));
  };


  return (
    <Container size='stretch'>
      <motion.div className={s.projects} variants={container} initial='hidden' animate='visible'>
        <h2>Проекты</h2>
        <button onClick={() => setIsVisible(!isVisible)}>Фильтр</button>
        <div className={s.content}>
          {data
            .filter((project) => filter.length === 0 || project.stack.some((tech) => filter.includes(tech)))
            .map((project) => (
              <Project key={project.id} project={project} type='default' />
            ))}
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className={s.filterBackground}
              onClick={() => setIsVisible(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={s.filter}
                onClick={(e) => e.stopPropagation()}
                initial={{ top: 0 }}
                animate={{ top: '50%' }}
                exit={{ top: 0 }}
              >
                <h3>Выберите способ сортировки</h3>
                <div className={s.modal}>
                  <div className={s.modalContent}>
                    {locales.skills.items.map((item) => (
                      <div key={item.id} className={s.item}>
                        <strong
                          onClick={() => toggleItemVisibility(item.id)}
                          className={itemVisibility[item.id] ? s.strong : s.strongActive}
                        >
                          <Svg type='menu' />
                          {item.title}
                        </strong>
                        <AnimatePresence>
                          {itemVisibility[item.id] &&
                            <motion.div
                              className={s.blocks}
                              key={item.id}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              {item.skills.map((category) => (
                                <label key={category}>
                                  <input
                                    type='checkbox'
                                    value={category}
                                    checked={filter.includes(category)}
                                    onChange={handleFilterChange}
                                  />
                                  {category}
                                </label>
                              ))}
                            </motion.div>
                          }
                        </AnimatePresence>
                      </div>

                    ))}
                  </div>
                  <div className={s.selected}>
                    <span>Выбранные категории</span>
                    <div className={s.selectedItems}>
                      <AnimatePresence>
                        {selectedCategories.map((c) => (
                          <motion.p
                            key={c}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                          >
                            {c}
                          </motion.p>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <div className={s.buttons}>
                  <button onClick={() => setIsVisible(false)}>Скрыть</button>
                  <button onClick={() => handleFilterClear()}>Сбросить</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  )
}