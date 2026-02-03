import { Link } from "react-router-dom";
import { addToCart } from "../utils/cart.js";

export default function ProductCardGrid({ p }) {
  const img = p.images?.[0] || "";

  return (
    <div className="product-card">
      <img src={img} alt={p.title} />

      <div className="product-card-body">
        <p className="product-title">{p.title}</p>
        <p className="product-meta">{p.category} • {p.design || "Standard"}</p>
        <p className="product-price">₹{p.price}</p>

        <div className="card-actions">
          <button className="btn-small btn-add-cart" onClick={() => addToCart(p)}>
            Add
          </button>

          <Link to={`/p/${p.id}`} style={{ flex: 1 }}>
            <button className="btn-small btn-view" style={{ width: "100%" }}>
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
