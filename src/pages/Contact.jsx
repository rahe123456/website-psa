import ContactUs from "../components/contactUs/ContactUs";
import BannerSolo from "../components/bannerSolo/BannerSolo";

import imgForm from "../img/contacto/formulario/callcenter.jpg";
import Footer from "../components/footer/Footer";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Contact() {
  return (
    <>
      <BannerSolo banner="" bannerAlt="banner nosotros" />
      <div className="contact-container">
        <div className="contact-container__component">
          <div className="component-headerForm">
            <span className="component-headerForm__descrip">
              ¿Quieres realizar un Proyecto?
            </span>
            <h2 className="component-headerForm__title">Cotiza con Nosotros</h2>
            <p className="component-headerForm__descrip">
              Un asesor especializado de nuestro equipo se pondrá en contacto
              contigo.
            </p>
          </div>
          <ContactUs />
        </div>
        <img
          src={imgForm}
          alt="imagen formulario"
          className="contact-image contact-container__image"
        />
      </div>
      <FloatingWhatsApp
        accountName="PSA Ingeniería y construcción"
        phoneNumber="+51923689624"
        statusMessage="Respondemos a la brevedad posible"
        chatMessage="¡Hola! 🤝 ¿Cómo podemos ayudarte?"
        placeholder="Envianos un mensaje"
      />
      <Footer />
    </>
  );
}
