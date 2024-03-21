import React from "react";
import "./aboutme.scss";
import teamworkIcon from "../../assets/img/teamwork.png";

import frontEndIcon from "../../assets/img/front.png";
import dbIcon from "../../assets/img/db.png";
import servicesInformation from '../../mooks/servicesInformation.json'
import aboutmeDescriptionInformation from '../../mooks/aboutmeDescriptionInformation.json'

//logos skills
//front
import cssLogo from "../../assets/img/logo-skills/CSS3.png";
import htmlLogo from "../../assets/img/logo-skills/HTML5.png";
import javascriptLogo from "../../assets/img/logo-skills/JS.png";
import reactLogo from "../../assets/img/logo-skills/React.png";
import nextLogo from "../../assets/img/logo-skills/next-js.svg";
import reduxLogo from "../../assets/img/logo-skills/Redux.png";
import sassLogo from "../../assets/img/logo-skills/SASS.png";
import tailwindLogo from "../../assets/img/logo-skills/Tailwind.png";
import typescriptLogo from "../../assets/img/logo-skills/ts.png";

//back
import expressLogo from "../../assets/img/logo-skills/exjs.png";
import firebaseLogo from "../../assets/img/logo-skills/firebase.png";
import mongodbLogo from "../../assets/img/logo-skills/mongodb.png";
import nodeLogo from "../../assets/img/logo-skills/node-js.svg";
import postgresLogo from "../../assets/img/logo-skills/postgres.png";
import nestLogo from "../../assets/img/logo-skills/NestJS.svg";
import openaiLogo from "../../assets/img/logo-skills/openai.webp";
import jwtLogo from "../../assets/img/logo-skills/jwt.png";

//tools
import gitLogo from "../../assets/img/logo-skills/Git.png";
import githubLogo from "../../assets/img/logo-skills/Github.png";
import dockerLogo from "../../assets/img/logo-skills/docker.png";
//img
import photoNicolas from "../../assets/img/nicolas-recortado.png";


const arrayLogos = [
  { name: "CSS", logo: cssLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "Javascript", logo: javascriptLogo },
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Sass", logo: sassLogo },
  { name: "Tailwind", logo: tailwindLogo },
  { name: "Typescript", logo: typescriptLogo },
  { name: "Express", logo: expressLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Postgres", logo: postgresLogo },
  { name: "Nest", logo: nestLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "JWT", logo: jwtLogo },

  { name: "Git", logo: gitLogo },
  { name: "Github", logo: githubLogo },
  { name: "Docker", logo: dockerLogo },
];

export const Aboutme = ({ language }) => {
  return (
    <section className="aboutme__main">
        <div className="aboutme__title">
          <h3>{language === "en"  ? "about me" : "sobre mí" }</h3>
        </div>
      <div className="aboutme__container">
        <AboutmeDescription language={language} />
        <AboutmeServices language={language} />
      </div>
      <div className="aboutme__title">
          <h3>{language === "en"  ? "skills" : "habilidades" }</h3>
        </div>
      <div className="aboutme__skills">
        <div className="aboutme__skills__container">
          {arrayLogos.map((logo, i) => 
            {
              const isNodeAndDocker = logo.name === "Node.js" || logo.name === "Docker";

           
              return (

                <div key={i} className="aboutme__skills__item">
                  <img src={logo.logo} alt={logo.name} className={isNodeAndDocker ? "aboutme__skills__item_isBigger" : ""} />
                  <p>{logo.name}</p>
                </div>

              )
            }
          )}
        </div>
      </div>
    </section>
  );
};




const AboutmeDescription = ({ language }) => {
  return (
    <div className="aboutme__description">
      <div className="aboutme__description_text">
        
        {aboutmeDescriptionInformation[language].map((item, i) => (
          <div key={i}>
            
            <h5>{item.subtitle}</h5>
            <p>{item.description}</p>
          </div>
        ))}
        
      </div>
      <div className="aboutme__description_img">
        <img src={photoNicolas} alt="Nicolas" />
      </div>
    </div>
  );
}






const AboutmeServices = ({ language }) => {
 
  return (
    <div className="aboutme__services">
      <div className="aboutme__services__list">
        <div className="aboutme__service">
          <figure className="aboutme__service_img">
            <img src={frontEndIcon} />
            <figcaption>
              <p>Front end</p>
            </figcaption>
          </figure>

         <ul>
            {servicesInformation[language].frontend.map((service, i) => (
              <li key={i}>
                {service}
              </li>
            ))}
         </ul>
        </div>

        <div className="aboutme__service">
          <figure className="aboutme__service_img">
            <img src={dbIcon} />

            <figcaption>
              <p>Back end</p>
            </figcaption>
          </figure>

          <ul>
            {servicesInformation[language].backend.map((service, i) => (
              <li key={i}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="aboutme__service">
          <figure className="aboutme__service_img">
            <img src={teamworkIcon} />
            <figcaption>
              {" "}
              <p>{language === "en" ? 'Team work' : 'trabajo en equipo'}</p>
            </figcaption>
          </figure>

         <ul>
            {servicesInformation[language].teamwork.map((service, i) => (
              <li key={i}>
                {service}
              </li>
            ))}
         </ul>
        </div>
      </div>
    </div>
  );
};
