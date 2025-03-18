import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from '../pizzas'; // Importamos las pizzas dinámicamente

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
