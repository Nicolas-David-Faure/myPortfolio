import React, { useState, useEffect } from "react";
import "./projects.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { infoProjects } from "../../mooks/infoProjects";
import ReactPlayer from "react-player/youtube";
import { arrayLogos } from "../../mooks/logosSkill";
import gitHubLogo from "../../assets/img/logo-skills/Github.png";
import { setHeaderVisibility } from "../../store/slice/activityBar/activityBarSlice";

export const Projects = ({ language }) => {
  return (
    <section className="projects__main">
      <div className="projects__header">
        <h3 id="projects">
          {language === "en" ? "Projects" : "Proyectos"}
        </h3>
        <p className="projects__subtitle">
          {language === "en" 
            ? "Here are some of the projects I've worked on" 
            : "Aquí tienes algunos de los proyectos en los que he trabajado"
          }
        </p>
      </div>

      <ProjectsGrid language={language} />
    </section>
  );
};

const ProjectsGrid = ({ language }) => {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setProjects(infoProjects[language] || []);
  }, [language]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    dispatch(setHeaderVisibility(false)); // Oculta el header
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
    dispatch(setHeaderVisibility(true)); // Muestra el header
  };

  const filters = [
    { id: "all", label: language === "en" ? "All" : "Todos" },
    { id: "fullstack", label: "Fullstack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.application_type?.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="projects__container">
      {/* Filters */}
      <div className="projects__filters">
        {filters.map((filterOption) => (
          <button
            key={filterOption.id}
            className={`projects__filter-btn ${filter === filterOption.id ? 'active' : ''}`}
            onClick={() => setFilter(filterOption.id)}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects__grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            language={language}
            onSelect={() => handleProjectSelect(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            language={language}
            onClose={handleProjectClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, index, language, onSelect }) => {
  const logosFiltered = arrayLogos.filter((logo) => 
    project.techs?.includes(logo.id)
  );

  return (
    <motion.div
      className="project__card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      onClick={onSelect}
    >
      <div className="project__card-image">
        <img src={project.img} alt={project.title} />
        <div className="project__card-overlay">
          <button className="project__card-view-btn">
            {language === "en" ? "View Details" : "Ver Detalles"}
          </button>
        </div>
      </div>

      <div className="project__card-content">
        <div className="project__card-header">
          <h4 className="project__card-title">{project.title}</h4>
          <span className="project__card-year">{project.year}</span>
        </div>

        <p className="project__card-type">{project.application_type}</p>
        
        <p className="project__card-description">
          {project.description?.length > 100 
            ? `${project.description.substring(0, 100)}...` 
            : project.description
          }
        </p>

        <div className="project__card-techs">
          {logosFiltered.slice(0, 4).map((tech, i) => (
            <motion.img
              key={tech.id}
              src={tech.logo}
              alt={tech.id}
              style={{ width: tech.id === 8 ? 30 : 25 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
          {logosFiltered.length > 4 && (
            <span className="project__card-more-techs">
              +{logosFiltered.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, language, onClose }) => {
  const logosFiltered = arrayLogos.filter((logo) => 
    project.techs?.includes(logo.id)
  );

  return (
    <motion.div
      className="project__modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project__modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project__modal-close" onClick={onClose}>
          ×
        </button>

        <div className="project__modal-content">
          <div className="project__modal-header">
            <h2>{project.title}</h2>
            <div className="project__modal-meta">
              <span className="project__modal-year">{project.year}</span>
              <span className="project__modal-type">{project.application_type}</span>
              {project.duration && (
                <span className="project__modal-duration">{project.duration}</span>
              )}
            </div>
          </div>

          <div className="project__modal-body">
            <div className="project__modal-media">
              <img src={project.img} alt={project.title} />
              {project.video && (
                <div className="project__modal-video">
                  <ReactPlayer
                    url={`https://www.youtube.com/${project.video}`}
                    width="100%"
                    height="200px"
                    controls={true}
                    volume={0}
                  />
                </div>
              )}
            </div>

            <div className="project__modal-info">
              <div className="project__modal-section">
                <h3>{language === "en" ? "Description" : "Descripción"}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project__modal-section">
                <h3>{language === "en" ? "Technologies" : "Tecnologías"}</h3>
                <div className="project__modal-techs">
                  {logosFiltered.map((tech) => (
                    <div key={tech.id} className="project__modal-tech">
                      <img 
                        src={tech.logo} 
                        alt={tech.id}
                        style={{ width: tech.id === 8 ? 40 : 35 }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="project__modal-section">
                <h3>{language === "en" ? "Functionalities" : "Funcionalidades"}</h3>
                {Array.isArray(project.functionalities) ? (
                  <ul className="project__modal-functionalities">
                    {project.functionalities.map((func, i) => (
                      <li key={i}>{func}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="project__modal-functionalities-grouped">
                    {Object.entries(project.functionalities || {}).map(([title, values], i) => (
                      <div key={i} className="project__modal-functionality-group">
                        <h4>{title}</h4>
                        <ul>
                          {values.map((value, j) => (
                            <li key={j}>{value}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {project.contributors && (
                <div className="project__modal-section">
                  <h3>{language === "en" ? "Contributors" : "Contribuidores"}</h3>
                  <div className="project__modal-contributors">
                    {project.contributors.map((contributor, i) => (
                      <span key={i} className="project__modal-contributor">
                        {contributor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.repositories && (
                <div className="project__modal-section">
                  <h3>{language === "en" ? "Repositories" : "Repositorios"}</h3>
                  <div className="project__modal-repositories">
                    {Object.entries(project.repositories).map(([type, url], i) => {
                      if (!url || url === "cant show") return null;
                      return (
                        <a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project__modal-repo-link"
                        >
                          <img src={gitHubLogo} alt="GitHub" />
                          <span>
                            {type === "server" ? "API" : type === "client" ? "Client" : type}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
