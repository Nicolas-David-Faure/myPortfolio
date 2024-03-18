import React, { useState } from "react";
//styles
import "./projects.scss";
//framer motion
import { AnimatePresence, motion } from "framer-motion";
//icons
import { ArrowRightIcon } from "../../commons/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "../../commons/icons/ArrowLeftIcon";
//photos
import photo1 from "./photos_slider/photo_1.jpg";
import photo2 from "./photos_slider/photo_2.jpg";
import photo3 from "./photos_slider/photo_3.jpg";
import photo4 from "./photos_slider/photo_4.jpg";
import photo5 from "./photos_slider/photo_5.jpg";
import photo6 from "./photos_slider/photo_6.jpg";
import photo7 from "./photos_slider/photo_7.jpg";
import photo8 from "./photos_slider/photo_8.jpg";
import photo9 from "./photos_slider/photo_9.jpg";
import photo10 from "./photos_slider/photo_10.jpg";
import photo11 from "./photos_slider/photo_11.jpg";
import photo12 from "./photos_slider/photo_12.jpg";
import photo13 from "./photos_slider/photo_13.jpg";


const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
];


export const Projects = ({ language }) => {
  return (
    <section className="projects__main">
      <div className="aboutme__title">
        <h3>{language == "en" ? "projects" : "proyectos"}</h3>
      </div>

      <ProjectsSlider />
    </section>
  );
};

const ProjectsSlider = ({ language }) => {
  const [currentCards, setCurrentCards] = useState(2);
  const cardsLength = photos.length;
  const cardsToShow = 3;
  const cardsDivided = Math.ceil(cardsLength / cardsToShow);
  const cardsDisplayed = photos.slice(currentCards, currentCards + cardsToShow);


  const handleNextCard = () => {
    if (currentCards === cardsLength - 1) {
      setCurrentCards(0);
    } else {
      setCurrentCards(currentCards + 1);
    }
  }
  const handlePrevCard = () => {
    if (currentCards === 0) {
      setCurrentCards(cardsLength - 1);
    } else {
      setCurrentCards(currentCards - 1);
    }
  }


  return (
    <div className="projects__slider">
      <button
        onClick={handleNextCard}
      className="projects__slider_arrowbtn projects__slider_arrowbtn_right">
        {" "}
        <ArrowLeftIcon />
      </button>
      <button 
      onClick={handlePrevCard}
      className="projects__slider_arrowbtn projects__slider_arrowbtn_left">
        <ArrowRightIcon />{" "}
      </button>

      <div className="projects__slider_container">

        {cardsDisplayed.map((card, index) => (
          <ProjectSliderCard img={card} key={index} />
        ))}

      </div>
        <ProjectSliderCardSelector cardsDivided={cardsDivided} />
    </div>
  );
};

const ProjectSliderCardSelector = ({ cardsDivided }) => {
  

  return (
    <div className="projects__slider_selector">
      {Array.from({ length: cardsDivided }, (_, i) => (
        <div className="projects__slider_selector_btn" key={i}></div>
      ))}
    </div>
  );

}


const ProjectSliderCard = ({ img }) => {
  const [cardIsHovered, setCardIsHovered] = useState(false);


  const animateEntry = {
   on:{
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.3,
    },
   },
   off: {
    opacity: 0,
    top: "100%",
    transition: {
      duration: 0.3,
    },
   }
  };
  return (
    <motion.div
      onHoverStart={() => setCardIsHovered(true)}
      onHoverEnd={() => setCardIsHovered(false)}
      className="projects__slider_container_card"
    >
      <img src={img} alt="project" />
      {cardIsHovered && (
        <AnimatePresence >
          <motion.div 
          
          initial={animateEntry.off}
          animate={animateEntry.on}
          exit={animateEntry.off}          
          className="projects__slider_container_card_info">

            <h2>Hola esta es la info</h2>
          </motion.div>
        </AnimatePresence>
        )}
    </motion.div>
  );
};

// import { FirebaseIcon } from "../../commons/icons/techs/back/FirebaseIcon";

// //*Frontend
// import { ReactIcon } from "../../commons/icons/techs/front/ReactIcon";
// import { CssIcon } from "../../commons/icons/techs/front/CssIcon";
// import { JavascriptIcon } from "../../commons/icons/techs/front/JavascriptIcon";
// // import { NextIcon } from "../../commons/icons/techs/front/NextIcon";
// // import { ReduxIcon } from "../../commons/icons/techs/front/ReduxIcon";
// //*Backend
// const projectsData = [
//   {
//     title: "Box - Plataforma 5",
//     description: {
//       en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//       es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//     },

//     img: projectImg,
//     link: "https://www.google.com",
//     id: 1,
//     techs: {
//       front: ["next", "tailwind", "redux", "typescript"],
//       back: ["nest", "mongodb", "typescript"],
//     },
//   },
//   {
//     title: "Onefeel - Plataforma 5",
//     description: {
//       en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//       es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//     },
//     img: projectImg,
//     link: "https://www.google.com",
//     id: 2,
//     techs: { front: ["react", "sass", "redux"], back: ["firebase", "openai"] },
//   },
//   {
//     title: "E-Wine - Plataforma 5",
//     description: {
//       en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//       es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//     },
//     img: projectImg,
//     link: "https://www.google.com",
//     id: 3,
//     techs: {
//       front: ["react", "sass", "redux"],
//       back: ["express", "postgress"],
//     },
//   },
//   {
//     title: "TMDBFLIX",
//     description: {
//       en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//       es: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum sapiente quasi pariatur dolor hic architecto iure, aspernatur earum optio, expedita maxime, aliquam fugit soluta quis dolore dolorem exercitationem ratione!",
//     },
//     img: projectImg,
//     link: "https://www.google.com",
//     id: 4,
//     techs: {
//       front: ["react", "sass", "redux"],
//       back: ["express", "postgress"],
//     },
//   },
// ];
