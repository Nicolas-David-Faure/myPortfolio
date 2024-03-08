import React from 'react'
import './contact.scss'

export const Contact = ({language}) => {
  return (
    <div className='contact__main'>
      <h1>{language === 'es' ? 'Contacto' : 'Contact'}</h1>
    
      
    </div>
  )
}
