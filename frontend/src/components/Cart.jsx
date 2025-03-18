import React, { useState } from 'react';
import pizzas from './pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 1 })));

  const increment = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decrement = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: Math.max(0, pizza.quantity - 1) } : pizza
    ).filter(pizza => pizza.quantity > 0));
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);


  return (
    <div className="container my-5">
      <h2>Detalles del pedido:</h2>
      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex justify-content-between align-items-center mb-3">
          <img src={pizza.img} alt={pizza.name} style={{ width: '50px', borderRadius: '8px' }} />
          <span>{pizza.name}</span>
          <span>${pizza.price.toLocaleString('es-ES')}</span>
          
          {/* Contenedor de cantidad con flexbox para alineación correcta */}
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-danger d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }} onClick={() => decrement(pizza.id)}>-</button>
            <span className="text-center" style={{ minWidth: '30px' }}>{pizza.quantity}</span>
            <button className="btn btn-outline-primary d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }} onClick={() => increment(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString('es-ES')}</h3>
      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;

