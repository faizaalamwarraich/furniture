import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/productData";
import "./productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return <h2>Product not found</h2>;

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <div className="product-details">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">Rs{product.price.toFixed(2)}</p>
        <p className="category">{product.category}</p>
        <p className="desc">{product.description}</p>

        <div className="quantity-control">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="number" min="1" value={quantity} readOnly />
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <button className="add-to-cart">Add to cart</button>
      </div>

      <div className="product-tabs">
        <div className="tab-headers">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews.length})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && <p>{product.description}</p>}
          {activeTab === "reviews" && (
            product.reviews.length > 0 ? (
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.user}</strong>: {review.comment} ({review.rating}/5)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
