import React from 'react'
import './projects.scss'
import { motion } from 'framer-motion'
import iconDefaultStyles from '../../mooks/iconDefaultStyles.json'
import { RightArrowIcon } from '../../commons/icons/RightArrowIcon'

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

  const handleMouseEnter = (e) => {
    console.log('Mouse entered')
  }
  const handleMouseLeave = (e) => {
    console.log('Mouse left')
  }

  return (
    <ul className='projectsList__main'>
      {
        projectsData[language].map((project, index) => {
          return (
            <li key={index} className='projectsList__item'>
            
              <div className='projectsList__item__content'>

                <div className='projectsList__item__icon'>
                  <RightArrowIcon style={{...iconDefaultStyles, width: 20, height: 20}} />
                </div>
                <motion.h2
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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

