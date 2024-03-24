//cards
import photo1 from "../assets/img/photos_slider/photo_1.jpg";
import photo2 from "../assets/img/photos_slider/photo_2.jpg";
import photo3 from "../assets/img/photos_slider/photo_3.jpg";
import photo4 from "../assets/img/photos_slider/photo_4.jpg";
import photo5 from "../assets/img/photos_slider/photo_5.jpg";
import photo6 from "../assets/img/photos_slider/photo_6.jpg";
import ewineCover from "../assets/img/photos_slider/e-wine.jpeg";
import oneFeelCover from "../assets/img/photos_slider/oneFeel.jpeg";
import boxDeliveryCover from "../assets/img/photos_slider/boxDelivery.jpeg";
import tmdbflixCover from "../assets/img/photos_slider/tmdbflix.jpg";
import odontologiaCover from "../assets/img/photos_slider/odontologia.jpeg";

import restaurantBuenaVida from "../assets/img/photos_slider/restaurantBuenaVida.jpeg";
// import photo7 from "../assets/img/photos_slider/photo_7.jpg";
// import photo8 from "../assets/img/photos_slider/photo_8.jpg";
// import photo9 from "../assets/img/photos_slider/photo_9.jpg";
// import photo10 from "../assets/img/photos_slider/photo_10.jpg";
// import photo11 from "../assets/img/photos_slider/photo_11.jpg";
// import photo12 from "../assets/img/photos_slider/photo_12.jpg";



export const infoProjects = {
  "es": [
    {
      "id": 1,
      "title": "Box-Delivery",
      "application_type": "Fullstack",
      "fronted": ["reduxjs toolkit", "axios", "next", "docker", "tailwind css", "Typescript"],
      "backend": ["bcryptjs", "mongoose", "jwt", "swagger-ui-express"],
      "year": "2023-2024",
      "duration": "3 meses",
      "functionalities": {
        "GERENTE": [
          "Inicio de sesión",
          "Ver historial de programación por fecha",
          "Ver historial de entregas",
          "Ver actividad de los repartidores",
          "Ver el número de paquetes para cada repartidor",
          "Crear paquetes",
          "Ver paquetes",
          "Editar paquetes",
          "Eliminar paquetes"
        ],
        "REPARTO": [
          "Registro",
          "Inicio de sesión",
          "Recuperación de contraseña",
          "Seleccionar paquetes (máximo 10)",
          "Ver entregas pendientes",
          "Ver historial de entregas",
          "Eliminar historial de entregas",
          "Aceptar declaración de entrega"
        ],
        "OTRO": [
          "Persistencia de sesión",
          "Responsivo",
          "Localizar al repartidor y mostrarle hacia dónde se dirige en el mapa",
          "Sistema de puntos para paquetes entregados y penalizaciones por no completar entregas"
        ]
      },
      "description": "Box-Delivery es una aplicación web que sirve para gestionar la entrega de paquetes.",
      "contributors": ["Victoria Canclini", "Ivan Lucana", "Florencia Martinez", "German Cuevas"],
      "img": boxDeliveryCover,
      "video": "watch?v=o2HyftVzWe0"
    },
    {
      "id": 2,
      "title": "OneFeel",
      "application_type": "Fullstack",
      "frontend": ["React", "Firebase", "Sass", "Redux"],
      "backend": ["Firebase functions", "OpenAI"],
      "contributors": ["Martin Ferrando", "Fiama Talavera", "Isidro Molina"],
      "description": "OneFeel es una aplicación web que sirve para realizar análisis de emociones en tiempo real para detectar las emociones tanto de los agentes como de las personas y tener evaluación de estos mediante métricas y tablas con actualizaciones en tiempo real.",
      "functionalities": [
        "Chatbot análisis de emociones en mensajería",
        "Métricas",
        "Vista de tablas emociones",
        "Vista de tablas agentes",
        "Filtros"
      ],
      "year": "2023",
      "duration": "1 mes",
      "img": oneFeelCover,
      "video": "watch?v=sa8Znjr6uRc"
    },
    {
      "id": 3,
      "title": "Ewine",
      "application_type": "Fullstack",
      "frontend": ["framer-motion", "react", "react-dom", "react-redux", "react-router-dom", "sass"],
      "backend": ["express", "jsonwebtoken", "morgan", "nodemailer", "nodemon", "pg", "pg-hstore", "sequelize"],
      "contributors": ["Ivan Lucana", "Florencia Martinez", "Marcos Solis"],
      "description": "Ewine es un E-commerce para venta de vinos.",
      "functionalities": [
        "Registro",
        "Login",
        "Vista de producto",
        "Barra de búsqueda",
        "Perfil admin para añadir, quitar y editar productos",
        "Simulación de compra",
        "Envío de mensaje al correo electrónico al finalizar la compra"
      ],
      "year": "2023",
      "duration": "2 semanas",
      "img": ewineCover,
      "video": "watch?v=SUJLN86AfV8"
    },
    {
      "id": 4,
      "title": "TMDBflix",
      "application_type": "Fullstack",
      "participantes": ["Individual"],
      "fronted": ["react", "redux", "framer motion", "sass"],
      "backend": ["express", "jwt", "posgres sql", "sequelize"],
      "functionalities": [
        "Login",
        "Registro",
        "Vista de películas en pantalla principal",
        "Barra de búsqueda",
        "Sección de favoritos tanto de TV Series como de Películas",
        "Modal de descripción de películas con recomendaciones de películas similares",
        "Posibilidad de ver trailers"
      ],
      "description": "TMDBflix es un clon de Netflix que consume la API de TMDB.",
      "year": "2023",
      "duration": "1 semana",
      "img": tmdbflixCover,
      "video": "watch?v=3Z1c3Zt3y9E"
    },
    {
      "id": 5,
      "title": "Odontología",
      "application_type": "Frontend",
      "frontend": ["React", "SCSS", "Framer motion", "Redux"],
      "backend": [],
      "functionalities": [
        "Página de inicio",
        "Acerca de nosotros",
        "Contacto",
        "Posibilidad de sacar turnos online"
      ],
      "description": "Página web de odontología con posibilidad de sacar turnos online mediante un formulario.",
      "year": "2023",
      "duration": "1 mes",
      "img": odontologiaCover,
      "video": "watch?v=3Z1c3Zt3y9E"
    },
    {
      "id": 6,
      "title": "Restaurant Buena Vida",
      "application_type": "Frontend",
      "frontend": ["React", "Sass", "Framer motion", "Redux"],
      "backend": [],
      "functionalities": [
        "Vista de menú de comidas y bebidas",
        "Posibilidad de hacer una reserva"
      ],
      "description": "Página web de restaurante con posibilidad de sacar reserva online mediante un formulario.",
      "year": "2023",
      "duration": "-",
      "img": restaurantBuenaVida,
      "video": "watch?v=3Z1c3Zt3y9E"
    }
  ],
  "en": [
    {
      "id": 1,
      "title": "Box-Delivery",
      "application_type": "Fullstack",
      "frontend": ["reduxjs toolkit", "axios", "next", "docker", "tailwind css", "Typescript"],
      "backend": ["bcryptjs", "mongoose", "jwt", "swagger-ui-express"],
      "year": "2023-2024",
      "duration": "3 months",
      "functionalities": {
        "MANAGER": [
          "Login",
          "See schedule line history by date",
          "See delivery history",
          "See the activity of the deliverymen",
          "See the number of packages for each delivery person",
          "Create packages",
          "See packages",
          "Edit packages",
          "Delete packages"
        ],
        "DELIVERY": [
          "Register",
          "Login",
          "Password recovery",
          "Select packages (maximum 10)",
          "See pending deliveries",
          "See delivery history",
          "Delete delivery history",
          "Accept delivery declaration"
        ],
        "OTHER": [
          "Session persistence",
          "Responsive",
          "Locate the delivery person and show him where he is going on the map",
          "Points system for parcels delivered and penalties for not completing deliveries"
        ]
      },
      "description": "Box-Delivery is a web application used to manage the delivery of packages.",
      "contributors": ["Victoria Canclini", "Ivan Lucana", "Florencia Martinez", "German Cuevas"],
      "img": boxDeliveryCover,
      "video": "watch?v=o2HyftVzWe0"
    },
    {
      "id": 2,
      "title": "OneFeel",
      "application_type": "Fullstack",
      "frontend": ["React", "Firebase", "Sass", "Redux"],
      "backend": ["Firebase functions", "OpenAI"],
      "contributors": ["Martin Ferrando", "Fiama Talavera", "Isidro Molina"],
      "description": "OneFeel is a web application used to perform real-time emotion analysis to detect the emotions of both agents and individuals, and to evaluate them through metrics and tables with real-time updates.",
      "functionalities": [
        "Chatbot emotion analysis in messaging",
        "Metrics",
        "View emotions tables",
        "View agents tables",
        "Filters"
      ],
      "year": "2023",
      "duration": "1 month",
      "img": oneFeelCover,
      "video": "watch?v=sa8Znjr6uRc"
    },
    {
      "id": 3,
      "title": "Ewine",
      "application_type": "Fullstack",
      "frontend": ["framer-motion", "react", "react-dom", "react-redux", "react-router-dom", "sass"],
      "backend": ["express", "jsonwebtoken", "morgan", "nodemailer", "nodemon", "pg", "pg-hstore", "sequelize"],
      "contributors": ["Ivan Lucana", "Florencia Martinez", "Marcos Solis"],
      "description": "Ewine is an E-commerce for wine sales.",
      "functionalities": [
        "Registration",
        "Login",
        "Product view",
        "Search bar",
        "Admin profile to add, remove, and edit products",
        "Purchase simulation",
        "Send email message upon completing the purchase"
      ],
      "year": "2023",
      "duration": "2 weeks",
      "img":  ewineCover,
      "video":  "watch?v=SUJLN86AfV8"
    },
    {
      "id": 4,
      "title": "TMDBflix",
      "application_type": "Fullstack",
      "participants": ["Individual"],
      "client": ["react", "redux", "framer motion", "sass"],
      "api": ["express", "jwt", "posgres sql", "sequelize"],
      "functionalities": [
        "Login",
        "Register",
        "Main screen movie view",
        "Search bar",
        "Favorites section for both TV Series and Movies",
        "Movie description modal with recommendations of similar movies",
        "Ability to watch trailers"
      ],
      "description": "TMDBflix is a clone of Netflix consuming the TMDB API.",
      "year": "2023",
      "duration": "1 week",
      "img": tmdbflixCover,
      "video": "watch?v=3Z1c3Zt3y9E"
    },
    {
      "id": 5,
      "title": "Dentistry",
      "application_type": "Frontend",
      "frontend": ["React", "SCSS", "Framer motion", "Redux"],
      "backend": [],
      "functionalities": [
        "Home page",
        "About us",
        "Contact",
        "Ability to schedule appointments online"
      ],
      "description": "Dentistry website with the ability to schedule appointments online through a form.",
      "year": "2023",
      "duration": "1 month",
      "img": odontologiaCover,
      "video": "watch?v=3Z1c3Zt3y9E"
    },
    {
      "id": 6,
      "title": "Restaurant Buena Vida",
      "application_type": "Frontend",
      "frontend": ["React", "Sass", "Framer motion", "Redux"],
      "backend": [],
      "functionalities": [
        "View menu of food and drinks",
        "Ability to make a reservation"
      ],
      "description": "Restaurant website with the ability to make a reservation online through a form.",
      "year": "2023",
      "duration": "-",
      "img": restaurantBuenaVida,
      "video": "watch?v=3Z1c3Zt3y9E"
    }
  ]
}


