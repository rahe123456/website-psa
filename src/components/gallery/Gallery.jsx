/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./gallery.css";

Modal.setAppElement("#root");

export default function Gallery({ cards }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setSelectedImage(card.images[0]); // Primera imagen como predeterminada
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCard(null);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="contenedor-imagenes">
        {cards.map((card, index) => (
          <div className="imagen" key={index}>
            <img src={card.image} alt="imagen-1" />
            <div className="overlayGa">
              <div className="overlayGa-contain">
                <h2>{card.title}</h2>
                <button onClick={() => openModal(card)}>Leer más</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIsOpen && selectedCard && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-body">
              <div className="modal-body__img">
                {/* Imagen principal */}
                <div className="modal-image-container">
                  <img
                    src={selectedImage}
                    alt="Imagen seleccionada"
                    className="modal-main-image"
                  />
                </div>

                {/* Miniaturas de imágenes */}
                <div className="modal-thumbnails">
                  {selectedCard.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className={`thumbnail ${
                        selectedImage === img ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="modal-info">
                <h2>{selectedCard.title}</h2>
                {selectedCard.description ? (
                  <p>{selectedCard.description}</p>
                ) : (
                  " "
                )}
                <div className="modal-details">
                  <div className="modal-details__descrip">
                    <p>
                      <strong>📆FECHA DE ENTREGA: </strong>
                    </p>
                    <p>{selectedCard.fechaEntrega}</p>
                  </div>
                  <div className="modal-details__descrip">
                    <p>
                      <strong>⏳ TRABAJO: </strong>
                    </p>
                    <p>{selectedCard.trabajo}</p>
                  </div>
                  <div className="modal-details__descrip">
                    <p>
                      <strong>⏳ AÑO DE OBRA: </strong>
                    </p>
                    <p>{selectedCard.anoObra}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
