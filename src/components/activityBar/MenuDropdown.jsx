import React from 'react'
import './menuDropdown.scss'

import { setToggleMenuDropdown } from "../../store/slice/activityBar/activityBarSlice";
import { useDispatch } from 'react-redux';

export const MenuDropdown = ({ language }) => {
  const dispatch = useDispatch();
  const infoMenuDropdown = [
    {
      id: 0,
      section:  language === "es" ? "Inicio" : "Home",
      name: "home"
    },
    {
      id: 1,
      section: language === "es" ? "Sobre mí" : "About me",
      name: "aboutme"
    },
    {
      id: 2,
      section: language === "es" ? "Habilidades" : "Skills",
      name: "skills"
    },
    {
      id: 3,
      section: language === "es" ? "Proyectos" : "Projects",
      name: "projects"
    },
    {
      id: 4,
      section: language === "es" ? "Contacto" : "Contact",
      name: "contact"
    },
  ];

  return (
    <div className="menuDropdown__main">
      {infoMenuDropdown.map((item) => (
        <a onClick={()=> dispatch(setToggleMenuDropdown(false))} href={'#'+item.name} key={item.id} className="menuDropdown__ul">
          <li>{item.section}</li>
        </a>
      ))}
    </div>
  )
}





