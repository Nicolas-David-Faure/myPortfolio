import React, { useState } from 'react'
import './activityBar.scss'
import { DateCalendar } from '../../commons/date/DateCalendar'
import { LanguageSelector } from '../../commons/languageSelector/LanguageSelector'
import { useSelector } from 'react-redux'
import { MenuIcon } from '../../commons/icons/MenuIcon'



export const ActivityBar = ({ language }) => {




  return (
    <nav className='activitybar__main'>
      <div >
        <LanguageSelector language={language} />
      </div>
   
        <SectionSelector language={language} />
    


      {/* <DateCalendar language={language} /> */}
      

    </nav>
  )
}

const SectionSelector = ({ language }) => { 
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)


  window.onresize = function () {
    setWindowWidth(window.innerWidth)
  }




  return (
    windowWidth > 768 ?   
    <div className='activitybar__sectionselector'>
      <div className='activitybar__sectionselector__section'>
        <p>{language === 'es' ? 'Inicio' : 'Home'}</p>
      </div>
      <div className='activitybar__sectionselector__section'>
        <p>{language === 'es' ? 'Proyectos' : 'Projects'}</p>
      </div>
      <div className='activitybar__sectionselector__section'>
        <p>{language === 'es' ? 'Sobre mí' : 'About me'}</p>
      </div>
      <div className='activitybar__sectionselector__section'>
        <p>{language === 'es' ? 'Contacto' : 'Contact'}</p>
      </div>
    </div>
  : 
  <div className='activitybar__sectionselector__menuIcon'>
    <MenuIcon />
  </div>
 
  
  )

 
}