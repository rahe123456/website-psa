import BannerSolo from "../components/bannerSolo/BannerSolo";
import MediaText from "../components/mediaText/MediaText";
import Carrousel from "../components/carrousel/Carrousel";
import Footer from "../components/footer/Footer";
import "./About.css";

import carrouselClientes from "../img/nosotros/carrouselClientes";
import bannerNosotros from "../img/nosotros/banner";
import iconoNosotros from "../img/nosotros/nosotros.webp";
import iconoMision from "../img/nosotros/mision.webp";
import iconoVision from "../img/nosotros/vision.webp";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function About() {
  const carrouselData = carrouselClientes.map((image) => ({
    image,
  }));
  return (
    <>
      <BannerSolo
        bannerDesktop={bannerNosotros[0]}
        bannerMobile={bannerNosotros[1]}
        bannerAlt="banner nosotros"
      />
      <MediaText
        imagen1={iconoNosotros}
        titulo1="Psa ingeniería y construcción"
        descripcion1="Contamos con un equipo altamente calificado , comprometidos en brindar los mejores resultados , trabajando en equipo utilizando los programas adecuados."
      />
      <div className="contenedor">
        <div className="card">
          <img src={iconoMision} alt="icono-misión" className="icono" />
          <h2>Misión</h2>
          <p>
            Mejorar la optimización de tiempo de fabricación y procesos de los
            distintos proyectos a través del modelado BIM – 3D
          </p>
        </div>

        <div className="card">
          <img src={iconoVision} alt="Visión" className="icono" />
          <h2>Visión</h2>
          <p>
            Ser la empresa líder en el desarrollo de proyectos de ingeniería a
            nivel nacional, a través de nuestra calidad y precisión en los
            trabajos realizados.
          </p>
        </div>
      </div>
      <div>
        <h2 className="title-certi">Nuestros clientes</h2>
        <Carrousel carrousel={carrouselData} className="carrousel-swiper" />
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
