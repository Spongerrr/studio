import Link from 'next/link'

import s from './styles.module.scss'

interface ButtonProps {
  href: string
  color: 'body' | 'primary'
  br: 'hard' | 'soft'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ href, color, br, children }) => {
  return (
    <Link
      href={href}
      className={color === 'body' ? s.body : s.primary}
      style={{borderRadius: br === 'hard' ? '8px' : '28px'}}
    >
      {children}
    </Link>
  )
}