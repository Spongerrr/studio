'use client'

import { useState } from 'react'
import { Dropdown, Input, InputFile, Logo, Textarea } from '@/ui'
import { Container, SendMessage } from '@/helpers'
import { IForm } from '@/models'

import s from './styles.module.scss'

export const Contacts = () => {
  const [form, setForm] = useState<IForm>({
    select: null,
    name: '',
    email: '',
    tel: '',
    text: '',
    file: null
  })

  const handleChange = (key: keyof IForm, value: string | File |null) => {
    setForm(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    SendMessage(form)
  }

  return (
    <Container size='default'>
      <div className={s.contacts}>
        <h2>Свяжитесь с нами</h2>
        <div className={s.content}>
          <form onSubmit={handleSubmit}>
            <Dropdown select={form.select} setSelect={(value) => handleChange('select', value)} />
            <Input label='Имя' type='text' value={form.name} onChange={(value) => handleChange('name', value)} />
            <Input label='Email' type='email' value={form.email} onChange={(value) => handleChange('email', value)} />
            <Input label='Телефон' type='tel' value={form.tel} onChange={(value) => handleChange('tel', value)} />
            <Textarea value={form.text} onChange={(value) => handleChange('text', value)} />
            <InputFile fileName={form.file ? form.file.name : ''} onChange={(value) => handleChange('file', value)} />
            <button type='submit' >Заказывайте</button>
          </form>
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