import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
// import Home from './components/Home';
// import Register from './components/Registro';
// import LoginPage from './components/Login';
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <>
      <Navbar />
       {/* <Home /> */}
      {/* <Register /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
};

export default App;

