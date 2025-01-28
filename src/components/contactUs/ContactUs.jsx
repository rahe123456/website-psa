import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1bk2gwe",
        "template_0h78ivf",
        form.current,
        "2NFuG1KgKKK2Q8jge"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="subject" />
      <input type="text" name="user_name" placeholder="Nombres y Apellidos" />
      <input type="email" name="user_email" placeholder="Correo Electrónico" />
      <input type="text" name="phone" placeholder="Celular" />
      <input type="text" name="empresa" placeholder="Empresa" />
      <textarea name="message" placeholder="Mensaje" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default ContactUs;
