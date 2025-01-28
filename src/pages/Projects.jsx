import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import "../styles/global.css";

import imagen1 from "../img/imagen-1.png";
import imagen2 from "../img/imagen-2.png";
import imagen3 from "../img/imagen-3.png";
import imagen4 from "../img/imagen-4.jpg";
import imagen5 from "../img/imagen-5.jpg";
import imagen6 from "../img/imagen-6.png";
import imagen7 from "../img/imagen-7.png";
import imagen8 from "../img/imagen-8.png";
import imagen9 from "../img/imagen-9.png";
import imagen10 from "../img/imagen-10.png";
import imagen11 from "../img/imagen-11.jpg";

import bannerProyectos from "../img/slider3.jpg";
import BannerSolo from "../components/bannerSolo/BannerSolo";

export default function Projects() {
  const cards = [
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
    {
      image: imagen4,
      description: "PLATAFORMA Y TUBERIA",
    },
    {
      image: imagen5,
      description: "ZONA DE EMBARQUE Y DESEMBARQUE AEROPUERTO",
    },
    {
      image: imagen6,
      description: "TECHO INDUSTRIAL VILLA EL SALVADOR",
    },
    {
      image: imagen7,
      description: "TEATRO SEGURA",
    },
    {
      image: imagen8,
      description: "PROYECTO ANFITEATRO",
    },
    {
      image: imagen9,
      description: "TECHO INDUSTRIAL LURIN",
    },
    {
      image: imagen10,
      description: "PLATAFORMA INDUSTRIAL",
    },
    {
      image: imagen11,
      description: "NAVE INDUSTRIAL CON PLATAFORMA LURIN",
    },
  ];

  return (
    <>
      <BannerSolo banner={bannerProyectos} bannerAlt="banner proyectos" />
      <Gallery cards={cards} />
      <Footer />
    </>
  );
}
