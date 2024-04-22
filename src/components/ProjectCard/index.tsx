'use client'

import { CaseHandler, Container } from '@/helpers'
import { motion } from 'framer-motion'
import { Button, Logo } from '@/ui'
import projects from '@/data/projects.json'

import s from './styles.module.scss'
import { useLang } from '@/hooks'
import { observer } from 'mobx-react-lite'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      stiffnes: 150
    }
  }
}

const animation = {
  hidden: { x: 1000, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

const image = {
  hidden: { y: 1000, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}



interface ProjectCardProps {
  project: string
}

export const ProjectCard: React.FC<ProjectCardProps> = observer(({ project }) => {
  const data = useLang()?.projects
  const view = useLang()?.hero.view

  const item = data?.items.find((p) => p.path === project)

  return (
    <div className={s.project}>
      {item ? (
        <Container size='stretch'>
          <motion.div className={s.desktop} initial='hidden' animate='visible' variants={container}>
            <motion.div variants={image} className={s.images}>
              {item.images.map((image) => (
                <img src={`/projects/${item.path}/${image}`} alt='image'></img>
              ))}
            </motion.div>
            <div className={s.text}>
              <motion.h2 variants={animation}>{item?.name}</motion.h2>
              <motion.div variants={animation}>
                <span>{item.statistic.hours}</span>
                <p>{data?.stat_1}</p>
              </motion.div>
              <motion.div variants={animation}>
                <span>{item.statistic.dev}</span>
                <p>{data?.stat_2}</p>
              </motion.div>
              <motion.div variants={animation}>
                <span>{item.statistic.des}</span>
                <p>{data?.stat_3}</p>
              </motion.div>
              <motion.div variants={animation}>
                <p>{item?.task}</p>
              </motion.div>
              <motion.div variants={animation} className={s.stack}>
                {item.stack.map((i) => (
                  <p key={i}>{i}</p>
                ))}
              </motion.div>
              {item.url &&
              <motion.div variants={animation}>
                <Button br='soft' color='primary' href={item.url} children={view}/>
              </motion.div>
              }
            </div>
          </motion.div>
          <motion.div
            className={s.mobile}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ delay: 0, duration: 0, type: "spring", stiffness: 20 }}
          >
            <h2>{item?.name}</h2>
            <img
              src={`/projects/${item?.path}/preview.png`}
              alt={'alt'}
            />
            <div className={s.text}>
              <div >
                <span>{item.statistic.hours}</span>
                <p>{`${CaseHandler('hour', item.statistic.hours)} на проект`}</p>
              </div>
              <div>
                <span>{item.statistic.dev}</span>
                <p>{CaseHandler('dev', item.statistic.dev)}</p>
              </div>
              <div>
                <span>{item.statistic.des}</span>
                <p>{CaseHandler('des', item.statistic.des)}</p>
              </div>
            </div>
            <img
              src={`/projects/${item?.path}/1.png`}
              alt={'alt'}
            />
            <div>
              <p>{item?.task}</p>
            </div>
            <img
              src={`/projects/${item?.path}/2.png`}
              alt={'alt'}
            />
            <div className={s.stack}>
              {item.stack.map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
          </motion.div>
        </Container>
      ) : (
        <div className={s.error}>
          <h1>Похоже такого проекта не существует...</h1>
          <Logo type='default' />
        </div>
      )}
    </div>
  )
})
