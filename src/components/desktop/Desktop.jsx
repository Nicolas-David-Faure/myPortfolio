import React, { useState } from "react";
//*Styles
import "./desktop.scss";
//*Mooks
import { data_folders } from "../../mooks/folders.json";
import { Projects } from "../projects/Projects";
import { Home } from "../home/Home";
import { Aboutme } from "../aboutme/Aboutme";
import { Contact } from "../contact/Contact";
//*Components


const Desktop = ({ language }) => {

  return (
    <div className="desktop__main">
      <Home  language={language}/>
      <Aboutme language={language} />
      <Projects language={language} />
      <Contact  language={language} />
    </div>
  );
};

export default Desktop;








