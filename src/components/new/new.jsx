import React from 'react';
import './new.css';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import sampleImg from '../../assets/chair.jpg'; 
import bedimg from '../../assets/bed.jpg';
import lampimg from '../../assets/lamp.jpg';
import mirrorimg from '../../assets/mirror.jpg';
import swingimg from '../../assets/swing.jpg';
import sofaimg from '../../assets/sofa.jpg';
import tableimg from '../../assets/table.jpg';
import consoletableimg from '../../assets/consoletable.jpg';

const products = [
  { id: 1, name: 'Elegant Chair', price: 'Rs 15,000/-', image: sampleImg },
  { id: 2, name: 'Tall Floor Lamp', price: 'Rs 20,000/-', image: lampimg },
  { id: 3, name: 'Mirror with Console Table', price: 'Rs 55,000/-', image: mirrorimg },
  { id: 4, name: 'Luxury Bed', price: 'Rs 65000/-', image: bedimg },
  { id: 5, name: 'Garden Swing', price: 'Rs 25,000/-', image: swingimg },
  { id: 6, name: 'White Sofa', price: 'Rs 35,000/-', image: sofaimg },
  { id: 7, name: 'Office Table Chair', price: 'Rs 45,000/-', image: tableimg },
  { id: 8, name: 'Console Table', price: 'Rs 25000/-', image: consoletableimg },
];

function New() {
  return (
    <section className="new-section">
      <div className ="new-header">
         <h2 className="new-title">New In</h2>
       <a href="#" className="show-all-link">Show All</a>
       </div>
      <div className="product-slider">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-actions">
              <button><FaEye /> View</button><button><FaShoppingCart /> Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default New;
