'use client'

import { useEffect, useRef } from 'react'

import s from './styles.module.scss'

interface TextareaProps {
  value: string
  onChange: (value: string) => void
  label: string | undefined
}

export const Textarea: React.FC<TextareaProps> = ({ value, onChange, label }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const setHeight = () => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    textarea.addEventListener('input', setHeight)

    return () => {
      textarea.removeEventListener('input', setHeight)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <label>{label}</label>
      <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      className={s.textarea}
    />
    </div>
  )
}