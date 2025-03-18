import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Aquí guardaremos los datos de la pizza

  useEffect(() => {
    // Hacer la solicitud a la API para obtener los detalles de la pizza
    fetch('http://localhost:5000/api/pizzas/p001')  // Endpoint de la pizza con ID p001
      .then((response) => response.json())  // Convertir la respuesta a formato JSON
      .then((data) => setPizza(data))  // Guardar los datos en el estado
      .catch((error) => console.error('Error fetching data:', error));  // Manejar errores
  }, []);  // El array vacío asegura que la solicitud se haga solo una vez al montar el componente

  if (!pizza) {
    return <div>Loading...</div>;  // Mientras esperamos la respuesta de la API, mostramos un mensaje de carga
  }

  return (
    <div className="pizza-container">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="pizza-image" /> {/* Cambié image a img */}
      <p>{pizza.desc}</p> {/* Cambié description a desc */}
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <button className="add-to-cart">Agregar al carrito</button> {/* No funcional aún */}
    </div>
  );
};

export default Pizza;
