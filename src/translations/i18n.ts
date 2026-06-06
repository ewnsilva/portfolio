import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { languages } from "translations";

export const defaultNS = "es";
export const resources = {
  en: languages.en,
  es: languages.es,
  pt: languages.pt,
};

const availableLanguages = ["pt", "en", "es"];
const selectedLanguage = localStorage.getItem("i18nextLng");
const fallbackLng = "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: selectedLanguage ?? fallbackLng,
    fallbackLng,
    resources: {
      ...languages,
    },
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
