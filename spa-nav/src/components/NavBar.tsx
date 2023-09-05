
import "../style.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lg:string) =>{
    localStorage.setItem("languaje",lg)
    window.location.reload()
    i18n.changeLanguage(lg)
  }

  return (
    <nav className="sidebar">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div className="logo_content">
        <div className="logo">
          <i className="bx bxl-deezer"></i>
          <span className="logo_name">NTT-DATA Frontend</span>
        </div>
      </div>

      <ul className="nav-list">
        <li>
          <a href="/home">
            <i className="bx bx-home"></i>
            <span className="links_name">{t("nav.home")}</span>
          </a>
        </li>

        <li>
          <a href="about">
            <i className="bx bx-info-circle"></i>
            <span className="links_name">{t("nav.information")}</span>
          </a>
        </li>

        <li>
          <a href="#">
          <i className='bx bx-error'></i>
            <span className="links_name">{t("nav.incidents")}</span>
          </a>
        </li>

        <li>
          <a href="/web">
            <i className="bx bx-code"></i>
            <span className="links_name">{t("nav.web")}</span>
          </a>
        </li>
        <li>
          <a href="/library">
          <i className='bx bx-library'></i>
            <span className="links_name">{t("nav.library")}</span>
          </a>
        </li>

        <li>
          <a href="/tools">
          <i className='bx bx-wrench'></i>
            <span className="links_name">{t("nav.tools")}</span>
          </a>
        </li>
    
      </ul>

      <div className="container-btn">
        <button onClick={()=> changeLanguage("es")}>Es</button>
        <button onClick={()=> changeLanguage("en")}>En</button>
      </div>
    </nav>
  );
};

export default NavBar;
