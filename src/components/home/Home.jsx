import React from "react";
import "./home.scss";
import { GithubIcon } from "../../commons/icons/GithubIcon";
import { LinkedinIcon } from "../../commons/icons/LinkedinIcon";
import { DownloadIcon } from "../../commons/icons/DownloadIcon";
import { MailIcon } from "../../commons/icons/MailIcon";
import { Parallax } from "react-parallax";
import fondo from '../../assets/img/undertheocean.jpg'
export const Home = ({ language }) => {
  return (
    <div id="home"  className="home__container">
        {/* <Parallax
          style={{ height: '100%', width: '100%' }}
          className="parallax"
          blur={{ min: -15, max: 15 }}
          bgImage={fondo}
          strength={500}
        > */}

      <div className="home__main">
        <Title language={language} />
        <InfoProfile language={language} />
      </div>

        {/* </Parallax> */}
    </div>
  );
};

const Title = ({ language }) => {
  return (
    <div className="home__title">
      <h1>Nicolás Faure</h1>
      <h2>
        {language === "en"
          ? "Full stack web developer"
          : "Desarrollador web full stack"}
      </h2>

      <a href="../../../public/Nicolas_Faure_CV_09012024.pdf" download> 


      <button className="home__downloadCV">
        <DownloadIcon
          styles={{
            height: "1.5rem",
            width: "1.5rem",
            fill: "rgba(255, 255, 255, 0.8)",
          }}
        />{" "}
        {language === "en" ? "Download CV" : "Descargar CV"}
      </button>
      </a>
    </div>
  );
};

const InfoProfile = ({ language }) => {

  const iconStyles = {
    height: "4rem",
    width: "4rem",
    fill: "rgba(255, 255, 255, 0.8)",
  };





  return (
    <div className="home__infoProfile">
      <a href="https://github.com/Nicolas-David-Faure" target="_blank">

        <GithubIcon styles={iconStyles} />

      </a>
      <a href="https://www.linkedin.com/in/nicolas-david-faure-b023ba240/" target="_blank">

      < LinkedinIcon styles={iconStyles} />

      </a>
      <a href="mailto:nicolas.david.faure@gmail.com" target="_blank">

        <MailIcon styles={iconStyles} />

      </a>
    </div>
  );
};
