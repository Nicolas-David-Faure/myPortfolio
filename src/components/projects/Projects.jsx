import React, { useState } from "react";
import "./projects.scss";
import { motion } from "framer-motion";
import iconDefaultStyles from "../../mooks/iconDefaultStyles.json";
import { RightArrowIcon } from "../../commons/icons/RightArrowIcon";
import UnderlineAnimation from "../../commons/underlineAnimation/UnderlineAnimation";
import projectImg from "../../assets/img/trabajo-img.jpg";

const projectsData = {
  en: [
    {
      title: "Onefeel - Plataforma 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      img: projectImg,
      link: "https://www.google.com",
      id: 1,

    },
    {
      title: "E-Wine - Plataforma 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      img: projectImg,
      link: "https://www.google.com",
      id: 2,
    },
    {
      title: "TMDBFLIX",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      img: projectImg,
      link: "https://www.google.com",
      id: 3,
    },
  ],
  es: [
    {
      title: "Onefeel - Plataforma 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      img: projectImg,
      link: "https://www.google.com",
      id: 1,
    },
    {
      title: "E-Wine - Plataforma 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      img: projectImg,
      link: "https://www.google.com",
      id: 2,
    },
    {
      title: "TMDBFLIX",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
      img: projectImg,
      link: "https://www.google.com",
      id: 3,
    },
  ],
};

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
        {toggleProject && (
          <>
            <figcaption>
              <img src={project.img} alt={project.title} />
            </figcaption>

            <div className="projectsList__item__description__container">
              <div className="projectsList__item__description__text">
                <strong>{project.description}</strong>
              </div>

              <div className="projectsList__item__description__footer">
                <button>
                  {language === "en" ? "View Project" : "Ver Proyecto"}
                </button>
                <button>
                  {language === "en" ? "View Code" : "Ver Código"}
                </button>
              </div>
            </div>
          </>
        )}
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
          {projectsData[language].map((project, index) => {
            return (
              <ProjectsList key={index} language={language} project={project} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
