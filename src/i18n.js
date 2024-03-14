import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from './locales/ru.json' // Путь к вашему файлу ru.json
import translationUZ from './locales/uz.json'; // Путь к вашему файлу uz.json

const resources = {
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUZ
  }
};

i18n
  .use(initReactI18next) // Проходит i18next через react-i18next.
  .init({
    resources: {
        ru: {
          translation: translationRU,
        },
        uz: {
          translation: translationUZ,
        },
        keySeparator: false, // Мы не используем keys в форме messages.welcome
      },
      lng: "ru", // язык по умолчанию
      fallbackLng: "ru", // язык запасной
  
      interpolation: {
        escapeValue: false, // не нужно использовать HTML escaping
      }
  
});

export default i18n;