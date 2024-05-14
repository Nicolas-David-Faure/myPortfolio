import React from "react";
import "./aboutme.scss";
import teamworkIcon from "../../assets/img/teamwork.png";

import frontEndIcon from "../../assets/img/front.png";
import dbIcon from "../../assets/img/db.png";
import servicesInformation from "../../mooks/servicesInformation.json";
import aboutmeDescriptionInformation from "../../mooks/aboutmeDescriptionInformation.json";

//img
import photoNicolas from "../../assets/img/nicolas-recortado.png";
//logos
import { arrayLogos } from "../../mooks/logosSkill";
import { useSelector } from "react-redux";

export const Aboutme = ({ language }) => {
  const { screenWidth } = useSelector((state) => state.screenSlice);
  return (
    <section className="aboutme__main">
      <div className="aboutme__title">
        <h3 id="aboutme">{language === "en" ? "about me" : "sobre mí"}</h3>
      </div>
      <div className="aboutme__container">
        <AboutmeDescription language={language} />
        <AboutmeServices language={language} />
      </div>
      <AboutmeSkills language={language} screenWidth={screenWidth} />
    </section>
  );
};

const AboutmeSkills = ({ language, screenWidth }) => {
  return (
    <>
      <div className="aboutme__title">
        <h3 id="skills">{language === "en" ? "skills" : "habilidades"}</h3>
      </div>

      <div className="aboutme__skills">
        <div className="aboutme__skills__container">
          {arrayLogos.map((logo, i) => {
            const isNodeAndDocker = logo.name === "Node.js" || logo.name === "Docker";

            return (
              <div key={i} className="aboutme__skills__item">
                <img src={logo.logo} alt={logo.name} className={isNodeAndDocker ? "aboutme__skills__item_isBigger" : ""} />
                <p>{logo.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
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
};

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
              <li key={i}>{service}</li>
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
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="aboutme__service">
          <figure className="aboutme__service_img">
            <img src={teamworkIcon} />
            <figcaption>
              {" "}
              <p>{language === "en" ? "Team work" : "trabajo en equipo"}</p>
            </figcaption>
          </figure>

          <ul>
            {servicesInformation[language].teamwork.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
