import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/shop/shop';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import ProductDetails from './components/productDetails/productDetail.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import CartSlider from "./components/cart/cart";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
