import s from './styles.module.scss'

interface InputProps {
  type: 'text' | 'email' | 'tel' | 'submit'
  id: string
  value: string
  required: boolean
  label: string
  onChange: (e: string) => void
}

export const Input: React.FC<InputProps> = ({ type, id, value, label, required, onChange }) => {
  return (
    <div className={s.input}>
      <label htmlFor={id}>
        {label}
        <p>{required ? '*' : ''}</p>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}