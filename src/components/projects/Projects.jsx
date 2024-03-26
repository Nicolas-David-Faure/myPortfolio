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
import ReactPlayer from "react-player";

//logos tachs
import { arrayLogos } from "../../mooks/logosSkill";

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

const ProjectsSlider = ({ language }) => {
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
    console.log(info.point.x);

    if (info.point.x > 500) {
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
              language={language}
            />
          );
        })}
      </motion.div>

      <ProjectSliderCardSelector
        cardsToShow={cardsToShow}
        cardsLength={cardsLength}
        cardsDisplayed={cardsDisplayed}
        cardsDivided={cardsDivided}
      />
    </div>
  );
};

const ProjectSliderCard = ({ infoCard, direction, screenWidth, language }) => {
  const [cardIsHovered, setCardIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => setCardIsHovered(true)}
      onHoverEnd={() => setCardIsHovered(false)}
      className="projects__slider_container_card"
      // onTap={() =>
      onTouchEnd={() => setCardIsHovered(!cardIsHovered)}
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
            type: "tween",
            stiffness: screenWidth > 600 ? 100 : 800,

            delay: screenWidth > 600 ? 0 : 0.2,
          }}
          exit={{ opacity: 1, x: direction ? "-100%" : "100%" }}
          src={infoCard.img}
          alt="project"
        />
      </AnimatePresence>

      <AnimatePresence>
        {cardIsHovered && (
          <ProjectSliderCardInfo infoCard={infoCard} language={language} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const ProjectSliderCardInfo = ({ infoCard, language }) => {
  const { title, year } = infoCard;


  
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

  const logosFiltered = arrayLogos.filter((logo) =>
    infoCard.techs.includes(logo.id)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  let logosFilteredSlice = logosFiltered.slice(currentIndex, currentIndex + 3);

  if (logosFilteredSlice.length < 3) {
    logosFilteredSlice = [
      ...logosFilteredSlice,
      ...logosFiltered.slice(0, 3 - logosFilteredSlice.length),
    ];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logosFiltered.length);
    }, 4000); // Cambia el intervalo según tus necesidades

    return () => clearInterval(interval);
  }, [logosFilteredSlice]);

  return (
    <motion.div
      initial={"off"}
      animate={"on"}
      exit={"off"}
      variants={animateEntry}
      className="projects__slider_container_card_info"
    >
      <div className="projects__slider_container_card_info_video">
        <ReactPlayer
          volume={50}
          controls={true}
          playing={true}
          width={"100%"}
          height={"100%"}
          url={`https://www.youtube.com/${infoCard.video}`}
        />
      </div>
      <div className="projects__slider_container_card_info_description">
        <div className="projects__slider_container_card_info_description_title">
          <h4 className="">{title}</h4>
          <strong>{year}</strong>
        </div>
        <div className="projects__slider_container_card_info_description_info">
          <div className="projects__slider_container_card_info_description_info_techs">
            <AnimatePresence />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="projects__slider_container_card_info_description_info_techs_carousel"
            >
              <AnimatePresence>
                {logosFilteredSlice.map(({ logo, id }, i) => {
                  return (
                    <motion.span
                      layout
                      key={i}
                      initial={{ opacity: 0 }}
                    
                      animate={{
                        opacity: [0, 0.5, 1],

                        transition: {
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.img
                        style={{ width: id === 8 ? 50 : "100%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout
                        key={i}
                        alt={`Image ${i}`}
                        src={logo}
                      />
                    </motion.span>
                  );
                })}
              </AnimatePresence>
            </motion.div>
            <AnimatePresence />
          </div>
            <h3>{language === "en" ? "description" : "descripción"}</h3>

          <p className="projects__slider_container_card_info_description_info_desc">{infoCard.description}</p>

          <div className="projects__slider_container_card_info_description_functionalities">
            <h3>{language === "en" ? "functionalities" : "funcionalidades"}</h3>

            {Array.isArray(infoCard.functionalities)
              ? infoCard.functionalities.map((func, i) => (
                  <li
                    className="projects__slider_container_card_info_description_functionalities_list projects__slider_container_card_info_description_functionalities_list_isArray"
                    key={i}
                  >
                    {func}
                  </li>
                ))
              : Object.entries(infoCard.functionalities).map(
                  ([title, values], i) => {
                    return (
                      <li
                        className="projects__slider_container_card_info_description_functionalities_list"
                        key={i}
                      >
                        <h4>{title}</h4>
                        <ul>
                          {values.map((value, i ) => (
                            <li key={i}>{value}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                )}
          </div>
          {/* {infoCard.contributors ? (
            <>
              <h3>{language === "en" ? "contributors" : "participantes"}</h3>
              <p>{infoCard.contributors}</p>
            </>
          ) : (
            <h5>
              {language === "en" ? "Individual project" : "proyecto individual"}
            </h5>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSliderCardSelector = ({
  cardsLength,
  cardsDisplayed,
  cardsToShow,
}) => {
  return (
    <div className="projects__slider_selector ">
      {Array.from({ length: cardsLength }, (card, i) => (
        <div
          className={`projects__slider_selector_btn ${
            cardsDisplayed.find((card) => card.id - 1 === i)
              ? "projects__slider_selector_btn_selected"
              : ""
          } `}
          key={i * 1235}
        ></div>
      ))}
    </div>
  );
};
