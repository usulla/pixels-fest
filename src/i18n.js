import i18n from "i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

import translationEng from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEng
      },
      ru: {
        translations: translationRu
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;