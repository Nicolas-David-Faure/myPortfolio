import React, { useState, useRef, useEffect } from "react";
//styles
import "./projects.scss";
//framer motion
import { AnimatePresence, motion } from "framer-motion";
//icons
import { ArrowRightIcon } from "../../commons/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "../../commons/icons/ArrowLeftIcon";
//cards
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
import { useSelector } from "react-redux";

const photosarray = [
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
];

const cardsArray = [
  {
    img: photo1,
    id: 1,
  },
  {
    img: photo2,
    id: 2,
  },
  {
    img: photo3,
    id: 3,
  },
  {
    img: photo4,
    id: 4,
  },
  {
    img: photo5,
    id: 5,
  },
  {
    img: photo6,
    id: 6,
  },
  {
    img: photo7,
    id: 7,
  },
  {
    img: photo8,
    id: 8,
  },
  {
    img: photo9,
    id: 9,
  },
  {
    img: photo10,
    id: 10,
  },
  {
    img: photo11,
    id: 11,
  },
  {
    img: photo12,
    id: 12,
  },


]



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
  const { screenWidth } = useSelector((state) => state.screenSlice);

  const [cards, setCards] = useState(cardsArray);
  const [currentCards, setCurrentCards] = useState(0);
  const [direction, setDirection] = useState(false);
  const refProjectsSlider = useRef(null);

  const cardsLength = cards.length;
  const cardsToShow = screenWidth > 768 ? 3 : screenWidth > 600 ? 2 : 1;
  const cardsDivided = Math.ceil(cardsLength / cardsToShow);
  const cardsDisplayed = cards.slice(currentCards, currentCards + cardsToShow);

  





  const handlePrevCard = () => {
    setDirection(false);

    if (currentCards === 0) {
      // Si estamos en la primera tarjeta, volvemos al final del array
      setCards((prev) => {
        const cardsCopy = [...prev]; // Copia el array de fotos
        const lastPhoto = cardsCopy.pop(); // Remueve el último elemento
        cardsCopy.unshift(lastPhoto); // Agrega el último elemento al principio
        return cardsCopy; // Retorna el nuevo array
      });
    } else {
      // Si no estamos en la primera tarjeta, simplemente retrocedemos una tarjeta
      setCurrentCards(currentCards - 1);
    }
  };

  const handleNextCard = () => {
    setDirection(true);

    if (currentCards === cardsLength - 3) {
      setCards((prev) => {
        const cardsCopy = [...prev];
        const cardshift = cardsCopy.shift();

        cardsCopy.push(cardshift);
        return cardsCopy;
      });
    } else {
      setCurrentCards(currentCards + 1);
    }
  };

  const uniqueKeyGenerator = (i) => {
    return Math.random(i * 5)
      .toString(36)
      .substr(2, 9);
  };

  const handleDrag = (event, info) => {
    console.log(event)

 
    if (info.point.x >  600) {
      handlePrevCard();
    }
    if (info.point.x < -400) {
      handleNextCard();
    }
  };

  return (
    <div className="projects__slider">
      {screenWidth > 600 && (
        <>
          <button
            onClick={handlePrevCard}
            className="projects__slider_arrowbtn projects__slider_arrowbtn_right"
          >
            {" "}
            <ArrowLeftIcon />
          </button>
          <button
            onClick={handleNextCard}
            className="projects__slider_arrowbtn projects__slider_arrowbtn_left"
          >
            <ArrowRightIcon />{" "}
          </button>
        </>
      )}

      <motion.div
        drag="x"
        onDragEnd={handleDrag}
        dragConstraints={{ left: 0, right: 0 }}
        ref={refProjectsSlider}
        className="projects__slider_container"
        onTap={() => console.log("tapped")}
      >
        {cardsDisplayed.map((card, i) => {
          return (
            <ProjectSliderCard
              key={uniqueKeyGenerator(i)}
              img={card.img}
              screenWidth={screenWidth}
              direction={direction}
              
            />
          );
        })}
      </motion.div>

      <ProjectSliderCardSelector cardsToShow={cardsToShow} cardsLength={cardsLength} cardsDisplayed={cardsDisplayed}  cardsDivided={cardsDivided} />
    </div>
  );
};

const ProjectSliderCard = ({ img, direction  , screenWidth}) => {
  const [cardIsHovered, setCardIsHovered] = useState(false);

  const animateEntry = {
    on: {
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
    },
  };

  return (
    <motion.div
      layout
      onHoverStart={() => setCardIsHovered(true)}
      onHoverEnd={() => setCardIsHovered(false)}
      className="projects__slider_container_card"
      // onTap={() =>
      // onTouchEnd={()=>setCardIsHovered(!cardIsHovered)}
    >
      <AnimatePresence>
        <motion.img
          key={img}
          layout
          initial={{ opacity: 0.2, x: direction ? "200%" : "-200%" }}
          animate={{ opacity: 1, x: 0 }} // Ajustar la duración y la transición
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type:  "spring",
            stiffness: 100,

            delay: screenWidth > 600 ? 0: 0.2,
          }}
          exit={{ opacity: 1, x: direction ? "-100%" : "100%" }}
          src={img}
          alt="project"
        />
      </AnimatePresence>

      <AnimatePresence>
        {cardIsHovered && (
          <motion.div
            initial={"off"}
            animate={"on"}
            exit={"off"}
            variants={animateEntry}
            className="projects__slider_container_card_info"
          >
            <h2>Hola esta es la info</h2>
          </motion.div>
        )}

        
      </AnimatePresence>
    </motion.div>
  );
};
const ProjectSliderCardSelector = ({ cardsLength , cardsDisplayed  , cardsToShow }) => {

  

  return (
    <div className="projects__slider_selector ">
      {Array.from({ length: cardsLength }, (card, i) => (
        <div className={`projects__slider_selector_btn ${cardsDisplayed.find(card  =>  card.id -1 === i  ) ? 'projects__slider_selector_btn_selected': '' } `} key={i * 1235}></div>
      ))}
    </div>
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
