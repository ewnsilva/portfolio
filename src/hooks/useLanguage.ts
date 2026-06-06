import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: "pt" | "en" | "es") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return {
    t,
    language: i18n.language,
    changeLanguage,
  };
};
