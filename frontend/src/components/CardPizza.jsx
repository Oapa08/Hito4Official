import React from 'react';
import './CardPizza.css'; // Archivo CSS para estilos personalizados

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card m-3">
      <img src={img} className="card-img-top img-pizza" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <hr />
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <h4 className="text-center text-danger">Precio: ${price.toLocaleString('es-ES')}</h4>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-danger">Ver más</button>
          <button className="btn btn-danger">Añadir</button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;

