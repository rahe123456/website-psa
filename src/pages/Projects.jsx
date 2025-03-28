import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
import "../styles/global.css";
import BannerSolo from "../components/bannerSolo/BannerSolo";
import cards from "../img/proyectos/gallery";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Projects() {
  const cardsData = [
    {
      image: cards[0].general,
      images: cards[0].hijos,
      title: "PLATAFORMA – LA ARENA S.A.",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[1].general,
      images: cards[1].hijos,
      title: "PLANTA DE ENVASADOS DE SAL",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[2].general,
      images: cards[2].hijos,
      title: "PLANTA INDUSTRIAL HUACHIPA",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[3].general,
      images: cards[3].hijos,
      title: "PLATAFORMA Y TUBERIA",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[4].general,
      images: cards[4].hijos,
      title: "ZONA DE EMBARQUE Y DESEMBARQUE AEROPUERTO",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[5].general,
      images: cards[5].hijos,
      title: "TECHO INDUSTRIAL VILLA EL SALVADOR",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[6].general,
      images: cards[6].hijos,
      title: "TEATRO SEGURA",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[7].general,
      images: cards[7].hijos,
      title: "PROYECTO ANFITEATRO",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[8].general,
      images: cards[8].hijos,
      title: "TECHO INDUSTRIAL LURIN",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[9].general,
      images: cards[9].hijos,
      title: "PLATAFORMA INDUSTRIAL",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: cards[10].general,
      images: cards[10].hijos,
      title: "NAVE INDUSTRIAL CON PLATAFORMA LURIN",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
  ];

  return (
    <>
      <BannerSolo banner="" bannerAlt="banner proyectos" />
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
