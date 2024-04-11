import { Svg } from '@/helpers'
import { motion } from 'framer-motion'
import Link from 'next/link'

import s from './styles.module.scss'

export const ViewButton = () => {
  return (
    <div className={s.button}>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5, duration: 1.5, type: "spring", stiffness: 120 }}
      >
        <Link href='/projects'>Смотреть</Link>
      </motion.div>
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 60 }}
      >
        <Link href='/projects'>Лучшие кейсы</Link>
      </motion.div>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 60 }}
      >
        <Link href='/projects'><Svg type='arrow-corner-up' /></Link>
      </motion.div>
    </div>
  )
}