import React, { useEffect, useState } from "react";
import "./languageSelector.scss";
import { motion } from "framer-motion";
import { useDispatch , useSelector } from "react-redux";
import { setLanguage } from "../../store/slice/appBook/languages";

const languageData = {
  es: { title: "Español", flag: "🇪🇸" },
  en: { title: "English", flag: "🇬🇧" },
};

export const LanguageSelector = ({ language }) => {
  const [dropdown, setDropdown] = useState(false);
  const [isNewLanguage, setIsNewLanguage] = useState(false);


  const dispatch = useDispatch();

  const switchLanguage = Object.keys(languageData).find((e) => e !== language);

  const handleSelectLanguage = () => {
    dispatch(setLanguage(switchLanguage));

    setIsNewLanguage(true);
  };

  const onAnimationComplete = () => {
    if (!dropdown) {
      // Si el dropdown es falso al finalizar la animación, ocultamos el elemento
      setDropdown(false);
    }
  };

  const animateDropdown = {
    on: { y: [0, 25], opacity: 1 },
    off: { y: 0, x: -10, opacity: 0, zIndex: -1 },
  };

  useEffect(() => {
    if (dropdown) {
      setIsNewLanguage(true);
    }
    setIsNewLanguage(false);
  }, [language]);

  return (
    <motion.div
      layout
      onClick={() => setDropdown((prev) => !prev)}
      className={"languageSelector__main"}
      style={{ zIndex: 1 }}
    >
      <motion.div
        initial={"off"}
        layout
        animate={dropdown ? "on" : "off"}
        variants={animateDropdown}
        transition={{
          opacity: { ease: "easeIn", duration: 0.1 },
          layout: { duration: 0.1 },
        }}
        className="languageSelector__dropdown"
        onAnimationComplete={onAnimationComplete}
        onClick={handleSelectLanguage}
      >
        <LanguageContainer language={switchLanguage} />
      </motion.div>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={
          isNewLanguage ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: 0 }
        }
        transition={{
          opacity: { ease: "easeIn", duration: 0.3 },
        }}
      >
        <LanguageContainer language={language} />
      </motion.div>
    </motion.div>
  );
};

const LanguageContainer = ({ language  }) => {
  
  const windowWidth = useSelector((state) => state.screenSlice.screenWidth);

  const languageData = {
    es: { title: windowWidth > 800 ? "Español" : "Es", flag: "🇪🇸" },
    en: { title: windowWidth > 800 ? "English" : "En", flag: "🇬🇧" },
  };
  return (
    <>
      <strong className="languageSelector__flag">
        {languageData[language].flag}
      </strong>
      <strong className="languageSelector__title">
        {languageData[language].title}
      </strong>
    </>
  );
};
