import React from "react";
import "./aboutme.scss";
import backEndIcon from "../../assets/img/servidor.png";
import frontEndIcon from "../../assets/img/front.png";
import dbIcon from "../../assets/img/db.png";
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
import tsLogo from "../../assets/img/logo-skills/ts.png";
//tools
import gitLogo from "../../assets/img/logo-skills/Git.png";
import githubLogo from "../../assets/img/logo-skills/Github.png";
import dockerLogo from "../../assets/img/logo-skills/docker.png";

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
      { name: "Typescript", logo: tsLogo },
      { name: "Git", logo: gitLogo },
      { name: "Github", logo: githubLogo },
      { name: "Docker", logo: dockerLogo },
    ]
 
export const Aboutme = ({ language }) => {
  return (
    <section className="aboutme__main">

      <div className="aboutme__container">
      {/* description */}
      <div className="aboutme__description">
        <strong>
          {language === "en"
            ? "I am a full stack web developer, with experience in web applications development. I love learning new technologies and applying them in my projects. I love working in a team and collaborating with other developers."
            : "Soy un desarrollador web full stack, con experiencia en el desarrollo de aplicaciones web . Me encanta aprender nuevas tecnologías y aplicarlas en mis proyectos. Me encanta trabajar en equipo y colaborar con otros desarrolladores."}
        </strong>
      </div>
    {/* services */}
      <div className="aboutme__services">
        <div className="aboutme__services__list">
          <div className="aboutme__service">
            <figure className="aboutme__service_img">
              <img src={frontEndIcon} />
            </figure>

            <p>
              {language === "en"
                ? "I develop web applications using react and next.js"
                : "Desarrollo aplicaciones web en react y next.js"}
            </p>
          </div>

          <div className="aboutme__service">
            <figure className="aboutme__service_img">
              <img src={dbIcon} />
            </figure>

            <p>
              {language === "en"
                ? "I design and develop databases using Postgres, MongoDB and Firebase."
                : "Diseño y desarrollo bases de datos utilizando Postgres, MongoDB y Firebase."}
            </p>
          </div>

          <div className="aboutme__service">
            <figure className="aboutme__service_img">
              <img src={backEndIcon} />
            </figure>

            <p>
              {language === "en"
                ? "I develop server-side applications using Node.js and Express.js."
                : "Desarrollo aplicaciones del lado del servidor utilizando Node.js y Express.js."}
            </p>
          </div>
        </div>
      </div>

      </div>

      




      <div className="aboutme__skills">
        <h2>{language === "en" ? "Skills" : "Habilidades"}</h2>
        <div className="aboutme__skills__container">
          {arrayLogos.map((logo, i) => (
            <div key={i} className="aboutme__skills__item">
              <img src={logo.logo} alt={logo.name} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};
