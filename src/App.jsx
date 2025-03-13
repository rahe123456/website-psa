/*import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import logo from "./img/psa-logo.jpeg";

function App() {
  return (
    <>
      <Router>
        <nav>
          <div>
            <Link>
              <img
                src={logo}
                alt="Logo PSA ingeniería y construcción"
                className="logo"
              ></img>
            </Link>
          </div>
          <div>
            <Link to="/">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/contact">Contacto</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
*/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "active" : ""
        }`}
      >
        <div className="navbar-container">
          <Link to="/" onClick={closeMenu}>
            <img
              src="psa-logo.jpeg"
              alt="Logo PSA ingeniería y construcción"
              className="logo"
            />
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "show" : ""}`}>
            {menuOpen && (
              <button className="close-menu" onClick={closeMenu}>
                &times; {/* Esto es una X */}
              </button>
            )}
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
            <Link to="/nosotros" onClick={closeMenu}>
              Nosotros
            </Link>
            <Link to="/proyectos" onClick={closeMenu}>
              Proyectos
            </Link>
            <Link to="/contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
