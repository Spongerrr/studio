import PhoneInput from 'react-phone-number-input'

import s from './styles.module.scss'
import 'react-phone-number-input/style.css'
import './phone.scss'

interface InputProps {
  type: 'text' | 'email' | 'tel' | 'submit'
  id: string
  value: string
  required: boolean
  label: string | undefined
  onChange: (e: string) => void
}

export const Input: React.FC<InputProps> = ({ type, id, value, label, required, onChange }) => {
  return (
    <div className={s.input}>
      <label htmlFor={id}>
        {label}
        <p>{required ? '*' : ''}</p>
      </label>
      {type !== 'tel' ? (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <PhoneInput
          className={s.phone}
          initialValueFormat='national'
          value={value || '+'}
          onChange={() => onChange(value)}
          limitMaxLength={true}
        />
      )}
    </div>
  )
}