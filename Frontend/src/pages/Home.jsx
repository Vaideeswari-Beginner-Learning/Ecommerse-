import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DESIGN_MAP = {
  Sofa: ["L-Shape", "Wooden", "Premium", "Modern", "Recliner"],
  Chair: ["Office", "Gaming", "Visitor", "Executive"],
  Table: ["Dining", "Study", "Coffee", "Office"],
  Interior: ["Lamp", "Wall Shelf", "Curtains", "Carpet", "Mirror"],
};


export default function Home() {
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState("All");

  const categories = [
    { name: "Sofa", desc: "Comfort for living rooms" },
    { name: "Chair", desc: "Office & ergonomic chairs" },
    { name: "Table", desc: "Study, dining & coffee tables" },
    { name: "Interior", desc: "Lamps, shelves & décor" }
  ];

  const onCategoryClick = (cat) => {
    // Toggle dropdown
    if (openCategory === cat) {
      setOpenCategory(null);
      return;
    }
    setOpenCategory(cat);
    setSelectedDesign("All");
  };

  const onGo = () => {
    if (!openCategory) return;

    // Navigate with filters
    const cat = encodeURIComponent(openCategory);
    const des = encodeURIComponent(selectedDesign);

    if (selectedDesign === "All") navigate(`/products?category=${cat}`);
    else navigate(`/products?category=${cat}&design=${des}`);
  };

  return (
    <div>
      <h2>Shop by Category</h2>

      <div className="grid-4">
        {categories.map((c) => (
          <div
            key={c.name}
            className="card"
            style={{
              cursor: "pointer",
              border: openCategory === c.name ? "2px solid #111" : "1px solid #eee"
            }}
            onClick={() => onCategoryClick(c.name)}
          >
            <div style={{ fontWeight: 900, fontSize: 18 }}>{c.name}</div>
            <div className="small" style={{ marginTop: 6 }}>{c.desc}</div>
            <div style={{ marginTop: 10 }} className="small">Click to choose design ↓</div>
          </div>
        ))}
      </div>

      {/* ✅ Dropdown shows ONLY when a category is clicked */}
      {openCategory && (
        <div className="card" style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ fontWeight: 900 }}>
            {openCategory} Designs:
          </div>

          <select
            className="input"
            style={{ maxWidth: 260 }}
            value={selectedDesign}
            onChange={(e) => setSelectedDesign(e.target.value)}
          >
            {DESIGN_MAP[openCategory].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <button className="btn btn-dark" onClick={onGo}>
            Show Products
          </button>

          <button className="btn btn-light" onClick={() => setOpenCategory(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
