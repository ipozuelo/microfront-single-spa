import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

export const useTranslationConfig = () => {
  const [trans, setTranslation] = useState({});

  useEffect(() => {
    const lg = localStorage.getItem("languaje");
    const url = `http://localhost:3000/i18n/${lg}.json`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      i18n.use(initReactI18next).init({
        resources: {
          en: { translation: data },
          es: { translation: data },
        },
        lng: lg,
        interpolation: { escapeValue: false },
      });

      if (JSON.stringify(data) !== JSON.stringify(trans)) {
        setTranslation(data);
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("Texto" + url)
    });
}, []); 

  return i18n;
};