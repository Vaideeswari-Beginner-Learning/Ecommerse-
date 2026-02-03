import { useEffect, useMemo, useState } from "react";
import { cartTotal, getCart, removeFromCart, updateQty } from "../utils/cart.js";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
    const onUpdate = () => setCart(getCart());
    window.addEventListener("cart:updated", onUpdate);
    return () => window.removeEventListener("cart:updated", onUpdate);
  }, []);

  const total = useMemo(() => cartTotal(), [cart]);

  const placeOrder = () => {
    // For now: just demo behavior
    alert(`Order placed! Total: ₹${total}`);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart:updated"));
    setCart([]);
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Cart</h2>

      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-card">
            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <p className="cart-title">{item.title}</p>
              <p className="cart-price">₹{item.price}</p>

              {/* ✅ qty controls */}
              <div className="qty-row">
                <button
                  className="qty-btn"
                  onClick={() => updateQty(item.id, (item.qty || 1) - 1)}
                >
                  -
                </button>
                <div className="qty-value">{item.qty || 1}</div>
                <button
                  className="qty-btn"
                  onClick={() => updateQty(item.id, (item.qty || 1) + 1)}
                >
                  +
                </button>

                <div className="line-total">
                  ₹{item.price * (item.qty || 1)}
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ footer total + order */}
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button className="order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
