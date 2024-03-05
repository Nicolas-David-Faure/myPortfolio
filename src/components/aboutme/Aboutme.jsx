import React from "react";
import "./aboutme.scss";
import backEndIcon from "../../assets/img/servidor.png";
import frontEndIcon from "../../assets/img/front.png";
import dbIcon from "../../assets/img/db.png";

export const Aboutme = ({ language }) => {
  return (
    <section className="aboutme__main">
      <div className="aboutme__description">
        <strong>
          {language === "en"
            ? "I am a full stack web developer, with experience in web applications development. I love learning new technologies and applying them in my projects. I love working in a team and collaborating with other developers."
            : "Soy un desarrollador web full stack, con experiencia en el desarrollo de aplicaciones web . Me encanta aprender nuevas tecnologías y aplicarlas en mis proyectos. Me encanta trabajar en equipo y colaborar con otros desarrolladores."}
        </strong>
      </div>

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
    </section>
  );
};
