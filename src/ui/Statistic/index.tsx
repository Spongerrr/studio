'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import s from './styles.module.scss'
import { useLang } from '@/hooks'

interface StatisticProps {
  team: number
  projects: number
  experience: number
}

export const Statistic: React.FC<StatisticProps> = ({ team, projects, experience }) => {
  const langs = useLang()
  const data = langs?.hero

  
  return (
    <div className={s.statistic}>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5, duration: 1.5, type: "spring", stiffness: 40 }}
      >
        <span>{data?.stat_2.num}</span>
        <p>{data?.stat_2.text}</p>
      </motion.div>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 40 }}
      >
        <span>{data?.stat_1.num}</span>
        <p>{data?.stat_1.text}</p>
      </motion.div>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 40 }}
      >
        <span>{data?.stat_3.num}</span>
        <p>{data?.stat_3.text}</p>
      </motion.div>
    </div>
  )
}