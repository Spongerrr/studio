'use client'

import { Container } from '@/helpers'
import { IProject } from '@/models'


import s from './styles.module.scss'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  project: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [item, setItem] = useState<IProject | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://653e9f129e8bd3be29df9226.mockapi.io/items')
        if (!res.ok) {
          throw new Error('Failed to fetch projects')
        }
        const projects: IProject[] = await res.json()
        const p = projects.find((el) => el.path === project)
        setItem(p)
      } catch (error) {
        console.error('Error fetching: ', error)
      }
    }

    fetchData()
  }, [project])

  return (
    <div className={s.project}>
      {item ? (
        <Container size='default'>
        <div className={s.content}>
          <div>
            <Image
              src={`/projects/${item?.path}/preview.png`}
              alt={'alt'}
              width={700}
              height={500}
            />
          </div>
          <div className={s.text}>
            <h2>{item?.name}</h2>
            <div>
              <strong>24</strong>
              <p>часа на проект</p>
            </div>
            <div>
              <strong>3</strong>
              <p>разработчика</p>
            </div>
            <div>
              <strong>2</strong>
              <p>дизайнера</p>
            </div>
            <div>
              <p>{item?.description}</p>
            </div>
            <div className={s.stack}>
              {item.stack.map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
      ) : (
        <h1>Проект не найден</h1>
      )}
    </div>
  )
}
