import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <form className="auth-form">
          <input className="auth-input" placeholder="Name" />
          <input className="auth-input" placeholder="Email" />
          <input className="auth-input" placeholder="Password" type="password" />
          <button className="auth-btn">Register</button>
        </form>

        <p className="auth-link">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
