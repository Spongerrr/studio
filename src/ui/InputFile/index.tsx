import { Svg } from '@/helpers'

import s from './styles.module.scss'

interface InputFileProps {
  fileName: string
  onChange: (file: File | null) => void
  label: string | undefined
}

export const InputFile: React.FC<InputFileProps> = ({ fileName, onChange, label }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    onChange(file || null)
  }

  return (
    <div className={s.file}>
      <label>{label}</label>
      <input id='file' name='file' type='file' onChange={handleChange} />
      <label htmlFor='file'>
        <p>{fileName ? fileName : ''}</p>
        <Svg type='upload' />
      </label>
    </div>
  )
}