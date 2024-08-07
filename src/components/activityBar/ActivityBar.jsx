import React, { useEffect, useState } from "react";
import "./activityBar.scss";

import { LanguageSelector } from "../../commons/languageSelector/LanguageSelector";
import { useDispatch, useSelector } from "react-redux";
import { MenuIcon } from "../../commons/icons/MenuIcon";
import { motion, useAnimation } from "framer-motion";
import { setScreenWidth } from "../../store/slice/screen/screenSlice";
import { setToggleMenuDropdown } from "../../store/slice/activityBar/activityBarSlice";
import { MenuDropdown } from "./MenuDropdown";
import logo from "../../assets/logos/1.png";

export const ActivityBar = ({ language }) => {
  const controls = useAnimation();
  const windowWidth = useSelector((state) => state.screenSlice.screenWidth);
  const menuDropdownState = useSelector((state) => state.activityBarSlice.menuDropdown);

  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > prevScrollY) {
      // Hacia abajo: oculta el header
      controls.start({ opacity: 0, y: -80 });
    } else {
      // Hacia arriba: muestra el header
      controls.start({ opacity: 1, y: 0 });
    }

    setPrevScrollY(scrollY);
  };

  // Agrega un listener para el evento de scroll
  useEffect(() => {
    // if (windowWidth > 768){
    //   window.addEventListener('scroll', handleScroll);
    //  return () => {
    //    window.removeEventListener('scroll', handleScroll);
    //  };
    // }
  }, [prevScrollY, windowWidth]);

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.1, type: "tween", ease: "linear" }}
      className="activitybar__main"
    >
      <a href="#home">
        <figcaption>
          <strong>NF</strong>
        </figcaption>
      </a>
      {(windowWidth < 768 && menuDropdownState ) && (
        <div className="activitybar__language_cont">
         <LanguageSelector language={language} />
       </div>
      )}

      <SectionSelector language={language} windowWidth={windowWidth} menuDropdownState={menuDropdownState} />
      {(windowWidth > 768) && (
        <div >
         <LanguageSelector language={language} />
       </div>
      )}

      {menuDropdownState && <MenuDropdown language={language} />}

    </motion.nav>
  );
};

const SectionSelector = ({ language, windowWidth, menuDropdownState }) => {
  const dispatch = useDispatch();

  window.onresize = function () {
    dispatch(setScreenWidth(window.innerWidth));
  };

  useEffect(() => {
    dispatch(setScreenWidth(window.innerWidth));
  }, []);

  const handleToggleMenuDropdown = () => {
    dispatch(setToggleMenuDropdown(!menuDropdownState));
  };

  return windowWidth > 768 ? (
    <div className="activitybar__sectionselector">
      <div className="activitybar__sectionselector__section">
        <a href="#home">{language === "es" ? "Inicio" : "Home"}</a>
      </div>
      <div className="activitybar__sectionselector__section">
        <a href="#aboutme">{language === "es" ? "Sobre mí" : "About me"}</a>
      </div>
      <div className="activitybar__sectionselector__section">
        <a href="#skills">{language === "es" ? "Habilidades" : "Skills"}</a>
      </div>
      <div className="activitybar__sectionselector__section">
        <a href="#projects">{language === "es" ? "Proyectos" : "Projects"}</a>
      </div>
      <div className="activitybar__sectionselector__section">
        <a href="#contact">{language === "es" ? "Contacto" : "Contact"}</a>
      </div>
    </div>
  ) : (
    <div onClick={handleToggleMenuDropdown} className="activitybar__sectionselector__menuIcon">
      <MenuIcon />
    </div>
  );
};
