import Banner from "../components/banner/Banner";
import Carrousel from "../components/carrousel/Carrousel";
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
import Footer from "../components/footer/Footer";

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
  return (
    <>
      <Banner
        slides={slides}
        options={swiperOptions}
        className="servicios-swiper"
      />
      <div>
        <h2 className="title-certi">Nuestras licencias</h2>
        <Carrousel carrousel={carrousel} className="carrousel-swiper" />
      </div>
      <Footer />
    </>
  );
}
