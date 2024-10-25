import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const en = require("./locales/en/translition.json");
const ru = require("./locales/ru/translition.json");

i18next.use(initReactI18next).init({
  debug: false,
  initImmediate: false,
  preload: ["ru", "en"],
  fallbackLng: "ru",
  lng: "ru",
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
});



export default i18next;
