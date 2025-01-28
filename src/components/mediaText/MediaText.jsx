/* eslint-disable react/prop-types */
import "./mediaText.css";

function MediaText({ titulo1 = "", descripcion1 = "", imagen1 = null }) {
  return (
    <>
      <div className="mediaText">
        <div className="mediaText-contain">
          <img
            src={imagen1}
            alt="imagen-1"
            className="mediaText-contain__img"
          />
          <div className="mediaText-contain__text">
            <h2 className="text-titulo">{titulo1}</h2>
            <p className="text-descripcion">{descripcion1}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaText;
