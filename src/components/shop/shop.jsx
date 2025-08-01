import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx"; // 🔗 Import Link
import products from "../../data/products";
import "./shop.css";

function Shop() {
  const { addToCart } = useCart();
  return (
    <div className="shop-page">
      <h2 className="shop-title">Explore Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="btn-group">
            <button
             className="btn"
             onClick={() =>
             addToCart({
             id: product.id,
             name: product.name,
             price: product.price,  // no parsing
             image: product.image
          })
          }
          >
          Add to Cart
          </button>
            <Link to={`/product/${product.id}`} className="btn">View Product</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
