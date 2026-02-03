import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setAuth } from "../utils/auth.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ TEMP (later connect backend)
    const role = email === "admin@gmail.com" ? "admin" : "user";

    setAuth({
      token: "demo-token",
      user: { name: role === "admin" ? "Admin" : "User", email, role },
    });

    if (role === "admin") navigate("/dashboard/admin");
    else navigate("/dashboard/user");
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <input className="auth-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input className="auth-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-link">
          New user? <Link to="/register">Register</Link>
        </p>

        <p className="auth-link" style={{ opacity: 0.7 }}>
          Admin demo: use <b>admin@gmail.com</b>
        </p>
      </div>
    </div>
  );
}
