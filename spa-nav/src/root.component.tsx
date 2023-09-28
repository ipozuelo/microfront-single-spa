import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";



export default function Root() {

  const [translation, setTranslation] = useState({});

  useEffect(() => {
    
    const lg = localStorage.getItem("languaje");
    const url = `http://localhost:3000/i18n/${lg}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTranslation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },);

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {translation: translation},
        es: {translation: translation},
      },
      lng: localStorage.getItem("languaje"),
      interpolation: { escapeValue: false },
    });

  return (
    <I18nextProvider i18n={i18n}>
      <NavBar />
    </I18nextProvider>
  );
}
