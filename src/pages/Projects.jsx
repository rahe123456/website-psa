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
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "PLATAFORMA – LA ARENA S.A.",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen2,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "PLANTA DE ENVASADOS DE SAL",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen3,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "PLANTA INDUSTRIAL HUACHIPA",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen4,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "PLATAFORMA Y TUBERIA",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen5,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "ZONA DE EMBARQUE Y DESEMBARQUE AEROPUERTO",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen6,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "TECHO INDUSTRIAL VILLA EL SALVADOR",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen7,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "TEATRO SEGURA",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen8,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "PROYECTO ANFITEATRO",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen9,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "TECHO INDUSTRIAL LURIN",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen10,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
      title: "PLATAFORMA INDUSTRIAL",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      ubicacion: "UBICACION OBRA",
      areaConstruida: "27.000 m2",
      anoObra: "2024",
      tonelajeObra: "650 Tn",
    },
    {
      image: imagen11,
      images: [imagen1, imagen2, imagen3, imagen5, imagen6],
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
      <BannerSolo banner={bannerProyectos} bannerAlt="banner proyectos" />
      <Gallery cards={cards} />
      <Footer />
    </>
  );
}
