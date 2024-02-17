import React from 'react'
import './menuDropdown.scss'
export const MenuDropdown = ({ language }) => {
  const infoMenuDropdown = [
    {
      id: 1,
      section:  language === "es" ? "Inicio" : "Home",
    },
    {
      id: 2,
      section: language === "es" ? "Proyectos" : "Projects",
    },
    {
      id: 3,
      section: language === "es" ? "Sobre mí" : "About me",
    },
    {
      id: 4,
      section: language === "es" ? "Contacto" : "Contact",
    },
  ];

  return (
    <div className="menuDropdown__main">
      {infoMenuDropdown.map((item) => (
        <ul key={item.id} className="menuDropdown__ul">
          <li>{item.section}</li>
        </ul>
      ))}
    </div>
  )
}





