import { SetStateAction, useContext } from 'react'
import { Context, Svg } from '@/helpers'
import { observer } from 'mobx-react-lite'
import { AnimatePresence, motion } from 'framer-motion'

import s from './styles.module.scss'

interface Props {
  setShowMenu: React.Dispatch<SetStateAction<boolean>>
}

export const LangSwitch = observer(({ setShowMenu }: Props) => {
  const { store } = useContext(Context)
  const isOpen = store.langIsOpen

  const handleClick = (lang: string) => {
    store.setLang(lang)
    store.setLangIsOpen(false)
    setShowMenu(false)
  }

  return (
    <div className={s.switcher}>
      <button
        onClick={() => store.setLangIsOpen(!isOpen)}
      >
        <span>{store.lang}</span>
        <Svg type={isOpen ? 'arrow-up' : 'arrow-down'} />
      </button>
      <div className={s.list}>
        <AnimatePresence>
          {store.langIsOpen &&
            store.langList.map((l) => (
              <motion.button
                key={l}
                onClick={() => handleClick(l)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span>{l}</span>
              </motion.button>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
})