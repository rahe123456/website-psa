import Banner from "../components/banner/Banner";
import Carrousel from "../components/carrousel/Carrousel";
import MediaText from "../components/mediaText/MediaText";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import "../styles/global.css";

import mediaText1 from "../img/inicio/imagen-11.jpg";
import cardsHome from "../img/inicio/cardHome";
import cards from "../img/proyectos/gallery";
import slides from "../img/inicio/sliderHome";
import carrouselHome from "../img/inicio/carrouselHome";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  const slidesData = [
    {
      image: slides[0],
      title: "Modelado de Estructuras Metalicas",
      description:
        "Tekla Structures es una herramienta poderosa para el desarrollo de proyectos de ingeniería. Su capacidad para modelar estructuras detalladas, gestionar información BIM, generar planos automáticamente y simular la construcción en 4D permite mejorar la eficiencia, la precisión y la colaboración en todas las etapas del proyecto",
    },
    {
      image: slides[1],
      title: "Modelado de Estructuras Metalicas",
      description:
        "Puntos Clave: Modelado estructural detallado. Gestión de información BIM. Generación automática de planos. Simulación de construcción 4D.",
    },
    {
      image: slides[2],
      title: "Modelado  concreto armado",
      description:
        "El modelado ofrece una solución integral para el desarrollo de proyectos de concreto, mejorando la precisión, la eficiencia y la colaboración.",
    },
    {
      image: slides[3],
      title: "Modelado  concreto armado",
      description:
        "Desde el modelado 3D paramétrico hasta la simulación de la construcción y la gestión de armaduras, el software optimiza cada etapa del proyecto.",
    },
    {
      image: slides[4],
      title: "Modelado de sistema Eléctricas",
      description:
        "La fase inicial de cualquier proyecto eléctrico es la planificación. Esto implica definir los objetivos, evaluar la demanda energética y seleccionar la mejor ubicación para las subestaciones y centros de transformación.",
    },
    {
      image: slides[5],
      title: "Modelado de sistema Eléctricas",
      description: "",
    },
    {
      image: slides[6],
      title: "Cálculo y Diseño",
      description:
        "*Precisión y Eficiencia: Reduce errores y optimiza los procesos de producción  *Optimizacion de Recursos: Minimiza desperdicios y reduce costos operativos  *Estética Funcional: Equilibra belleza y utilidad en cada diseño",
    },
    {
      image: slides[7],
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

  const carrouselData = carrouselHome.map((image) => ({
    image,
  }));

  const cardsData = [
    {
      image: cards[5].general,
      images: cards[5].hijos,
      title: "PROYECTO 1",
      fechaEntrega: "2 Días",
      trabajo: `✓ Modelado y Detallado BIM – TEKLA STRUCTURES
✓ Planos de partes para fabricación.
✓ Planos de conjuntos.
✓Planos de Montaje.
✓ Informes detallados.
✓ Modelo IFC`,
      anoObra: "2022",
    },
    {
      image: cards[6].general,
      images: cards[6].hijos,
      title: "PROYECTO 2",
      description: "",
      fechaEntrega: "4 Días",
      trabajo: `✓ Modelado y Detallado BIM – TEKLA STRUCTURES
✓ Planos de partes para fabricación.
✓ Planos de conjuntos.
✓Planos de Montaje.
✓ Informes detallados.
✓ Modelo IFC`,
      anoObra: "2022",
    },
    {
      image: cards[7].general,
      images: cards[7].hijos,
      title: "PROYECTO 3",
      description: "",
      fechaEntrega: "7 Días",
      trabajo: `✓ Modelado y Detallado BIM – TEKLA STRUCTURES
✓ Planos de partes para fabricación.
✓ Planos de conjuntos.
✓Planos de Montaje.
✓ Informes detallados.
✓ Modelo IFC`,
      anoObra: "2022",
    },
  ];
  return (
    <>
      <Banner
        slides={slidesData}
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

<strong>☛ Desarrollo modelado REVIT</strong>

<strong>☛ Gestion BIM</strong> 
"
          />
        </div>
        <div>
          <h2 className="title-certi">Nuestras licencias</h2>
          <Carrousel carrousel={carrouselData} className="carrousel-swiper" />
        </div>
        <div>
          <div className="bannerMensaje">
            <p className="bannerMensaje-txt">
              ¿Deseas asesoría para tu próximo proyecto? Nuestro equipo de
              especialistas <br /> está listo para resolver todas tus dudas y
              llevar tu proyecto al siguiente nivel.{" "}
            </p>
            <a className="bannerMensaje-link" href="./contacto">
              Cotizar aquí
            </a>
          </div>
        </div>
        <div>
          <h2 className="title-certi">Últimos proyectos</h2>
          <Gallery cards={cardsData} />
          <div className="btnProyect">
            <a className="btnProyect-link" href="./proyectos">
              Ver todos los proyectos
            </a>
          </div>
        </div>
      </div>
      <FloatingWhatsApp
        accountName="PSA Ingeniería y construcción"
        phoneNumber="+51924900702"
        statusMessage="Respondemos a la brevedad posible"
        chatMessage="¡Hola! 🤝 ¿Cómo podemos ayudarte?"
        placeholder="Envianos un mensaje"
      />
      <Footer />
    </>
  );
}
