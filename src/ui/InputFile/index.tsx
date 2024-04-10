import { useState } from 'react'

import s from './styles.module.scss'
import { Svg } from '@/helpers'

interface InputFileProps {
  fileName: string
  onChange: (file: File | null) => void
}

export const InputFile: React.FC<InputFileProps> = ({ fileName, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    onChange(file || null)
  }

  return (
    <div className={s.file}>
      <label>Загрузка дополнительных файлов</label>
      <input id='file' name='file' type='file' onChange={handleChange} />
      <label htmlFor='file'>
        <p>{fileName ? fileName : ''}</p>
        <Svg type='upload' />
      </label>
    </div>
  )
}