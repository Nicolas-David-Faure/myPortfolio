import React, { useState } from "react";
//*Styles
import "./desktop.scss";
//*Mooks
import { data_folders } from "../../mooks/folders.json";
//*Components


const Desktop = ({ language }) => {

 

  return (
    <div className="desktop__main">
      <Title language={language} />


      <InfoContact language={language} />
    </div>
  );
};

export default Desktop;


const Title = ({ language }) => {
  return (
    <div className="desktop__title">
      <h1>Nicolás Faure</h1>
      <h2>{language === "en" ? 'Full stack developer' : 'Desarrollador full stack'}</h2>
    </div>
  );
}


const InfoContact = ({ language }) => { 
  return (
    <div className="desktop__infoContact">
      <p>
        {language === "en" ? "I'm a fullstack developer, passionate about technology and programming. I'm looking for new challenges and opportunities to grow as a professional and as a person." : "Soy un desarrollador full stack, apasionado por la tecnología y la programación. Busco nuevos desafíos y oportunidades para crecer como profesional y como persona."}
      </p>
      <p>
        {language === "en" ? "I'm currently working as a freelance developer and I'm open to new job opportunities." : "Actualmente trabajo como desarrollador freelance y estoy abierto a nuevas oportunidades laborales."}
      </p>
    </div>
  );
}





