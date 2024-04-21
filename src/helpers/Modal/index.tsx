'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import s from './styles.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children}) => {

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleBodyScroll = () => {
      if (isOpen) {
        document.body.classList.add('modal-active')
      } else {
        document.body.classList.remove('modal-active')
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    handleBodyScroll()

    return () => {
      document.removeEventListener('keydown', handleEscape)
      handleBodyScroll()
    }
  }, [isOpen, onClose])

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.background}
          onClick={handleBackgroundClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={s.content}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}