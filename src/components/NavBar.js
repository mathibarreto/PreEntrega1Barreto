// NavBar.js
import React from 'react';
import CartWidget from '/CartWidget'; // Importa el componente CartWidget

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">VidaConecta</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Electrodomésticos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Ofertas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contacto</a>
          </li>
        </ul>
      </div>
      <CartWidget /> {/* Usa el componente CartWidget */}
    </nav>
  );
};

export default NavBar;
