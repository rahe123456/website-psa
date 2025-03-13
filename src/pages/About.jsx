import BannerSolo from "../components/bannerSolo/BannerSolo";
import MediaText from "../components/mediaText/MediaText";
import Carrousel from "../components/carrousel/Carrousel";
import sliderBanner1 from "../img/slider1.jpg";
import mediaText1 from "../img/imagen-11.jpg";
import Footer from "../components/footer/Footer";
import "./About.css";

import cliente1 from "../img/nosotros/carrouselClientes/comedsa.png";
import cliente2 from "../img/nosotros/carrouselClientes/latam.png";
import cliente3 from "../img/nosotros/carrouselClientes/reali.png";
import cliente4 from "../img/nosotros/carrouselClientes/tailoy.png";
import cliente5 from "../img/nosotros/carrouselClientes/vijicsa.png";
import cliente6 from "../img/nosotros/carrouselClientes/wc&hnos.png";

export default function About() {
  const carrouselClientes = [
    {
      image: cliente1,
    },
    {
      image: cliente2,
    },
    {
      image: cliente3,
    },
    {
      image: cliente4,
    },
    {
      image: cliente5,
    },
    {
      image: cliente6,
    },
  ];
  return (
    <>
      <BannerSolo banner={sliderBanner1} bannerAlt="banner nosotros" />
      <MediaText
        imagen1={mediaText1}
        titulo1="Psa ingeniería y construcción"
        descripcion1="Contamos con un equipo altamente calificado , comprometidos en brindar los mejores resultados , trabajando en equipo utilizando los programas adecuados."
      />
      <div class="contenedor">
        <div class="card">
          <img src="mision-icon.png" alt="Misión" class="icono" />
          <h2>Misión</h2>
          <p>
            Mejorar la optimización de tiempo de fabricación y procesos de los
            distintos proyectos a través del modelado BIM – 3D
          </p>
        </div>

        <div class="card">
          <img src="vision-icon.png" alt="Visión" class="icono" />
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
        <Carrousel carrousel={carrouselClientes} className="carrousel-swiper" />
      </div>
      <Footer />
    </>
  );
}
