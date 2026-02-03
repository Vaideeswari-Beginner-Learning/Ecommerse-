import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cartCount } from "../utils/cart.js";

export default function Navbar() {
  const [count, setCount] = useState(cartCount());

  useEffect(() => {
    const update = () => setCount(cartCount());
    window.addEventListener("cart:updated", update);
    return () => window.removeEventListener("cart:updated", update);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Furniture Shop</Link>
        <Link to="/products" className="nav-link">Products</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart" className="nav-link">
          Cart <span className="cart-badge">{count}</span>
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  );
}
