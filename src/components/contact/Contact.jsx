import React from "react";
import "./styles/contacto.scss";

export const Contact = ({ language }) => {
  return (
    <section id="contact" className="contacto__container">
      <div  className="contacto__title">

        <h3>{language === "en" ? "contact" : "contacto"}</h3>

      </div>

      <div className="contacto__divisor">
        <form className="contacto__form">
          <div className="form__cont_label">
            <label className="form__label" for="form__name">
              Name:
            </label>
          </div>

          <input
            className="form__inputs"
            placeholder="Ex: Jhon Smit"
            id="form__name"
            type="text"
          />
          <div className="form__cont_label">
            <label className="form__label" for="form__email">
              Email:
            </label>
          </div>
          <input
            name="email"
            placeholder="Ex: any@any.com"
            className="form__inputs"
            id="form__email"
            type="email"
          />

          <textarea
            className="form__textArea"
            name="mensaje"
            id=""
            cols="25"
            rows="4"
          ></textarea>

          <button className="form__btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
