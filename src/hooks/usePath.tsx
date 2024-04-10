import locales from '@public/locales/ru.json'

export const usePath = (path: string) => {
  const data = locales.paths

  switch (path) {
    case '/':
      return data?.home

    case '/projects':
      return data.projects

    case '/contacts':
      return data.contacts

    default: break
  }
}