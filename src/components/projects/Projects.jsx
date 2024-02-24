import React, { useState } from "react";
import "./projects.scss";
import { motion } from "framer-motion";
import iconDefaultStyles from "../../mooks/iconDefaultStyles.json";
import { RightArrowIcon } from "../../commons/icons/RightArrowIcon";
import UnderlineAnimation from "../../commons/underlineAnimation/UnderlineAnimation";
const projectsData = {
  en: [
    {
      title: "Onefeel - Plataforma 5",
      description: "This is a description of the project 1",
      img: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      id: 1,
    },
    {
      title: "E-Wine - Plataforma 5",
      description: "This is a description of the project 2",
      img: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      id: 2,
    },
    {
      title: "E-Commerce - Plataforma 5",
      description: "This is a description of the project 3",
      img: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      id: 3,
    },
  ],
  es: [
    {
      title: "Onefeel - Plataforma 5",
      description: "Esta es una descripción del proyecto 1",
      img: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      id: 1,
    },
    {
      title: "E-Wine - Plataforma 5",
      description: "Esta es una descripción del proyecto 2",
      img: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      id: 2,
    },
    {
      title: "E-Commerce - Plataforma 5",
      description: "Esta es una descripción del proyecto 3",
      img: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      id: 3,
    },
  ],
};

const ProjectsList = ({ language, project }) => {
  const [mauseEnterState, setMauseEnterState] = useState(false);
  const handleMouseEnter = (e) => {
    setMauseEnterState(true);
  };
  const handleMouseLeave = (e) => {
    setMauseEnterState(false);
  };

  return (
    <li className="projectsList__item">
      <div className="projectsList__item__content">
        <div className="projectsList__item__icon">
          <RightArrowIcon
            style={{ ...iconDefaultStyles, width: 20, height: 20 }}
          />
        </div>

        <div className="projectsList__container__title">
          <motion.h2
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {project.title}
          </motion.h2>
          <UnderlineAnimation onHoverMauseState={mauseEnterState} color="#3498db" height={2} />
        </div>
      </div>
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
              <ProjectsList
                key={index}
                language={language}
                project={project}
                
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
