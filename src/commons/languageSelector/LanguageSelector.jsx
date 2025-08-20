import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { setLanguage } from "../../store/slice/appBook/languages";
import "./languageSelector.scss";

const languageData = {
  es: { title: "Español", flag: "🇪🇸" },
  en: { title: "English", flag: "🇬🇧" },
};

export const LanguageSelector = ({ language }) => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const windowWidth = useSelector((state) => state.screenSlice.screenWidth);

  const switchLanguage = Object.keys(languageData).find((e) => e !== language);

  const handleSelectLanguage = () => {
    dispatch(setLanguage(switchLanguage));
    setDropdown(false);
  };

  const currentLanguageData = {
    es: { title: windowWidth > 800 ? "Español" : "Es", flag: "🇪🇸" },
    en: { title: windowWidth > 800 ? "English" : "En", flag: "🇬🇧" },
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.languageSelector__main')) {
        setDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="languageSelector__main">
      <div 
        onClick={() => setDropdown(!dropdown)}
        className="languageSelector__current"
      >
        <strong className="languageSelector__flag">
          {currentLanguageData[language].flag}
        </strong>
        <strong className="languageSelector__title">
          {currentLanguageData[language].title}
        </strong>
      </div>

      <div 
        className={`languageSelector__dropdown ${dropdown ? 'show' : ''}`}
        onClick={handleSelectLanguage}
      >
        <strong className="languageSelector__flag">
          {currentLanguageData[switchLanguage].flag}
        </strong>
        <strong className="languageSelector__title">
          {currentLanguageData[switchLanguage].title}
        </strong>
      </div>
    </div>
  );
};
