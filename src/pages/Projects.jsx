import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import "../styles/global.css";
import BannerSolo from "../components/bannerSolo/BannerSolo";
import cards from "../img/proyectos/gallery";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import bannerProyectos from "../img/proyectos/banner";

export default function Projects() {
  const cardsData = [
    {
      image: cards[1].general,
      images: cards[1].hijos,
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
    {
      image: cards[8].general,
      images: cards[8].hijos,
      title: "PROYECTO 4",
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
    {
      image: cards[9].general,
      images: cards[9].hijos,
      title: "PROYECTO 5",
      description: "",
      fechaEntrega: "10 Días",
      trabajo: `✓ Modelado y Detallado BIM – TEKLA STRUCTURES
✓ Planos de partes para fabricación.
✓ Planos de conjuntos.
✓Planos de Montaje.
✓ Informes detallados.
✓ Modelo IFC`,
      anoObra: "2023",
    },
    {
      image: cards[10].general,
      images: cards[10].hijos,
      title: "PROYECTO 6",
      description: "",
      fechaEntrega: "5 Días",
      trabajo: `✓ Modelado y Detallado BIM – TEKLA STRUCTURES
✓ Planos de partes para fabricación.
✓ Planos de conjuntos.
✓Planos de Montaje.
✓ Informes detallados.
✓ Modelo IFC`,
      anoObra: "2023",
    },
  ];

  return (
    <>
      <BannerSolo
        bannerDesktop={bannerProyectos[0]}
        bannerMobile={bannerProyectos[1]}
        bannerAlt="banner proyectos"
      />
      <h2 className="title-certi">Nuestros proyectos</h2>
      <Gallery cards={cardsData} />
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
