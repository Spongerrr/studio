import { useLang } from "./useLang"


export const usePath = (path: string) => {
  const data = useLang()?.header

  switch (path) {
    case '/':
      return data?.main_page

    case '/projects':
      return data?.portfolio_page

    case '/contacts':
      return data?.contact_page

    default: break
  }
}