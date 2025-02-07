import Banner from "../components/banner/Banner";
import Carrousel from "../components/carrousel/Carrousel";
import MediaText from "../components/mediaText/MediaText";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import "../styles/global.css";

import sliderBanner1 from "../img/slider1.jpg";
import sliderBanner2 from "../img/slider2.jpg";
import sliderBanner3 from "../img/slider3.jpg";

import logoCarrousel1 from "../img/logo-1.jpg";
import logoCarrousel2 from "../img/logo-2.jpg";
import logoCarrousel3 from "../img/logo-3.jpg";
import logoCarrousel4 from "../img/logo-4.jpg";
import logoCarrousel5 from "../img/logo-5.jpg";
import logoCarrousel6 from "../img/logo-6.jpg";
import logoCarrousel7 from "../img/logo-7.jpg";
import logoCarrousel8 from "../img/logo-8.jpg";
import logoCarrousel9 from "../img/logo-9.jpg";
import logoCarrousel10 from "../img/logo-10.jpg";

import mediaText1 from "../img/imagen-11.jpg";

import imagen1 from "../img/imagen-1.png";
import imagen2 from "../img/imagen-2.png";
import imagen3 from "../img/imagen-3.png";

export default function Home() {
  const slides = [
    {
      image: sliderBanner1,
      title: "Modelado 3D – Estructuras metálicas en General",
      description: "Descripción para el slide 1.",
    },
    {
      image: sliderBanner2,
      title: "Desarrollo de Ingeniería Básica de estructuras",
      description: "Descripción para el slide 2.",
    },
    {
      image: sliderBanner3,
      title: "Desarrollo de Ingeniería planos eléctricos",
      description: "Descripción para el slide 3.",
    },
    {
      image: sliderBanner2,
      title: "Desarrollo de Ingeniería Básica de estructuras",
      description: "Descripción para el slide 4.",
    },
    {
      image: sliderBanner3,
      title: "Desarrollo de Ingeniería planos eléctricos",
      description: "Descripción para el slide 5.",
    },
  ];

  const swiperOptions = {
    autoplay: { delay: 5000 },
    effect: "fade",
    pagination: { clickable: true },
    navigation: false,
  };

  const carrousel = [
    {
      image: logoCarrousel1,
    },
    {
      image: logoCarrousel2,
    },
    {
      image: logoCarrousel3,
    },
    {
      image: logoCarrousel4,
    },
    {
      image: logoCarrousel5,
    },
    {
      image: logoCarrousel6,
    },
    {
      image: logoCarrousel7,
    },
    {
      image: logoCarrousel8,
    },
    {
      image: logoCarrousel9,
    },
    {
      image: logoCarrousel10,
    },
  ];

  const cardsHome = [
    {
      image: imagen1,
      description: "PLATAFORMA – LA ARENA S.A.",
    },
    {
      image: imagen2,
      description: "PLANTA DE ENVASADOS DE SAL",
    },
    {
      image: imagen3,
      description: "PLANTA INDUSTRIAL HUACHIPA",
    },
  ];
  return (
    <>
      <Banner
        slides={slides}
        options={swiperOptions}
        className="servicios-swiper"
      />
      <div>
        <div>
          <MediaText
            imagen1={mediaText1}
            titulo1="Título de prueba"
            descripcion1="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
          />
        </div>
        <div>
          <h2 className="title-certi">Nuestras licencias</h2>
          <Carrousel carrousel={carrousel} className="carrousel-swiper" />
        </div>
        <div>
          <div className="bannerMensaje">
            <p className="bannerMensaje-txt">
              ¿Deseas asesoría para tu próximo proyecto? Nuestro equipo de
              especialistas <br /> está listo para resolver todas tus dudas y
              llevar tu proyecto al siguiente nivel.{" "}
            </p>
            <a className="bannerMensaje-link">Cotizar aquí</a>
          </div>
        </div>
        <div>
          <h2 className="title-certi">Últimos proyectos</h2>
          <Gallery cards={cardsHome} />
          <div className="btnProyect">
            <a className="btnProyect-link">Ver todos los proyectos</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
