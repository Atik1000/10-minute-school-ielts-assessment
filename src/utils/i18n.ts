import en from '../locales/en.json';
import bn from '../locales/bn.json';

export type Language = 'en' | 'bn';

const translations = {
  en,
  bn,
};

export const getTranslation = (lang: Language) => {
  return translations[lang];
};

export const getCurrentLanguage = (): Language => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("currentLang") as Language) || "en";
  }
  return "en";
};

export const setLanguage = (lang: Language) => {
  localStorage.setItem("currentLang", lang);
  window.location.reload();
}; 