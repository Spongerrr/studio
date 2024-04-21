import { tDe } from "@/data/de"
import { tEn } from "@/data/en"
import { tFr } from "@/data/fr"
import { tRu } from "@/data/ru"
import { tUa } from "@/data/ua"
import { makeAutoObservable } from "mobx"

export default class Store {

  lang = 'en'
  langIsOpen = false
  langList = ['ru', 'fr', 'de', 'ua']
  translations = {
    ru: tRu,
    en: tEn,
    de: tDe,
    fr: tFr,
    ua: tUa
  }

  // ===============================

  constructor() {
    makeAutoObservable(this)
    this.detectAndSetLanguage()
  }

  detectAndSetLanguage() {
    if (typeof global !== 'undefined' && global.navigator && global.navigator.language) {
      const browserLang = global.navigator.language.slice(0, 2)
      if (this.langList.includes(browserLang)) {
        this.setLang(browserLang)
      }
    }
  }

  setLang(lang: string) {
    this.langList = this.langList.filter(l => l !== lang)

    this.langList.push(this.lang)

    this.lang = lang
  }

  setLangIsOpen(bool: boolean) {
    this.langIsOpen = bool
  }
}