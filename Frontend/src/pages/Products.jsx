import { useState } from "react";

export default function Products() {

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [design, setDesign] = useState("");

  const products = [
    {
      _id: "1",
      title: "Premium Sofa",
      category: "Sofa",
      design: "L-Shape",
      price: 25000,
      images: ["/Product/Sofa1.jpg"],
    },
    {
      _id: "2",
      title: "Office Chair",
      category: "Chair",
      design: "Office",
      price: 6000,
      images: ["/Product/Chair1.jpg"],
    },
  ];

  const filteredProducts = products.filter((p) => {
    return (
      (!category || p.category === category) &&
      (!design || p.design === design) &&
      p.title.toLowerCase().includes(q.toLowerCase())
    );
  });

  const clearAll = () => {
    setCategory("");
    setDesign("");
    setQ("");
  };

  const addToCart = (p) => {
    console.log("Add to cart:", p);
  };

  const viewProduct = (p) => {
    console.log("View:", p);
  };

  // ✅ RETURN MUST BE INSIDE FUNCTION
  return (
    <div className="container">
      <div className="products-layout">

        {/* LEFT FILTER */}
        <aside className="filters">
          <h3>Filters</h3>

          <button className="filter-btn" onClick={clearAll}>
            Show All Products
          </button>

          <select
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Sofa">Sofa</option>
            <option value="Chair">Chair</option>
          </select>

          {category === "Sofa" && (
            <div className="filter-row">
              {["L-Shape","Wooden","Premium","Modern","Recliner"].map((d) => (
                <button
                  key={d}
                  className="filter-btn"
                  onClick={() => setDesign(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </aside>

        {/* RIGHT MAIN */}
        <section className="products-main">
          <div className="products-header">
            <h2 style={{ margin: 0 }}>Products</h2>

            <div className="search-bar">
              <input
                className="search-input"
                placeholder="Search sofa, chair..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((p) => (
              <div key={p._id} className="product-card">
                <img src={p.images[0]} alt={p.title} />

                <div className="product-card-body">
                  <p className="product-title">{p.title}</p>
                  <p className="product-meta">
                    {p.category} • {p.design}
                  </p>
                  <p className="product-price">₹{p.price}</p>

                  <div className="card-actions">
                    <button
                      className="btn-small btn-add"
                      onClick={() => addToCart(p)}
                    >
                      Add
                    </button>

                    <button
                      className="btn-small btn-view"
                      onClick={() => viewProduct(p)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
}
