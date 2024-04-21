import { Svg } from '@/helpers'
import { motion } from 'framer-motion'
import Link from 'next/link'

import s from './styles.module.scss'
import { useLang } from '@/hooks'

export const ViewButton = () => {
  const data = useLang()?.hero

  return (
    <div className={s.button}>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5, duration: 1.5, type: "spring", stiffness: 40 }}
      >
        <Link href='/projects'>{data?.view}</Link>
      </motion.div>
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 40 }}
      >
        <Link href='#best'>{data?.cases}</Link>
      </motion.div>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5, duration: 1.5, type: "spring", stiffness: 40 }}
      >
        <Link href='/projects'><Svg type='arrow-corner-up' /></Link>
      </motion.div>
    </div>
  )
}