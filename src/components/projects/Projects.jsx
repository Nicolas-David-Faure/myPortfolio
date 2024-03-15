import React, { useState } from "react";
import "./projects.scss";
import { AnimatePresence, motion } from "framer-motion";
import iconDefaultStyles from "../../mooks/iconDefaultStyles.json";
import { RightArrowIcon } from "../../commons/icons/RightArrowIcon";
import UnderlineAnimation from "../../commons/underlineAnimation/UnderlineAnimation";
import projectImg from "../../assets/img/trabajo-img.jpg";

//*Frontend
import { ReactIcon } from "../../commons/icons/techs/front/ReactIcon";
import { CssIcon } from "../../commons/icons/techs/front/CssIcon";
import { JavascriptIcon } from "../../commons/icons/techs/front/JavascriptIcon";
// import { NextIcon } from "../../commons/icons/techs/front/NextIcon";
// import { ReduxIcon } from "../../commons/icons/techs/front/ReduxIcon";
//*Backend
import { FirebaseIcon } from "../../commons/icons/techs/back/FirebaseIcon";

const projectsData = [
  {
    title: "Box - Plataforma 5",
    description: {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
    },

    img: projectImg,
    link: "https://www.google.com",
    id: 1,
    techs: {
      front: ["next", "tailwind", "redux", "typescript"],
      back: ["nest", "mongodb", "typescript"],
    },
  },
  {
    title: "Onefeel - Plataforma 5",
    description: {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
    },
    img: projectImg,
    link: "https://www.google.com",
    id: 2,
    techs: { front: ["react", "sass", "redux"], back: ["firebase", "openai"] },
  },
  {
    title: "E-Wine - Plataforma 5",
    description: {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
    },
    img: projectImg,
    link: "https://www.google.com",
    id: 3,
    techs: {
      front: ["react", "sass", "redux"],
      back: ["express", "postgress"],
    },
  },
  {
    title: "TMDBFLIX",
    description: {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
    },
    img: projectImg,
    link: "https://www.google.com",
    id: 4,
    techs: {
      front: ["react", "sass", "redux"],
      back: ["express", "postgress"],
    },
  },
];

const ProjectsList = ({ language, project }) => {
  return (
    <li className="projectsList__item">
      <div className="projectsList__item__content">
     
        <div className="projectsList__container__title">
          <motion.h2>{project.title}</motion.h2>
        </div>
      </div>

      <motion.div className="projectsList__item__description">
        <motion.figcaption>
          <img src={project.img} alt={project.title} />
        </motion.figcaption>

        <motion.div className="projectsList__item__description__container">
          <div className="projectsList__item__description__text">
            <strong>{project.description[language]}</strong>
          </div>

          <motion.div className="projectsList__item__description__footer">
            <button>
              {language === "en" ? "View Project" : "Ver Proyecto"}
            </button>
            <button>{language === "en" ? "View Code" : "Ver Código"}</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </li>
  );
};

export const Projects = ({ language }) => {
  return (
    <div className="projects__main">
      <div className="aboutme__title">
        <h3>{language == "en" ?  "projects" : "proyectos"}</h3>
      </div>

      <div className="projects__container">
        <ul className="projectsList__main">
          {projectsData.map((project, index) => {
            return (
              <ProjectsList key={index} language={language} project={project} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
