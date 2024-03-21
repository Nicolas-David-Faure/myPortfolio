import React, { useState, useRef, useEffect } from "react";
//styles
import "./projects.scss";
//framer motion
import { AnimatePresence, motion } from "framer-motion";
//icons
import { ArrowRightIcon } from "../../commons/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "../../commons/icons/ArrowLeftIcon";

import { useSelector } from "react-redux";


import { infoProjects } from "../../mooks/infoProjects";





export const Projects = ({ language }) => {
  return (
    <section className="projects__main">
      <div className="aboutme__title">
        <h3>{language == "en" ? "projects" : "proyectos"}</h3>
      </div>

      <ProjectsSlider language={language} />
    </section>
  );
};

const ProjectsSlider = ({ language  }) => {

  
  const { screenWidth } = useSelector((state) => state.screenSlice);

  const [cards, setCards] = useState(infoProjects[language]);
  const [currentCards, setCurrentCards] = useState(0);
  const [direction, setDirection] = useState(false);
  const refProjectsSlider = useRef(null);

  const cardsLength = cards.length;
  const cardsToShow = screenWidth > 768 ? 3 : screenWidth > 600 ? 2 : 1;
  const cardsDivided = Math.ceil(cardsLength / cardsToShow);
  const cardsDisplayed = cards.slice(currentCards, currentCards + cardsToShow);

  
  
  useEffect(() => {
    setCards(infoProjects[language]);
  }, [language]);



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
    console.log(info.point.x)

 
    if (info.point.x >  500) {
      handlePrevCard();
    }
    if (info.point.x < -300) {
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
                screenWidth={screenWidth}
                direction={direction}
                infoCard={card}
              />
            );
          })}
     
      </motion.div>

      <ProjectSliderCardSelector cardsToShow={cardsToShow} cardsLength={cardsLength} cardsDisplayed={cardsDisplayed}  cardsDivided={cardsDivided} />
    </div>
  );
};

const ProjectSliderCard = ({ infoCard, direction  , screenWidth}) => {
  const [cardIsHovered, setCardIsHovered] = useState(false);



  return (
    <motion.div
      layout
      onHoverStart={() => setCardIsHovered(true)}
      onHoverEnd={() => setCardIsHovered(false)}
  
      className="projects__slider_container_card"
      // onTap={() =>
      onTouchEnd={()=>setCardIsHovered(!cardIsHovered)}
    >
      <AnimatePresence>
        <motion.img
          key={infoCard.img}
          layout
          initial={{ opacity: 0.2, x: direction ? "200%" : "-200%" }}
          animate={{ opacity: 1, x: 0 }} // Ajustar la duración y la transición
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type:  "tween",
            stiffness:   screenWidth > 600 ? 100: 800,

            delay: screenWidth > 600 ? 0: 0.2,
          }}
          exit={{ opacity: 1, x: direction ? "-100%" : "100%" }}
          src={infoCard.img}
          alt="project"
        />
      </AnimatePresence>

      <AnimatePresence>
        {cardIsHovered && (
         <ProjectSliderCardInfo infoCard={infoCard} />
        )}

        
      </AnimatePresence>
    </motion.div>
  );
};
  const ProjectSliderCardInfo = ({ infoCard }) => {



  // {
  //   "id": 1,
  //   "title": "Box-Delivery",
  //   "application_type": "Fullstack",
  //   "fronted": ["reduxjs toolkit", "next", "docker", "tailwind css", "Typescript"],
  //   "backend": ["bcryptjs", "mongoose", "jwt", "swagger-ui-express"],
  //   "year": "2023-2024",
  //   "duration": "3 meses",
  //   "functionalities": {
  //     "GERENTE": [
  //       "Inicio de sesión",
  //       "Ver historial de programación por fecha",
  //       "Ver historial de entregas",
  //       "Ver actividad de los repartidores",
  //       "Ver el número de paquetes para cada repartidor",
  //       "Crear paquetes",
  //       "Ver paquetes",
  //       "Editar paquetes",
  //       "Eliminar paquetes"
  //     ],
  //     "REPARTO": [
  //       "Registro",
  //       "Inicio de sesión",
  //       "Recuperación de contraseña",
  //       "Seleccionar paquetes (máximo 10)",
  //       "Ver entregas pendientes",
  //       "Ver historial de entregas",
  //       "Eliminar historial de entregas",
  //       "Aceptar declaración de entrega"
  //     ],
  //     "OTRO": [
  //       "Persistencia de sesión",
  //       "Responsivo",
  //       "Localizar al repartidor y mostrarle hacia dónde se dirige en el mapa",
  //       "Sistema de puntos para paquetes entregados y penalizaciones por no completar entregas"
  //     ]
  //   },
  //   "contributors": ["Victoria Canclini", "Ivan Lucana", "Florencia Martinez", "German Cuevas"],
  //   "img": photo1,
  //   "video": "watch?v=o2HyftVzWe0"
  // }



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
      initial={"off"}
      animate={"on"}
      exit={"off"}
      variants={animateEntry}
      className="projects__slider_container_card_info"
    >
      <div className="projects__slider_container_card_info_video"></div>
      <div className="projects__slider_container_card_info_description"></div>


      {/* <h4>{infoCard.title}</h4>
      <p>{infoCard.application_type}</p>
      <p>{infoCard.year}</p>
      <p>{infoCard.duration}</p>
      <p>{infoCard.contributors}</p> */}
      
    </motion.div>
    )

  }












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
