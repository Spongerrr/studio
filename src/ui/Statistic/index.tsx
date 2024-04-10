'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import s from './styles.module.scss'

interface StatisticProps {
  team: number
  projects: number
  experience: number
}

export const Statistic: React.FC<StatisticProps> = ({ team, projects, experience }) => {
  const initialStyle = {
    rotateX: 180
  }

  const animateStyle = {
    rotateX: 360,
    transition: {
      duration: 3.5
    }
  }

  const [animatedValues, setAnimatedValues] = useState({
    team: 0,
    projects: 0,
    experience: 0,
  });

  useEffect(() => {
    const duration = Math.max(team, projects, experience) * 3000
    const maxCount = Math.max(team, projects, experience);
    const initialIncrementInterval = 30

    let currentIncrementInterval = initialIncrementInterval
    let currentCount = 0

    const interval = setInterval(() => {
      currentCount++
      if (currentCount <= maxCount) {
        setAnimatedValues(prevValues => ({
          team: prevValues.team < team ? prevValues.team + 1 : team,
          projects: prevValues.projects < projects ? prevValues.projects + 1 : projects,
          experience: prevValues.experience < experience ? prevValues.experience + 1 : experience,
        }))
      } else {
        setAnimatedValues(prevValues => ({
          team: Math.min(team, Math.floor(Math.sqrt(prevValues.team ** 2 + 1))),
          projects: Math.min(projects, Math.floor(Math.sqrt(prevValues.projects ** 2 + 1))),
          experience: Math.min(experience, Math.floor(Math.sqrt(prevValues.experience ** 2 + 1))),
        }))
      }
    }, currentIncrementInterval)

    setTimeout(() => clearInterval(interval), duration + initialIncrementInterval)

    return () => clearInterval(interval)
  }, [team, projects, experience])

  return (
    <div className={s.statistic}>
      <div>
        <motion.span style={{...initialStyle}} animate={animateStyle}>{animatedValues.team}</motion.span>
        <p>человек в команде</p>
      </div>
      <div>
      <motion.span style={{...initialStyle}} animate={animateStyle}>{animatedValues.projects}</motion.span>
        <p>реализованных проектов</p>
      </div>
      <div>
      <motion.span style={{...initialStyle}} animate={animateStyle}>{animatedValues.experience}</motion.span>
        <p>года эффективной работы</p>
      </div>
    </div>
  )
}