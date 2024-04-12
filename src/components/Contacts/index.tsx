'use client'

import { useState } from 'react'
import { Dropdown, Input, InputFile, Logo, Textarea } from '@/ui'
import { Container, SendMessage } from '@/helpers'
import { IForm } from '@/models'
import { motion, AnimatePresence } from 'framer-motion'

import s from './styles.module.scss'

export const Contacts = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [sended, setSended] = useState(false)
  const [form, setForm] = useState<IForm>({
    select: null,
    name: '',
    email: '',
    tel: '',
    text: '',
    file: null
  })

  const handleChange = (key: keyof IForm, value: string | File | null) => {
    setForm(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const requiredFields: (keyof IForm)[] = ['select', 'name', 'email', 'tel']
    const dataErrors: string[] = []

    requiredFields.forEach(field => {
      if (!form[field]) {
        dataErrors.push(`${field}`)
      }
    })

    if (dataErrors.length > 0) {
      setErrors(dataErrors)
    } else {
      SendMessage(form)
      setSended(true)
      setErrors([])
    }
  }

  return (
    <Container size='default'>
      <div className={s.contacts}>
        <h2>{!sended ? 'Свяжитесь с нами' : 'Остались вопросы?'}</h2>
        <div className={s.content}>
          <AnimatePresence>
            {!sended &&
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Dropdown
                  select={form.select}
                  setSelect={(value) => handleChange('select', value)}
                />
                <Input
                  id='name'
                  label='Имя'
                  type='text'
                  value={form.name}
                  onChange={(value) => handleChange('name', value)}
                  required={true}
                />
                <Input
                  id='email'
                  label='Email'
                  type='email'
                  value={form.email}
                  onChange={(value) => handleChange('email', value)}
                  required={true}
                />
                <Input
                  id='phone'
                  label='Телефон'
                  type='tel'
                  value={form.tel}
                  onChange={(value) => handleChange('tel', value)}
                  required={true}
                />
                <Textarea
                  value={form.text}
                  onChange={(value) => handleChange('text', value)}
                />
                <InputFile
                  fileName={form.file ? form.file.name : ''}
                  onChange={(value) => handleChange('file', value)}
                />
                <AnimatePresence>
                  {errors.length > 0 &&
                    <motion.p
                      className={s.error}
                      initial={{ opacity: 0, x: '-100vw' }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: '-100vw' }}
                    >
                      Не заполнены обязательные поля. (Помечены звёздочкой)
                    </motion.p>
                  }
                </AnimatePresence>
                <button type='submit' >Отправить</button>
              </motion.form>
            }
          </AnimatePresence>
          <div className={s.info}>
            <div>
              <p>Давайте обсудим вашу идею</p>
              <strong>+41 76 1234567</strong>
              <strong>hello@penguinstudio.com</strong>
            </div>
            <Logo type='default' />
          </div>
        </div>
      </div>
    </Container>
  )
}