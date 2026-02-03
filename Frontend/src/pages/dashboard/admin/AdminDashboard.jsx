import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
    </div>
  );
}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
        <Link to="/dashboard/admin/products" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="product-card" style={{ padding: 14 }}>
            <h3>Manage Products</h3>
            <p>Add / Edit / Delete</p>
          </div>
        </Link>

        <div className="product-card" style={{ padding: 14 }}>
          <h3>Orders</h3>
          <p>Next step</p>
        </div>

        <div className="product-card" style={{ padding: 14 }}>
          <h3>Users</h3>
          <p>Next step</p>
        </div>
      </div>
   
  

