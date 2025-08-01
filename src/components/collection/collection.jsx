import React from 'react';
import './collection.css';
import { Link } from "react-router-dom";
import collectionImg from '../../assets/collection.jpg'; // adjust path if needed

function Collection() {
  return (
    <section
      className="collection"
      style={{ backgroundImage: `url(${collectionImg})` }}
    >
      <div className="collection-content">
        <h1>Designers Collection</h1>
        <h4>
          A soft celebration of summer, hand crafted in delicate pastels and
          rooted in traditional printing
        </h4>
        <Link to="/shop">
        <button className="collection-btn">Shop This Collection</button>
        </Link>
      </div>
    </section>
  );
}

export default Collection;
