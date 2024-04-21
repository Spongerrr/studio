import { Context } from "@/helpers"
import { useContext } from "react"


export const useLang = () => {
	const { store } = useContext(Context)

	switch (store.lang) {
		case ('ru'):
			return store.translations.ru

		case ('en'):
			return store.translations.en

		case ('fr'):
			return store.translations.fr

		case ('de'):
			return store.translations.de

		case ('ua'):
			return store.translations.ua

		default:
			break
	}
}