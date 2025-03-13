import Banner from "../components/banner/Banner";
import Carrousel from "../components/carrousel/Carrousel";
import MediaText from "../components/mediaText/MediaText";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import "../styles/global.css";

import sliderBanner1 from "../img/inicio/sliderHome/TEKLA-1.png";
import sliderBanner2 from "../img/inicio/sliderHome/TEKLA-2.png";
import sliderBanner3 from "../img/inicio/sliderHome/CASA-1.jpg";
import sliderBanner4 from "../img/inicio/sliderHome/CASA-2.jpg";
import sliderBanner5 from "../img/inicio/sliderHome/CALCULO-ELECTRICO1.jpg";
import sliderBanner6 from "../img/inicio/sliderHome/CALCULO-ELECTRICO2.jpg";
import sliderBanner7 from "../img/inicio/sliderHome/CALCULO-ESTRUC1.JPG";
import sliderBanner8 from "../img/inicio/sliderHome/CALCULO-ESTRUC2.JPG";

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

import cardHome1 from "../img/inicio/cardHome/imagen-1.png";
import cardHome2 from "../img/inicio/cardHome/imagen-2.png";
import cardHome3 from "../img/inicio/cardHome/imagen-3.png";

export default function Home() {
  const slides = [
    {
      image: sliderBanner1,
      title: "Modelado de Estructuras Metalicas",
      description:
        "Tekla Structures es una herramienta poderosa para el desarrollo de proyectos de ingeniería. Su capacidad para modelar estructuras detalladas, gestionar información BIM, generar planos automáticamente y simular la construcción en 4D permite mejorar la eficiencia, la precisión y la colaboración en todas las etapas del proyecto",
    },
    {
      image: sliderBanner2,
      title: "Modelado de Estructuras Metalicas",
      description:
        "Puntos Clave: Modelado estructural detallado. Gestión de información BIM. Generación automática de planos. Simulación de construcción 4D.",
    },
    {
      image: sliderBanner3,
      title: "Modelado  concreto armado",
      description:
        "El modelado ofrece una solución integral para el desarrollo de proyectos de concreto, mejorando la precisión, la eficiencia y la colaboración.",
    },
    {
      image: sliderBanner4,
      title: "Modelado  concreto armado",
      description:
        "Desde el modelado 3D paramétrico hasta la simulación de la construcción y la gestión de armaduras, el software optimiza cada etapa del proyecto.",
    },
    {
      image: sliderBanner5,
      title: "Modelado de sistema Eléctricas",
      description:
        "La fase inicial de cualquier proyecto eléctrico es la planificación. Esto implica definir los objetivos, evaluar la demanda energética y seleccionar la mejor ubicación para las subestaciones y centros de transformación.",
    },
    {
      image: sliderBanner6,
      title: "Modelado de sistema Eléctricas",
      description: "",
    },
    {
      image: sliderBanner7,
      title: "Cálculo y Diseño",
      description: "",
    },
    {
      image: sliderBanner8,
      title: "Cálculo y Diseño",
      description: "",
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
      image: cardHome1,
      title: "CASA DE CAMPO",
      images: [cardHome1, cardHome2, cardHome3, cardHome1, cardHome2],
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cardHome2,
      title: "TAYLOY",
      images: [cardHome1, cardHome2, cardHome3, cardHome1, cardHome2],
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cardHome3,
      title: "LATAM",
      images: [cardHome1, cardHome2, cardHome3, cardHome1, cardHome2],
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
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
            titulo1="Modelado-Diseño-Gestion BIM"
            descripcion1="Somos Psa Ingenieria Y construcción , Contamos con años de experiencia desarrollando proyectos bim ,contamos con licencias originales. Los servicios que brindamos en los siguientes campos son:<br>

<strong>☛ Modelado 3D – Estructuras metálicas en General.</strong>
<p>✓ Detallamiento de estructuras metálicas.</p>
<p>✓ Planos de partes para fabricación.</p>
<p>✓ Planos de conjuntos.</p>
<p>✓Planos de Montaje.</p> 
<p>✓ Informes detallados.</p>
<p>✓ Modelo 3D</p> 

<strong>☛ Desarrollo de Ingeniería Básica de estructuras.</strong><br> 

<strong>☛ Desarrollo de Ingeniería planos eléctricos.</strong><br> 

<strong>☛ Desarrollo de Ingeniería de elementos mecánicos.</strong><br> 

<strong>☛ Desarrollo de Cálculos Estructurales – SAP2000</strong><br> 

<strong>☛ Gestion BIM</strong> 
"
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
