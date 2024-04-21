'use client'

import { useState } from 'react'
import { Dropdown, Input, InputFile, Logo, Textarea } from '@/ui'
import { Container, SendMessage } from '@/helpers'
import { IForm } from '@/models'
import { motion, AnimatePresence } from 'framer-motion'

import s from './styles.module.scss'
import { useLang } from '@/hooks'
import { observer } from 'mobx-react-lite'

const titleAnimation = {
  hidden: {
    x: -500,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export const Contacts = observer(() => {
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

  const phoneValidation = (form.tel && !/^[0-9+]+$/.test(form.tel)) ? false : true;
    

  const data = useLang()?.contacts

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

    if (dataErrors.length > 0 || phoneValidation) {
      setErrors(dataErrors)
    } else {
      SendMessage(form)
      setSended(true)
      setErrors([])
    }
  }

  return (
    <Container size='default'>
      <motion.div
        className={s.contacts}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2 }}
      >
        <motion.h2 variants={titleAnimation}>{!sended ? data?.title : data?.title_2}</motion.h2>
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
                  label={data?.label.service}
                  select={form.select}
                  setSelect={(value) => handleChange('select', value)}
                />
                <Input
                  id='name'
                  label={data?.label.name}
                  type='text'
                  value={form.name}
                  onChange={(value) => handleChange('name', value)}
                  required={true}
                />
                <Input
                  id='email'
                  label={data?.label.mail}
                  type='email'
                  value={form.email}
                  onChange={(value) => handleChange('email', value)}
                  required={true}
                />
                <Input
                  id='phone'
                  label={data?.label.phone}
                  type='tel'
                  value={form.tel}
                  onChange={(value) => handleChange('tel', value)}
                  required={true}
                />
                <Textarea
                  label={data?.label.wishes}
                  value={form.text}
                  onChange={(value) => handleChange('text', value)}
                />
                <InputFile
                  label={data?.label.files}
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
                      {data?.label.error}
                    </motion.p>
                  }
                </AnimatePresence>
                <button type='submit' >{data?.label.submit}</button>
              </motion.form>
            }
          </AnimatePresence>
          <div className={s.info}>
            <div>
              <p>{data?.text}</p>
              <strong>+41 79 827 21 64</strong>
              <strong>corp@penguin-studio.tech</strong>
            </div>
            <Logo type='default' />
          </div>
        </div>
      </motion.div>
    </Container>
  )
})