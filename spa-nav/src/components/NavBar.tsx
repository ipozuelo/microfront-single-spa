import { useEffect } from "react";
import "../style-nav.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lg: string) => {
    localStorage.setItem("languaje", lg);
    window.location.reload();
    i18n.changeLanguage(lg);
  };

  const theme_mode = () =>{
    const theme = localStorage.getItem("theme")
    const style = document.getElementById('theme-colors');
    if (theme === "light"){
      style?.setAttribute('href', 'http://localhost:3000/css/colors/variables-general-colors.css');

    }else{
      style?.setAttribute('href', 'http://localhost:3000/css/colors/variables-dark-colors.css');
    }
  }
 

  const itemList = [
    { text: i18n.t("nav.home"), icon: "--icon-house", link: "/home" },
    { text: i18n.t("nav.information"), icon: "--icon-house", link: "/about" },
    { text: i18n.t("nav.web"), icon: "--icon-house", link: "/web" },
    { text: i18n.t("nav.library"), icon: "--icon-house", link: "/library" },
  ];


  return (
    <>
      <nav-app tittle="NTTDATA-Frontend" itemList={itemList}></nav-app>
    </>
  );
};

export default NavBar;
