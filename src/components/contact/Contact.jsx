import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/contacto.scss";

export const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    subject: "",
    user_email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    status: false,
  });
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_y5hzxdu", 
        "template_073affb", 
        form.current, 
        "aTw0R2SmFLDIHfPUP"
      );
      
      handleAlert(
        language === "en" ? "Message sent successfully! 🚀" : "¡Mensaje enviado exitosamente! 🚀", 
        "success"
      );
      form.current.reset();
      setFormData({
        from_name: "",
        subject: "",
        user_email: "",
        message: ""
      });
    } catch (error) {
      handleAlert(
        language === "en" ? "Failed to send message. Please try again." : "Error al enviar mensaje. Inténtalo de nuevo.", 
        "error"
      );
      console.log(error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAlert = (message, type) => {
    setAlert({ message, type, status: true });
    setTimeout(() => {
      setAlert({ message: "", type: "", status: false });
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="contacto__container">
      {/* Alert Notification */}
      <AnimatePresence>
        {alert.status && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring" }}
            className={`contacto__alert ${alert.type}`}
          >
            <div className="contacto__alert-content">
              <span className="contacto__alert-icon">
                {alert.type === "success" ? "✓" : "⚠"}
              </span>
              <p>{alert.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <motion.div 
        className="contacto__header"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>{language === "en" ? "Get In Touch" : "Ponte En Contacto"}</h3>
        <p className="contacto__subtitle">
          {language === "en" 
            ? "Ready to start a project together? Let's discuss how I can help bring your ideas to life."
            : "¿Listo para comenzar un proyecto juntos? Hablemos sobre cómo puedo ayudarte a dar vida a tus ideas."
          }
        </p>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        className="contacto__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="contacto__form-container">
          <motion.form 
            onSubmit={sendEmail} 
            ref={form} 
            className="contacto__form"
            variants={itemVariants}
          >
            <div className="contacto__form-header">
              <h4>{language === "en" ? "Send Message" : "Enviar Mensaje"}</h4>
              <p>{language === "en" ? "Fill out the form below and I'll get back to you as soon as possible." : "Completa el formulario y te responderé lo antes posible."}</p>
            </div>

            <div className="contacto__form-row">
              <div className="contacto__form-group">
                <label htmlFor="form__name">
                  {language === "en" ? "Name" : "Nombre"}
                </label>
                <input
                  required
                  className="contacto__input"
                  placeholder={language === "en" ? "Your name" : "Tu nombre"}
                  name="from_name"
                  id="form__name"
                  type="text"
                  value={formData.from_name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="contacto__form-group">
                <label htmlFor="form__subject">
                  {language === "en" ? "Subject" : "Asunto"}
                </label>
                <input
                  required
                  className="contacto__input"
                  name="subject"
                  placeholder={language === "en" ? "What's this about?" : "¿De qué se trata?"}
                  id="form__subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="contacto__form-group">
              <label htmlFor="form__email">
                {language === "en" ? "Email" : "Correo"}
              </label>
              <input
                required
                name="user_email"
                placeholder={language === "en" ? "your.email@example.com" : "tu.email@ejemplo.com"}
                className="contacto__input"
                id="form__email"
                type="email"
                value={formData.user_email}
                onChange={handleInputChange}
              />
            </div>

            <div className="contacto__form-group">
              <label htmlFor="form__message">
                {language === "en" ? "Message" : "Mensaje"}
              </label>
              <textarea
                required
                className="contacto__textarea"
                name="message"
                placeholder={language === "en" ? "Tell me about your project..." : "Cuéntame sobre tu proyecto..."}
                id="form__message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <motion.button
              className="contacto__submit-btn"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="contacto__loading-spinner"
                />
              ) : (
                <>
                  <span>{language === "en" ? "Send Message" : "Enviar Mensaje"}</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9"></polygon>
                  </motion.svg>
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info Sidebar */}
          <motion.div 
            className="contacto__info"
            variants={itemVariants}
          >
            <div className="contacto__info-content">
              <h4>{language === "en" ? "Let's Connect" : "Conectemos"}</h4>
              
              <div className="contacto__info-item">
                <div className="contacto__info-icon">📧</div>
                <div>
                  <h5>{language === "en" ? "Email" : "Correo"}</h5>
                  <p>nicolas.david.faure@gmail.com</p>
                </div>
              </div>

              <div className="contacto__info-item">
                <div className="contacto__info-icon">📍</div>
                <div>
                  <h5>{language === "en" ? "Location" : "Ubicación"}</h5>
                  <p>{language === "en" ? "Available for remote work worldwide" : "Disponible para trabajo remoto mundialmente"}</p>
                </div>
              </div>

              <div className="contacto__info-item">
                <div className="contacto__info-icon">⏰</div>
                <div>
                  <h5>{language === "en" ? "Response Time" : "Tiempo de Respuesta"}</h5>
                  <p>{language === "en" ? "Usually within 24 hours" : "Generalmente en 24 horas"}</p>
                </div>
              </div>

              <div className="contacto__social-links">
                <h5>{language === "en" ? "Follow Me" : "Sígueme"}</h5>
                <div className="contacto__social-icons">
                  <a 
                    href="https://github.com/Nicolas-David-Faure" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contacto__social-link"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🐙
                    </motion.div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nicolas-david-faure-b023ba240/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contacto__social-link"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💼
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
