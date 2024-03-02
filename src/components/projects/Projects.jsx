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
import { TechsGallery } from "./TechsGallery";

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
  const [mauseEnterState, setMauseEnterState] = useState(false);
  const [toggleProject, setToggleProject] = useState(false);
  const handleMouseEnter = (e) => {
    setMauseEnterState(true);
  };
  const handleMouseLeave = (e) => {
    setMauseEnterState(false);
  };

  const handleToggleProject = () => setToggleProject(!toggleProject);

  const arrowVariants = {
    on: { rotate: 90 },
    off: { rotate: 0 },
  };

  const descriptionVariants = {
    on: { height: "auto", opacity: 1 },
    off: { height: 0, opacity: 0 },
  };

  const projectsVariants = {
    on: { opacity: [0, 0, 0.4, 1], x: 0, y: 0, zIndex: 1 },
    off: { opacity: 0, zIndex: -1, y: -50 },
  };

  return (
    <li className="projectsList__item">
      <div className="projectsList__item__content">
        <motion.div
          initial="off"
          animate={toggleProject ? "on" : "off"}
          variants={arrowVariants}
          className="projectsList__item__icon"
        >
          <RightArrowIcon
            style={{ ...iconDefaultStyles, width: 20, height: 20 }}
          />
        </motion.div>

        <div className="projectsList__container__title">
          <motion.h2
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleProject}
          >
            {project.title}
          </motion.h2>
          <UnderlineAnimation
            toggleProject={toggleProject}
            onHoverMauseState={mauseEnterState}
            color="#3498db"
            height={2}
          />
        </div>
      </div>

      <motion.div
        initial="off"
        animate={toggleProject ? "on" : "off"}
        variants={descriptionVariants}
        transition={{ duration: 0.5 }}
        className="projectsList__item__description"
      >
        <AnimatePresence>
          {
            <>
              <motion.figcaption
                initial={{ opacity: 0, y: -50, zIndex: -1 }}
                animate={toggleProject ? "on" : "off"}
                variants={projectsVariants}
                transition={{
                  duration: toggleProject ? 1 : 0.1,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <img src={project.img} alt={project.title} />
              </motion.figcaption>

              <motion.div
                initial={{ opacity: 0, x: 0, y: -50, zIndex: -1 }}
                animate={toggleProject ? "on" : "off"}
                variants={projectsVariants}
                transition={{
                  duration: toggleProject ? 1 : 0.1,

                  delay: 0.6,
                  type: "spring",
                  stiffness: 50,
                }}
                className="projectsList__item__description__container"
              >
                <div className="projectsList__item__description__text">
                  <strong>{project.description[language]}</strong>
                </div>



                
                <motion.div
                  initial={{ opacity: 0, zIndex: -1, y: -50 }}
                  animate={toggleProject ? "on" : "off"}
                  variants={projectsVariants}
                  transition={{
                    duration: toggleProject ? 1 : 0.1,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="projectsList__item__description__footer"
                >
                  <button>
                    {language === "en" ? "View Project" : "Ver Proyecto"}
                  </button>
                  <button>
                    {language === "en" ? "View Code" : "Ver Código"}
                  </button>
                </motion.div>
              </motion.div>
            </>
          }
        </AnimatePresence>
      </motion.div>
    </li>
  );
};

export const Projects = ({ language }) => {
  return (
    <div className="projects__main">
      <div className="projects__container">
        <div className="projects__header">
          <h1>{language === "en" ? "Projects" : "Proyectos"}</h1>
        </div>

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
