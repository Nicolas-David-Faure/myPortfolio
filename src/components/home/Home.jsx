import React from "react";
import "./home.scss";
import { GithubIcon } from "../../commons/icons/GithubIcon";
import { LinkedinIcon } from "../../commons/icons/LinkedinIcon";

import { MailIcon } from "../../commons/icons/MailIcon";

export const Home = ({ language }) => {
  return (
    <div className="home__container">
      <div className="home__main">
        <Title language={language} />
        <InfoProfile language={language} />
      </div>
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
      <GithubIcon styles={iconStyles} />
      <LinkedinIcon styles={iconStyles} />
      <MailIcon styles={iconStyles} />
    </div>
  );
};
