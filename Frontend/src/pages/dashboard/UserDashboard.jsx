import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { logout } from "../../utils/auth.js";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <p>Welcome, <b>{user?.name || "User"}</b></p>
      <p>Email: {user?.email}</p>

      <div style={{ marginTop: 14 }}>
        <button className="order-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
