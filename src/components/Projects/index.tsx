'use client'

import { useState } from 'react'
import { Container, Modal, Svg } from '@/helpers'
import { Project } from '@/ui'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '@/data/projects.json'
import services from '@/data/services.json'
import stack from '@/data/stack.json'

import s from './styles.module.scss'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}


export const Projects = () => {
  const [filterServices, setFilterServices] = useState<string[]>([])
  const [filterStack, setFilterStack] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isVisibleStack, setIsVisibleStack] = useState(false)
  const [isVisibleService, setIsVisibleService] = useState(false)
  const [itemVisibility, setItemVisibility] = useState<{ [key: string]: boolean }>(
    services.reduce((acc: any, item: any) => {
      acc[item.id] = false;
      return acc;
    }, {})
  )

  const handleFilterChangeServices = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    if (checked) {
      setFilterServices((prevFilter) => [...prevFilter, value])
      setSelectedCategories((prevCategories) => [...prevCategories, value])
    } else {
      setFilterServices((prevFilter) => prevFilter.filter((item) => item !== value))
      setSelectedCategories((prevCategories) => prevCategories.filter((item) => item !== value))
    }
  }

  const handleFilterChangeStack = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    if (checked) {
      setFilterStack((prevFilter) => [...prevFilter, value])
      setSelectedCategories((prevCategories) => [...prevCategories, value])
    } else {
      setFilterStack((prevFilter) => prevFilter.filter((item) => item !== value))
      setSelectedCategories((prevCategories) => prevCategories.filter((item) => item !== value))
    }
  }


  const handleFilterClear = () => {
    setFilterStack([])
    setFilterServices([])
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
      <motion.div
        className={s.projects}
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <h2>Проекты</h2>
        <div className={s.buttons}>
          <button onClick={() => setIsVisibleService(!isVisibleService)}>Услуга</button>
          <button onClick={() => setIsVisibleStack(!isVisibleStack)}>Стек</button>
        </div>
        <div className={s.content}>
          {projects
            .filter((project) => filterStack.length === 0 || project.stack.some((tech) => filterStack.includes(tech)))
            .filter((project) => filterServices.length === 0 || project.service.some((tech) => filterServices.includes(tech)))
            .map((project) => (
              <Project key={project.id} project={project} type='default' />
            ))}
        </div>
        <Modal
          isOpen={isVisibleService}
          onClose={() => setIsVisibleService(false)}
        >
          <div className={s.filterWrapper}>
            <h3>Услуга</h3>
            <div className={s.wrapper}>
              <div className={s.categories}>
                {services.map((item) => (
                  <div key={item.id} className={s.item}>
                    <strong
                      className={itemVisibility[item.id] ? s.itemTitle : s.itemTitleActive}
                      onClick={() => toggleItemVisibility(item.id)}
                    >
                      <Svg type='menu' />
                      {item.title}
                    </strong>
                    <AnimatePresence>
                      {itemVisibility[item.id] && (
                        <motion.div
                          className={s.boxes}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.categories.map((cat) => (
                            <label key={cat}>
                              <input
                                type='checkbox'
                                value={cat}
                                checked={filterServices.includes(cat)}
                                onChange={handleFilterChangeServices}
                              />
                              {cat}
                            </label>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className={s.selected}>
                <span className={s.selectedTitle}>Выбранные услуги</span>
                <div className={s.selectedCategories}>
                  {selectedCategories.map((cat) => (
                    <motion.p
                      key={cat}
                      className={s.selectedCategory}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                    >
                      {cat}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.buttons}>
              <button onClick={() => setIsVisibleService(false)}>{filterServices.length === 0 ? 'Скрыть' : 'Применить'}</button>
              <button onClick={() => handleFilterClear()}>Сбросить</button>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isVisibleStack}
          onClose={() => setIsVisibleStack(false)}
        >
          <div className={s.filterWrapper}>
            <h3>Стек</h3>
            <div className={s.wrapper}>
              <div className={s.categories}>
                {stack.map((item) => (
                  <div key={item.id} className={s.item}>
                    <strong
                      className={itemVisibility[item.id] ? s.itemTitle : s.itemTitleActive}
                      onClick={() => toggleItemVisibility(item.id)}
                    >
                      <Svg type='menu' />
                      {item.title}
                    </strong>
                    <AnimatePresence>
                      {itemVisibility[item.id] && (
                        <motion.div
                          className={s.boxes}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.skills.map((skill) => (
                            <label key={skill}>
                              <input
                                type='checkbox'
                                value={skill}
                                checked={filterStack.includes(skill)}
                                onChange={handleFilterChangeStack}
                              />
                              {skill}
                            </label>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className={s.selected}>
                <span className={s.selectedTitle}>Выбранный стек</span>
                <div className={s.selectedCategories}>
                  {selectedCategories.map((cat) => (
                    <motion.p
                      key={cat}
                      className={s.selectedCategory}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}>
                      {cat}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.buttons}>
              <button onClick={() => setIsVisibleStack(false)}>{filterStack.length === 0 ? 'Скрыть' : 'Применить'}</button>
              <button onClick={() => handleFilterClear()}>Сбросить</button>
            </div>
          </div>
        </Modal>
      </motion.div >
    </Container >
  )
}