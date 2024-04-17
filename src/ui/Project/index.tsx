'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IProject } from '@/models'
import { motion } from 'framer-motion'

import s from './styles.module.scss'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

interface ProjectProps {
  project: IProject
  type: 'slider' | 'default'
}

export const Project: React.FC<ProjectProps> = ({ project, type }) => {
  return (
    <motion.div
      variants={item}
      key={project.id}
      className={type === 'default' ? s.project : s.projectSlider}
    >
      <Link href={`/projects/${project.path}`} className={s.link}>
        <Image
          src={`/projects/${project.path}/preview.png`}
          alt={project.name}
          width={900}
          height={500}
          className={s.image}
        />
        <div className={s.text}>
          <h3>{project.name}</h3>
          <p>{project.task}</p>
        </div>
      </Link>
    </motion.div >
  )
}