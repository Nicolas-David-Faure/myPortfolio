import React, { useState, useEffect } from "react";
import "./home.scss";
import { GithubIcon } from "../../commons/icons/GithubIcon";
import { LinkedinIcon } from "../../commons/icons/LinkedinIcon";
import { DownloadIcon } from "../../commons/icons/DownloadIcon";
import { MailIcon } from "../../commons/icons/MailIcon";
import { motion } from "framer-motion";

import cvNicolas from '/Nicolas_Faure_CV_18082025.pdf'
import cvNicolasES from '/cv_es_nicolas_faure.pdf'

export const Home = ({ language }) => {
  return (
    <div id="home" className="home__container">
      {/* Background Elements - Coherentes con el tema */}
      <div className="home__background">
        {/* Sombras de fondo similares a App.scss */}
        <div className="home__background-shadow home__background-shadow-1"></div>
        <div className="home__background-shadow home__background-shadow-2"></div>
        <div className="home__background-shadow home__background-shadow-3"></div>
        
        {/* Efectos de cristal sutiles */}
        <div className="home__glass-elements">
          <motion.div
            className="home__glass-element home__glass-element-1"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="home__glass-element home__glass-element-2"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="home__glass-element home__glass-element-3"
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
      </div>

      <motion.div 
        className="home__main"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Title language={language} />
        <InfoProfile language={language} />
        
        {/* Scroll indicator */}
        <motion.div 
          className="home__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="home__scroll-arrow">↓</div>
          <span>{language === "en" ? "Scroll to explore" : "Desplázate para explorar"}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Title = ({ language }) => {


  const [cv, setCv] = useState(cvNicolas);

  useEffect(() => {
    if (language === "es") {
      setCv(cvNicolasES);
    } else {
      setCv(cvNicolas);
    }
  }, [language]);
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="home__title"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="home__title-badge" variants={itemVariants}>
        <span>{language === "en" ? "👋 Hello, I'm" : "👋 Hola, soy"}</span>
      </motion.div>
      
      <motion.h1 variants={itemVariants}>
        Nicolás Faure
      </motion.h1>
      
      <motion.h2 variants={itemVariants}>
        {language === "en"
          ? "Full Stack Web Developer"
          : "Desarrollador Web Full Stack"}
      </motion.h2>
      
      <motion.p 
        className="home__title-description"
        variants={itemVariants}
      >
        {language === "en"
          ? "Crafting digital experiences with modern technologies and creative solutions"
          : "Creando experiencias digitales con tecnologías modernas y soluciones creativas"}
      </motion.p>

      <motion.div 
        className="home__title-actions"
        variants={itemVariants}
      >
        <motion.a 
          href={cv} 
          download
          className="home__downloadCV"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <DownloadIcon
            styles={{
              height: "1.5rem",
              width: "1.5rem",
              fill: "rgba(255, 255, 255, 0.9)",
            }}
          />
          <span>{language === "en" ? "Download CV" : "Descargar CV"}</span>
        </motion.a>
        
        <motion.a 
          href="#projects"
          className="home__view-projects"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{language === "en" ? "View Projects" : "Ver Proyectos"}</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="home__arrow-right"
          >
            →
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const InfoProfile = ({ language }) => {
  const iconStyles = {
    height: "3.5rem",
    width: "3.5rem",
    fill: "rgba(255, 255, 255, 0.9)",
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="home__infoProfile"
      variants={socialVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a 
        href="https://github.com/Nicolas-David-Faure" 
        target="_blank"
        rel="noopener noreferrer"
        variants={socialItemVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="home__social-link"
      >
        <GithubIcon styles={iconStyles} />
        <span className="home__social-tooltip">GitHub</span>
      </motion.a>
      
      <motion.a 
        href="https://www.linkedin.com/in/nicolas-david-faure-b023ba240/" 
        target="_blank"
        rel="noopener noreferrer"
        variants={socialItemVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="home__social-link"
      >
        <LinkedinIcon styles={iconStyles} />
        <span className="home__social-tooltip">LinkedIn</span>
      </motion.a>
      
      <motion.a 
        href="mailto:nicolas.david.faure@gmail.com"
        variants={socialItemVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="home__social-link"
      >
        <MailIcon styles={iconStyles} />
        <span className="home__social-tooltip">Email</span>
      </motion.a>
    </motion.div>
  );
};
