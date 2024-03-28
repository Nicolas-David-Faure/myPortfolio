import React from "react";
import "./styles/contacto.scss";
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID
export const Contact = ({ language }) => {


  

  console.log(SERVICE_ID)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }



  return (
    <section id="contact" className="contacto__container">
      <div className="contacto__title">
        <h3>{language === "en" ? "contact" : "contacto"}</h3>
      </div>

      <div className="contacto__divisor">
        <form onSubmit={sendEmail} className="contacto__form">
          <div className="form__cont_label">
            <label className="form__label" for="form__name">
              {language === "en" ? "Name:" : "Nombre:"}
            </label>
          </div>

          <input className="form__inputs" placeholder="Jhon Smith" id="form__name" type="text" />
          <div className="form__cont_label">
            <label className="form__label" for="form__email">
             {language === "en" ? "Email:" : "Correo:"}
            </label>
          </div>
          <input
            name="email"
            placeholder="any@any.com"
            className="form__inputs"
            id="form__email"
            type="email"
          />

          <textarea className="form__textArea" name="mensaje" id="" cols="25" rows="4"></textarea>

          <button  onClick={sendEmail} className="form__btn" type="submit">
            {language === "en" ? "Submit" : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};
