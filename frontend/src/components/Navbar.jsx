import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Archivo CSS personalizado para estilos adicionales

const Navbar = () => {
  const total = 25000;
  const token = false; // Cambia a true para simular un usuario logueado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <a className="navbar-brand" href="#">🍕 Mamma Mía</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-danger nav-link">Home</button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-danger nav-link">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger nav-link">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-danger nav-link">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger nav-link">🔐 Register</button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="btn btn-danger nav-link">🛒 Total: ${total.toLocaleString('es-ES')}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

