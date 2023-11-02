
import { useEffect, useState } from "react";
import { useTranslationConfig } from "./i18n";

export default function Root() {
  const i18n = useTranslationConfig();

  const theme_mode = () => {
    const theme = localStorage.getItem("theme");
    const style = document.getElementById("theme-colors");
    if (theme === "light") {
      style?.setAttribute(
        "href",
        "http://localhost:3000/css/colors/variables-general-colors.css"
      );
    } else {
      style?.setAttribute(
        "href",
        "http://localhost:3000/css/colors/variables-dark-colors.css"
      );
    }
  };

  const home = i18n.t("nav.home");
  const about = i18n.t("nav.information");
  const web = i18n.t("nav.web");
  const library = i18n.t("nav.library");
  const tools = i18n.t("nav.tools");

  const itemList = [
    { text: home, icon: "--icon-house", link: "/home" },
    { text: about, icon: "--icon-info", link: "/about" },
    { text: web, icon: "--icon-code", link: "/web" },
    { text: library, icon: "--icon-library", link: "/library" },
    { text: tools, icon: "--icon-tools", link: "/tools" },
  ];

  const objString: string = JSON.stringify(itemList);

  useEffect(() => {
    theme_mode();
  });

  return (
    <nav-app
      tittle="NTTDATA-Frontend"
      theme={true}
      languaje={true}
      itemList={objString}
      list={objString}
    ></nav-app>
  );
}
