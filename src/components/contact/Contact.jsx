import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/contacto.scss";

export const Contact = ({ language }) => {
  const [alert, setAlert] = React.useState({
    message: "",
    type: "",
    status: false,
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3rf3yim", "template_uupek1s", form.current, "Evzi803AAoIqhJcdr").then(
      () => {
        handleAlert(language === "en" ? "Email sent successfully 😄" : "Correo enviado exitosamente 😄", "success");
        form.current.reset();
      },
      (error) => {
        handleAlert(language === "en" ? "Failed to send email 🧐" : "Fallo al enviar el correo 🧐", "error");
        console.log(error.text);
      }
    );
  };

  const variants = {
    off: { opacity: 0, x: 100, position: "absolute"},
    on: { opacity: 1, x: 0, position: "absolute", zIndex: 1},
  };

  const handleAlert = (message, type) => {
    setAlert({ message, type, status: true });
    setTimeout(() => {
      setAlert({ message: "", type: "", status: false });
    }, 3000);
  };
  return (
    <section id="contact" className="contacto__container">
      <AnimatePresence>
        {
          <motion.div initial="off" animate={alert.status ? "on" : "off"} variants={variants} transition={{
            duration: 0.1,
            type: "spring",
            ease: "easeInOut",
            stiffness: 150,

          }} className={`alert__form ${alert.type}`}>
            <p>{alert.message}</p>
          </motion.div>
        }
      </AnimatePresence>

      <div className="contacto__title">
        <h3 >{language === "en" ? "contact" : "contacto"}</h3>
      </div>

      <div className="contacto__divisor">
        <form onSubmit={sendEmail} ref={form} className="contacto__form">
         
          <div className="form__cont_first">

            <input required className="form__inputs" placeholder={language === "en" ? "Name" : "Nombre"} name="from_name" id="form__name" type="text" />


            <input  required className="form__inputs" name="subject" placeholder={language === "en" ? "Subject" : "Asunto"} id="form__subject" type="text" />
          
          </div>
         
     
          <input required name="user_email" placeholder={language === "en" ? "Email" : "Correo"} className="form__inputs form__inputs_email" id="form__email" type="email" />

          <textarea required  className="form__textArea" name="message" id="" cols="25" rows="4"></textarea>

          <button className="form__btn" value="Send" type="submit">
            {language === "en" ? "Submit" : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

// const AlertForm = ({ message  , type }) => {

//   const variants = {
//     off: { opacity: 0, y: -100 },
//     on: { opacity: 1, y: 0 },

//   }
//   return (
//     <>

//       <motion.div
//         initial="off"
//         animate="on"
//         variants={variants}
//       className={`alert__form ${type}`}>
//         <p>{message}</p>
//       </motion.div>

//     </>
//      );

// };
