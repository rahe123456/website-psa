/* eslint-disable react/prop-types */
import "./gallery.css";

export default function Gallery({ cards }) {
  return (
    <div className="contenedor-imagenes">
      {cards.map((card, index) => (
        <div className="imagen" key={index}>
          <img src={card.image} alt="imagen-1" />
          <div className="overlayGa">
            <div className="overlayGa-contain">
              <h2>{card.description}</h2>
              <a href="#">Leer más</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
