import { Svg } from '@/helpers'
import Link from 'next/link'

import s from './styles.module.scss'

export const ViewButton = () => {
  return (
    <div className={s.button}>
      <Link href='/projects'>Смотреть</Link>
      <Link href='/projects'>Лучшие кейсы</Link>
      <Link href='/projects'><Svg type='arrow-corner-up' /></Link>
    </div>
  )
}