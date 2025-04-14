import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="logo-sin-fondo.png"
            alt="Logo"
            className="footer-logo-img"
          />
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
                <a href="./">Inicio</a>
              </li>
              <li>
                <a href="./nosotros">Nosotros</a>
              </li>

              <li>
                <a href="./proyectos">Proyectos</a>
              </li>
              <li></li>
              <li>
                <a href="./contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <ul>
              <li>
                <a
                  target="__blank"
                  href="https://www.facebook.com/profile.php?id=61567160891560"
                >
                  Facebook
                </a>
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
