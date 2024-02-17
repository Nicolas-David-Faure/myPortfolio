import React, { useEffect, useState } from "react";
import "./activityBar.scss";
import { DateCalendar } from "../../commons/date/DateCalendar";
import { LanguageSelector } from "../../commons/languageSelector/LanguageSelector";
import { useSelector } from "react-redux";
import { MenuIcon } from "../../commons/icons/MenuIcon";
import { motion, useAnimation } from "framer-motion";

export const ActivityBar = ({ language }) => {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    if(windowWidth < 768){
     window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }

    
  }, [prevScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.1 , type: "tween" ,ease: "linear"}}
      className="activitybar__main"
    >
      <div>
        <LanguageSelector language={language} />
      </div>

      <SectionSelector language={language} setWindowWidth={setWindowWidth} windowWidth={windowWidth}/>

      {/* <DateCalendar language={language} /> */}
    </motion.nav>
  );
};

const SectionSelector = ({ language , windowWidth , setWindowWidth }) => {
 
  window.onresize = function () {
    setWindowWidth(window.innerWidth);
  };

  return windowWidth > 768 ? (
    <div className="activitybar__sectionselector">
      <div className="activitybar__sectionselector__section">
        <p>{language === "es" ? "Inicio" : "Home"}</p>
      </div>
      <div className="activitybar__sectionselector__section">
        <p>{language === "es" ? "Proyectos" : "Projects"}</p>
      </div>
      <div className="activitybar__sectionselector__section">
        <p>{language === "es" ? "Sobre mí" : "About me"}</p>
      </div>
      <div className="activitybar__sectionselector__section">
        <p>{language === "es" ? "Contacto" : "Contact"}</p>
      </div>
    </div>
  ) : (
    <div className="activitybar__sectionselector__menuIcon">
      <MenuIcon />
    </div>
  );
};
