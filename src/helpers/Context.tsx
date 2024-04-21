'use client'

import Store from '@/store/store'
import { createContext } from 'react'

interface State {
  store: Store
}

const store = new Store

export const Context = createContext<State>({ store })

interface Props {
  children: React.ReactNode
}

export const StoreContext = ({ children }: Props) => {
  return (
    <Context.Provider value={{ store }}>
      {children}
    </Context.Provider>
  )
}
