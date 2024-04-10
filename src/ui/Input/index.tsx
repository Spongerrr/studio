import s from './styles.module.scss'

interface InputProps {
  type: 'text' | 'email' | 'tel' | 'submit'
  value: string
  label: string
  onChange: (e: string) => void
}

export const Input: React.FC<InputProps> = ({ type, value, label, onChange }) => {
  return (
    <div className={s.input}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}