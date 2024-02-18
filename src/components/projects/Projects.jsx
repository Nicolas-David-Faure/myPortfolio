import React from 'react'
import './projects.scss'
import { motion } from 'framer-motion'


const projectsData = {
  en: [{
    title: 'Project 1',
    description: 'This is a description of the project 1',
    img: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
    id: 1
  }, {
    title: 'Project 2',
    description: 'This is a description of the project 2',
    img: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
    id: 2
  }, {
    title: 'Project 3',
    description: 'This is a description of the project 3',
    img: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
    id: 3
  }],
  es: [
    {
      title: 'Proyecto 1',
      description: 'Esta es una descripción del proyecto 1',
      img: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
      id: 1
    }, {
      title: 'Proyecto 2',
      description: 'Esta es una descripción del proyecto 2',
      img: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
      id: 2
    }, {
      title: 'Proyecto 3',
      description: 'Esta es una descripción del proyecto 3',
      img: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
      id: 3
    }
  ]
}



const ProjectsList = ({ language , projectsData }) => {

  console.log(projectsData[language]	)


  return (
    <ul className='ProjectsList__main'>
      {
        projectsData[language].map((project, index) => {
          return (
            <li key={index} className='ProjectsList__item'>
            
              <div className='ProjectsList__item__content'>
                <motion.h2

                
                >{project.title}</motion.h2>
              
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}


export const Projects = ({ language }) => {


  return (
    <div className='projects__main'>
      <div className='projects__container'>
        <div className='projects__header'>
          <h1>{language === "en" ? 'Projects' : 'Proyectos'}</h1>
        </div>

        <ProjectsList language={language} projectsData={projectsData} />
      </div>
    </div>
  )
}

