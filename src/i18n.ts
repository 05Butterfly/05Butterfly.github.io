import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import pl from './locales/pl.json'
import es from './locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, pl, es },
})
export default i18n