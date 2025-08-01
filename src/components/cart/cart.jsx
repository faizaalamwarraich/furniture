import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./cart.css";

function CartSlider({ isOpen, onClose }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calculate grand total
  const grandTotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className={`cart-slider ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  {/* Total price for this item */}
                  <p>Price: Rs{Number(item.price).toFixed(2)}</p>
                  <p>Total: Rs{(Number(item.price) * item.quantity).toFixed(2)}</p>

                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}

            {/* Grand total */}
            <div className="cart-total">
              <h3>Grand Total: Rs{grandTotal.toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSlider;
