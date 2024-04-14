'use client'

import { useEffect } from 'react'

import s from './styles.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

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
    <>
      {isOpen && (
        <div className={s.background} onClick={handleBackgroundClick}>
          <div className={s.content}>{children}</div>
        </div>
      )}
    </>
  )
}