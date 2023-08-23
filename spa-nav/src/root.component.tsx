import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

import enTranslation from "../../i18n/en.json";
import esTranslation from "../../i18n/es.json";
import NavBar from "./components/NavBar";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: localStorage.getItem("languaje"), 
  interpolation: { escapeValue: false },
});

export default function Root() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavBar />
    </I18nextProvider>
  );
}
