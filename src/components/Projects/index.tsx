'use client'

import { useState } from 'react'
import { Container, Modal, Svg } from '@/helpers'
import { Project } from '@/ui'
import { motion, AnimatePresence } from 'framer-motion'

import s from './styles.module.scss'
import { useLang } from '@/hooks'
import { observer } from 'mobx-react-lite'
import { IProject } from '@/models'

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


export const Projects = observer(() => {
  const data = useLang()?.projects
  const services = useLang()?.services
  const stack = useLang()?.stack

  const [filterServices, setFilterServices] = useState<string[]>([])
  const [filterStack, setFilterStack] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isVisibleStack, setIsVisibleStack] = useState(false)
  const [isVisibleService, setIsVisibleService] = useState(false)
  const [itemVisibility, setItemVisibility] = useState<{ [key: string]: boolean }>(
    services?.items.reduce((acc: any, item: any) => {
      acc[item?.title] = false;
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

  const filteredProjects = data?.items
    .filter((project) => filterStack.length === 0 || project.stack.some((tech) => filterStack.includes(tech)))
    .filter((project) => filterServices.length === 0 || project.service.some((tech) => filterServices.includes(tech)))

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
        <h2>{data?.title}</h2>
        <div className={s.buttons}>
          <button onClick={() => setIsVisibleService(!isVisibleService)}>{data?.service_filter}</button>
          <button onClick={() => setIsVisibleStack(!isVisibleStack)}>{data?.stack_filter}</button>
        </div>
        <div className={s.content}>
          {filteredProjects && filteredProjects?.length !== 0 ? filteredProjects.map((project) => (
              <Project key={project.id} project={project} type='default' />
            ))
            :
            <span className={s.projectError}>{data?.not_found}</span>
            }
        </div>
        <Modal
          isOpen={isVisibleService}
          onClose={() => setIsVisibleService(false)}
        >
          <div className={s.filterWrapper}>
            <h3>Услуга</h3>
            <div className={s.wrapper}>
              <div className={s.categories}>
                {services?.items.map((item) => (
                  <div key={item.title} className={s.item}>
                    <strong
                      className={itemVisibility[item.title] ? s.itemTitle : s.itemTitleActive}
                      onClick={() => toggleItemVisibility(item?.title)}
                    >
                      <Svg type='menu' />
                      {item.title}
                    </strong>
                    <AnimatePresence>
                      {itemVisibility[item?.title] && (
                        <motion.div
                          className={s.boxes}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.list.map((cat) => (
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
                <span className={s.selectedTitle}>{data?.service_title}</span>
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
              <button onClick={() => setIsVisibleService(false)}>{filterServices.length === 0 ? data?.hide_filter : data?.apply_filter}</button>
              <button onClick={() => handleFilterClear()}>{data?.reset_filter}</button>
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
                {stack?.items.map((item) => (
                  <div key={item?.title} className={s.item}>
                    <strong
                      className={itemVisibility[item?.title] ? s.itemTitle : s.itemTitleActive}
                      onClick={() => toggleItemVisibility(item?.title)}
                    >
                      <Svg type='menu' />
                      {item.title}
                    </strong>
                    <AnimatePresence>
                      {itemVisibility[item?.title] && (
                        <motion.div
                          className={s.boxes}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.items.map((skill) => (
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
                <span className={s.selectedTitle}>{data?.service_title}</span>
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
              <button onClick={() => setIsVisibleStack(false)}>{filterStack.length === 0 ? data?.hide_filter : data?.apply_filter}</button>
              <button onClick={() => handleFilterClear()}>{data?.reset_filter}</button>
            </div>
          </div>
        </Modal>
      </motion.div >
    </Container >
  )
})