import React from 'react';
import './Header.css'; // Archivo CSS para los estilos del Header

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <h1>¡Pizzería Mamma Mía!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar</p>
      </div>
    </header>
  );
}

export default Header;
