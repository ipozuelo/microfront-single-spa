import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";
import { useTranslationConfig } from "./i18n";



export default function Root() {

  const i18n = useTranslationConfig()



  
  const theme_mode = () =>{
    const theme = localStorage.getItem("theme")
    const style = document.getElementById('theme-colors');
    if (theme === "light"){
      style?.setAttribute('href', 'http://localhost:3000/css/colors/variables-general-colors.css');

    }else{
      style?.setAttribute('href', 'http://localhost:3000/css/colors/variables-dark-colors.css');
    }
  }

  useEffect(()=>{
    theme_mode()
    console.log(i18n.t("nav.library"))
  })

  const itemList = [
    { text: i18n.t("nav.home"), icon: "--icon-house", link: "/home" },
    { text: i18n.t("nav.information"), icon: "--icon-house", link: "/about" },
    { text: i18n.t("nav.web"), icon: "--icon-house", link: "/web" },
    { text: i18n.t("nav.library"), icon: "--icon-house", link: "/library" },
  ];



  return (

  
    <nav-app tittle="NTTDATA-Frontend"  theme={true} languaje={true}></nav-app>
 
  );
}
