import "./Footer.css";
import logo from "../../img/logo-sin-fondo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Sobre Nosotros</h4>
            <p>
              Somos un grupo de proyectistas estructurales, deseando ser una
              alternativa de solución a los requerimientos de su empresa en el
              rubro metal mecánico, encargándonos de sus necesidades en forma
              integral.
            </p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-bottom">
        © 2025 PSA Ingeniería y construcción E.I.R.L. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
